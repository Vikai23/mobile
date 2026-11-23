import { useEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { FontAwesome6 } from "@expo/vector-icons";
import { getEvolutions, getPokemon } from "@services/api";
import { formatDecimal, formatNumber } from "@/helpers";
import ErrorMessage from "@components/error-message";
import Loading from "@components/loading";
import TypeBadge from "@components/type-badge";
import { Card, Screen, SectionTitle } from "@components/ui";
import { colors, typeColor, typeColorAlpha } from "@/theme";
import * as S from "./style";

const Pokemon = () => {
  const navigation = useNavigation();
  const { id } = useRoute().params;

  const [pokemon, setPokemon] = useState(null);
  const [evolutions, setEvolutions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Mostra as imagens na versão shiny (a cor rara) quando for true
  const [shiny, setShiny] = useState(false);

  async function load() {
    setLoading(true);
    setError("");
    try {
      setPokemon(await getPokemon(id));
      setEvolutions(await getEvolutions(id));
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

  if (loading) return <Loading />;
  if (error) return <ErrorMessage message={error} onRetry={load} />;

  // O segundo tipo é opcional (o Charmander, por exemplo, só tem um)
  const types = pokemon.type2 ? [pokemon.type1, pokemon.type2] : [pokemon.type1];

  return (
    <Screen edges={["bottom"]}>
      <S.Scroll contentContainerStyle={{ padding: 16, gap: 14 }}>
        <S.Top $color={typeColorAlpha(pokemon.type1, "26")} $border={typeColorAlpha(pokemon.type1, "66")}>
          <S.PokedexNumber>{formatNumber(pokemon.id)}</S.PokedexNumber>
          <S.Name>{pokemon.name}</S.Name>
          <S.Category>{pokemon.category}</S.Category>

          <S.Glow $color={typeColorAlpha(pokemon.type1, "40")}>
            <S.Artwork
              source={{ uri: shiny ? pokemon.shinyImageUrl : pokemon.imageUrl }}
              resizeMode="contain"
            />
          </S.Glow>

          <S.Types>
            {types.map((type) => <TypeBadge key={type} type={type} />)}
          </S.Types>

          {/* Troca a imagem entre a cor normal e a shiny */}
          <S.Versions>
            <S.Version
              $active={!shiny}
              $color={typeColor[pokemon.type1]}
              onPress={() => setShiny(false)}
            >
              <S.VersionText $active={!shiny}>Normal</S.VersionText>
            </S.Version>
            <S.Version
              $active={shiny}
              $color={typeColor[pokemon.type1]}
              onPress={() => setShiny(true)}
            >
              <FontAwesome6 name="star" solid size={11} color={shiny ? colors.bg : colors.muted} />
              <S.VersionText $active={shiny}>Shiny</S.VersionText>
            </S.Version>
          </S.Versions>
        </S.Top>

        <S.Stats>
          <S.Stat>
            <S.StatLabel>Altura</S.StatLabel>
            <S.StatValue>{formatDecimal(pokemon.height)} m</S.StatValue>
          </S.Stat>
          <S.Stat>
            <S.StatLabel>Peso</S.StatLabel>
            <S.StatValue>{formatDecimal(pokemon.weight)} kg</S.StatValue>
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
              $color={typeColorAlpha(pokemon.type1, "26")}
              $border={typeColorAlpha(pokemon.type1, "99")}
              disabled={evolution.id === pokemon.id}
              onPress={() => navigation.navigate("Pokemon", { id: evolution.id })}
            >
              <S.EvolutionImage
                source={{ uri: shiny ? evolution.shinyImageUrl : evolution.imageUrl }}
                resizeMode="contain"
              />
              <S.EvolutionInfo>
                <S.EvolutionName>{evolution.name}</S.EvolutionName>
                <S.EvolutionLevel>
                  {evolution.evolutionLevel
                    ? `Evolui no nível ${evolution.evolutionLevel}`
                    : "Primeiro estágio"}
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
