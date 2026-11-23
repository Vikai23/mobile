import { useEffect, useState } from "react";
import { ActivityIndicator } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { FontAwesome6 } from "@expo/vector-icons";
import { getArtworkUrl, getEvolutionChain, getIdFromUrl, getPokemon, getSpecies } from "@services/api";
import { descriptions } from "@/data/descriptions";
import { capitalize, formatNumber } from "@/helpers";
import AlertBanner from "@components/alert-banner";
import TypeBadge from "@components/type-badge";
import { Button, ButtonText, Card, Center, Screen, SectionTitle } from "@components/ui";
import { colors, typeColorAlpha } from "@/theme";
import * as S from "./style";

// A PokéAPI manda a geração escrita assim: "generation-i", "generation-ii"...
const generationNumber = {
  "generation-i": 1,
  "generation-ii": 2,
  "generation-iii": 3,
  "generation-iv": 4,
  "generation-v": 5,
};

// Separa só as informações que a tela usa
function buildPokemon(pokemonData, speciesData) {
  const name = speciesData.names.find((item) => item.language.name === "en");
  // A categoria e a descrição em português ficam no arquivo descriptions.js
  const description = descriptions[pokemonData.id];

  return {
    id: pokemonData.id,
    name: name ? name.name : capitalize(pokemonData.name),
    category: description ? description.category : "",
    description: description ? description.text : "Sem descrição.",
    types: pokemonData.types.map((item) => item.type.name),
    // A PokéAPI manda a altura em decímetros e o peso em hectogramas
    height: String(pokemonData.height / 10).replace(".", ","),
    weight: String(pokemonData.weight / 10).replace(".", ","),
    generation: generationNumber[speciesData.generation.name],
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

  async function load() {
    setLoading(true);
    setError("");
    try {
      const pokemonData = await getPokemon(id);
      const speciesData = await getSpecies(id);
      // A espécie traz o link da cadeia de evolução, aí dá pra buscar ela
      const chainData = await getEvolutionChain(getIdFromUrl(speciesData.evolution_chain.url));

      setPokemon(buildPokemon(pokemonData, speciesData));
      setEvolutions(buildEvolutions(chainData.chain));
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  }

  // Busca os dados quando a tela abre e toda vez que o número do Pokémon mudar
  useEffect(() => {
    load();
  }, [id]);

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

  const mainType = pokemon.types[0];

  return (
    <Screen edges={["bottom"]}>
      <S.Scroll contentContainerStyle={{ padding: 16, gap: 14 }}>
        <S.Top $color={typeColorAlpha(mainType, "26")} $border={typeColorAlpha(mainType, "66")}>
          <S.PokedexNumber>{formatNumber(pokemon.id)}</S.PokedexNumber>
          <S.Name>{pokemon.name}</S.Name>
          <S.Category>{pokemon.category}</S.Category>

          <S.Glow $color={typeColorAlpha(mainType, "40")}>
            <S.Artwork source={{ uri: getArtworkUrl(pokemon.id) }} resizeMode="contain" />
          </S.Glow>

          <S.Types>
            {pokemon.types.map((type) => <TypeBadge key={type} type={type} />)}
          </S.Types>
        </S.Top>

        <S.Stats>
          <S.Stat>
            <S.StatLabel>Altura</S.StatLabel>
            <S.StatValue>{pokemon.height} m</S.StatValue>
          </S.Stat>
          <S.Stat>
            <S.StatLabel>Peso</S.StatLabel>
            <S.StatValue>{pokemon.weight} kg</S.StatValue>
          </S.Stat>
          <S.Stat>
            <S.StatLabel>Geração</S.StatLabel>
            <S.StatValue>{pokemon.generation}ª</S.StatValue>
          </S.Stat>
        </S.Stats>

        <Card>
          <SectionTitle>Descrição</SectionTitle>
          <S.Description>{pokemon.description}</S.Description>
        </Card>

        <Card>
          <SectionTitle>Evoluções</SectionTitle>

          {/* Uma linha para cada estágio. Tocando, abre a Pokédex dele. */}
          {evolutions.map((evolution) => (
            <S.Evolution
              key={evolution.id}
              $active={evolution.id === pokemon.id}
              $color={typeColorAlpha(mainType, "26")}
              $border={typeColorAlpha(mainType, "99")}
              disabled={evolution.id === pokemon.id}
              onPress={() => navigation.navigate("Pokemon", { id: evolution.id })}
            >
              <S.EvolutionImage source={{ uri: getArtworkUrl(evolution.id) }} resizeMode="contain" />
              <S.EvolutionInfo>
                <S.EvolutionName>{evolution.name}</S.EvolutionName>
                <S.EvolutionLevel>
                  {evolution.level ? `Evolui no nível ${evolution.level}` : "Primeiro estágio"}
                </S.EvolutionLevel>
              </S.EvolutionInfo>
              {evolution.id === pokemon.id ? (
                <S.Here>Aqui</S.Here>
              ) : (
                <FontAwesome6 name="chevron-right" size={14} color={colors.muted} />
              )}
            </S.Evolution>
          ))}
        </Card>
      </S.Scroll>
    </Screen>
  );
};

export default Pokemon;
