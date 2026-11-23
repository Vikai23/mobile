import { Fragment, useCallback, useEffect, useState } from "react";
import { ActivityIndicator } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { FontAwesome6 } from "@expo/vector-icons";
import { getArtworkUrl, getEvolutionChain, getIdFromUrl, getPokemon, getSpecies } from "@services/api";
import AlertBanner from "@components/alert-banner";
import TypeBadge from "@components/type-badge";
import { Button, ButtonText, Center, Screen, SectionTitle } from "@components/ui";
import { colors, lightTypeColor } from "@/theme";
import * as S from "./style";

// Deixa a primeira letra maiúscula (ex: "ivysaur" vira "Ivysaur")
function capitalize(text) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

// Mostra o número no formato da Pokédex (ex: 1 vira "#001")
function formatNumber(id) {
  return "#" + String(id).padStart(3, "0");
}

// O texto da Pokédex vem com as quebras de linha do jogo.
// Aqui a gente junta tudo em um parágrafo só.
function cleanText(text) {
  return text
    .replace(/­\s*/g, "") // hífen escondido que o jogo usa pra quebrar palavra
    .replace(/\s+/g, " ")
    .trim();
}

// Separa só as informações que a tela usa
function buildPokemon(pokemonData, speciesData) {
  // A primeira descrição em inglês é a do jogo em que o Pokémon apareceu pela primeira vez
  const entry = speciesData.flavor_text_entries.find((item) => item.language.name === "en");
  const genus = speciesData.genera.find((item) => item.language.name === "en");
  const name = speciesData.names.find((item) => item.language.name === "en");

  return {
    id: pokemonData.id,
    name: name ? name.name : capitalize(pokemonData.name),
    genus: genus ? genus.genus : "",
    types: pokemonData.types.map((item) => item.type.name),
    // A PokéAPI manda a altura em decímetros e o peso em hectogramas
    height: String(pokemonData.height / 10).replace(".", ","),
    weight: String(pokemonData.weight / 10).replace(".", ","),
    description: entry ? cleanText(entry.flavor_text) : "Sem descrição.",
    game: entry ? capitalize(entry.version.name) : "",
  };
}

// A cadeia de evolução vem em formato de árvore.
// Nos iniciais ela é sempre uma linha reta, então é só ir seguindo o primeiro "evolves_to".
function buildEvolutions(chain) {
  const list = [];
  let step = chain;

  while (step) {
    const details = step.evolution_details[0];
    list.push({
      id: getIdFromUrl(step.species.url),
      name: capitalize(step.species.name),
      level: details ? details.min_level : null,
    });
    step = step.evolves_to[0];
  }

  return list;
}

const Pokemon = () => {
  const navigation = useNavigation();
  const { id } = useRoute().params;

  const [pokemon, setPokemon] = useState(null);
  const [evolutions, setEvolutions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const load = useCallback(async () => {
    setLoading(true);
    setError("");
    try {
      // Busca o Pokémon e a espécie dele ao mesmo tempo
      const [pokemonData, speciesData] = await Promise.all([getPokemon(id), getSpecies(id)]);
      // A espécie traz o link da cadeia de evolução, aí dá pra buscar ela
      const chainData = await getEvolutionChain(getIdFromUrl(speciesData.evolution_chain.url));

      setPokemon(buildPokemon(pokemonData, speciesData));
      setEvolutions(buildEvolutions(chainData.chain));
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  }, [id]);

  useEffect(() => {
    load();
  }, [load]);

  if (loading) {
    return (
      <Screen edges={["bottom"]}>
        <Center><ActivityIndicator size="large" color={colors.red} /></Center>
      </Screen>
    );
  }

  if (error) {
    return (
      <Screen edges={["bottom"]}>
        <Center>
          <AlertBanner type="danger" message={error} />
          <Button onPress={load}><ButtonText>Tentar de novo</ButtonText></Button>
        </Center>
      </Screen>
    );
  }

  return (
    <Screen edges={["bottom"]}>
      <S.Scroll contentContainerStyle={{ paddingBottom: 24 }}>
        <S.Hero $color={lightTypeColor(pokemon.types[0])}>
          <S.PokedexNumber>{formatNumber(pokemon.id)}</S.PokedexNumber>
          <S.Name>{pokemon.name}</S.Name>
          <S.Genus>{pokemon.genus}</S.Genus>
          <S.Artwork source={{ uri: getArtworkUrl(pokemon.id) }} resizeMode="contain" />
          <S.Types>
            {pokemon.types.map((type) => <TypeBadge key={type} type={type} />)}
          </S.Types>
        </S.Hero>

        <S.Content>
          <S.Stats>
            <S.Stat>
              <S.StatLabel>Altura</S.StatLabel>
              <S.StatValue>{pokemon.height} m</S.StatValue>
            </S.Stat>
            <S.Stat>
              <S.StatLabel>Peso</S.StatLabel>
              <S.StatValue>{pokemon.weight} kg</S.StatValue>
            </S.Stat>
          </S.Stats>

          <S.Card>
            <SectionTitle>Descrição da Pokédex</SectionTitle>
            <S.Description>{pokemon.description}</S.Description>
            <S.Source>Texto original de Pokémon {pokemon.game}</S.Source>
          </S.Card>

          <S.Card>
            <SectionTitle>Evoluções</SectionTitle>
            <S.EvolutionRow>
              {evolutions.map((evolution, index) => (
                <Fragment key={evolution.id}>
                  {/* Entre um Pokémon e outro aparece uma seta com o nível da evolução */}
                  {index > 0 ? (
                    <S.Arrow>
                      <FontAwesome6 name="arrow-right" size={16} color={colors.muted} />
                      <S.ArrowText>Nv. {evolution.level}</S.ArrowText>
                    </S.Arrow>
                  ) : null}

                  <S.Evolution
                    $active={evolution.id === pokemon.id}
                    disabled={evolution.id === pokemon.id}
                    onPress={() => navigation.push("Pokemon", { id: evolution.id })}
                  >
                    <S.EvolutionImage source={{ uri: getArtworkUrl(evolution.id) }} resizeMode="contain" />
                    <S.EvolutionName numberOfLines={1}>{evolution.name}</S.EvolutionName>
                  </S.Evolution>
                </Fragment>
              ))}
            </S.EvolutionRow>
            <S.Hint>Toque em uma evolução para ver a Pokédex dela.</S.Hint>
          </S.Card>
        </S.Content>
      </S.Scroll>
    </Screen>
  );
};

export default Pokemon;
