import { useEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { FontAwesome6 } from "@expo/vector-icons";
import { getGeneration, getGenerationStarters, getGymLeaders } from "@services/api";
import { formatNumber } from "@/helpers";
import ErrorMessage from "@components/error-message";
import Loading from "@components/loading";
import TypeBadge from "@components/type-badge";
import { Card, Screen, SectionTitle } from "@components/ui";
import { colors, typeColor, typeColorAlpha } from "@/theme";
import * as S from "./style";

// Tela de uma geração: escolher o inicial, onde conseguir eles,
// o mapa da região e os líderes de ginásio
const Generation = () => {
  const navigation = useNavigation();
  const { id } = useRoute().params;

  const [generation, setGeneration] = useState(null);
  const [starters, setStarters] = useState([]);
  const [gymLeaders, setGymLeaders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Posição do inicial escolhido na lista (0, 1 ou 2)
  const [current, setCurrent] = useState(0);

  async function load() {
    setLoading(true);
    setError("");
    try {
      setGeneration(await getGeneration(id));
      setStarters(await getGenerationStarters(id));
      setGymLeaders(await getGymLeaders(id));
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  }

  // Busca os dados na API quando a tela abre
  useEffect(() => {
    load();
  }, [id]);

  if (loading) return <Loading />;
  if (error) return <ErrorMessage message={error} onRetry={load} />;

  const starter = starters[current];

  // Altura do mapa que aparece na tela.
  // Se não tiver "mapVisibleHeight", mostra a imagem inteira.
  const mapVisibleHeight = generation.mapVisibleHeight ?? generation.mapHeight;

  return (
    <Screen edges={["bottom"]}>
      <S.Scroll contentContainerStyle={{ paddingBottom: 24 }}>
        <S.Header>
          <S.Label>Geração {generation.id}</S.Label>
          <S.Region>{generation.region}</S.Region>
          <S.Games>{generation.games}</S.Games>
        </S.Header>

        <S.Content>
          <S.ChooseTitle>Escolha seu inicial</S.ChooseTitle>

          {/* As 3 bolinhas com os iniciais. Tocando em uma, ela vira a escolhida. */}
          <S.Choices>
            {starters.map((item, index) => (
              <S.Choice key={item.id} onPress={() => setCurrent(index)}>
                <S.ChoiceCircle
                  $active={index === current}
                  $color={typeColorAlpha(item.type1, "26")}
                  $border={typeColor[item.type1]}
                >
                  <S.ChoiceImage source={{ uri: item.imageUrl }} resizeMode="contain" />
                </S.ChoiceCircle>
                <S.ChoiceName $active={index === current}>{item.name}</S.ChoiceName>
              </S.Choice>
            ))}
          </S.Choices>

          {/* Cartão grande do inicial escolhido, com o fundo na cor do tipo dele */}
          <S.StarterCard
            $color={typeColorAlpha(starter.type1, "26")}
            $border={typeColorAlpha(starter.type1, "66")}
          >
            <S.ArtRow>
              <S.ArrowButton onPress={() => setCurrent(current - 1)} disabled={current === 0}>
                <FontAwesome6 name="chevron-left" size={16} color={colors.text} />
              </S.ArrowButton>

              <S.Glow $color={typeColorAlpha(starter.type1, "40")}>
                <S.StarterImage source={{ uri: starter.imageUrl }} resizeMode="contain" />
              </S.Glow>

              <S.ArrowButton
                onPress={() => setCurrent(current + 1)}
                disabled={current === starters.length - 1}
              >
                <FontAwesome6 name="chevron-right" size={16} color={colors.text} />
              </S.ArrowButton>
            </S.ArtRow>

            <S.StarterNumber>{formatNumber(starter.id)}</S.StarterNumber>
            <S.StarterName>{starter.name}</S.StarterName>
            <S.StarterCategory>{starter.category}</S.StarterCategory>
            <TypeBadge type={starter.type1} />
            <S.StarterText>{starter.description}</S.StarterText>

            <S.SeeButton
              $color={typeColor[starter.type1]}
              onPress={() => navigation.navigate("Pokemon", { id: starter.id })}
            >
              <S.SeeButtonText>Ver na Pokédex</S.SeeButtonText>
              <FontAwesome6 name="arrow-right" size={14} color={colors.bg} />
            </S.SeeButton>
          </S.StarterCard>

          <Card>
            <SectionTitle>Onde conseguir os iniciais</SectionTitle>
            <S.Text>{generation.starterLocation}</S.Text>
          </Card>

          <Card>
            <SectionTitle>Mapa da região</SectionTitle>
            {/* A caixa tem o tamanho da parte visível e esconde o que passar dela */}
            <S.MapBox style={{ aspectRatio: generation.mapWidth / mapVisibleHeight }}>
              <S.MapImage
                source={{ uri: generation.mapUrl }}
                style={{ aspectRatio: generation.mapWidth / generation.mapHeight }}
                resizeMode="stretch"
              />
            </S.MapBox>
            <S.Small>Mapa: Serebii.net</S.Small>
          </Card>

          <Card>
            <SectionTitle>Líderes de ginásio</SectionTitle>
            <S.Small>Em {generation.gymGames}, na ordem das insígnias</S.Small>

            {gymLeaders.map((leader) => (
              <S.Leader key={leader.id}>
                <S.LeaderNumber>
                  <S.LeaderNumberText>{leader.badge}</S.LeaderNumberText>
                </S.LeaderNumber>
                <S.LeaderInfo>
                  <S.LeaderName>{leader.name}</S.LeaderName>
                  <S.LeaderCity>{leader.city}</S.LeaderCity>
                </S.LeaderInfo>
                <S.LeaderTypes>
                  {/* A API manda os tipos separados por vírgula (ex: "grass,fire,water") */}
                  {leader.types.split(",").map((type) => <TypeBadge key={type} type={type} />)}
                </S.LeaderTypes>
              </S.Leader>
            ))}
          </Card>
        </S.Content>
      </S.Scroll>
    </Screen>
  );
};

export default Generation;
