import { useEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { FontAwesome6 } from "@expo/vector-icons";
import { getEliteFour, getGeneration, getGenerationStarters, getGymLeaders } from "@services/api";
import { formatNumber } from "@/helpers";
import ErrorMessage from "@components/error-message";
import Loading from "@components/loading";
import TypeBadge from "@components/type-badge";
import { Card, Screen, SectionTitle } from "@components/ui";
import { colors, typeColor, typeColorAlpha } from "@/theme";
import * as S from "./style";

// Tela de uma geração: escolher o inicial, onde conseguir eles,
// o mapa da região, os líderes de ginásio e a Elite dos 4
const Generation = () => {
  const navigation = useNavigation();
  const { id } = useRoute().params;

  const [generation, setGeneration] = useState(null);
  const [starters, setStarters] = useState([]);
  const [gymLeaders, setGymLeaders] = useState([]);
  const [eliteFour, setEliteFour] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Posição do inicial escolhido na lista (0, 1 ou 2)
  const [current, setCurrent] = useState(0);

  async function load() {
    setLoading(true);
    setError("");
    try {
      // As 4 buscas saem ao mesmo tempo, assim a tela carrega mais rápido
      const [generationData, startersData, leadersData, eliteData] = await Promise.all([
        getGeneration(id),
        getGenerationStarters(id),
        getGymLeaders(id),
        getEliteFour(id),
      ]);
      setGeneration(generationData);
      setStarters(startersData);
      setGymLeaders(leadersData);
      setEliteFour(eliteData);
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

  // Líderes e Elite dos 4 numa lista só, no formato que o painel do mapa usa.
  // Assim as setas do painel passam por todos eles, um depois do outro.
  const trainers = [
    ...gymLeaders.map((leader) => ({
      name: leader.name,
      role: `Líder de ginásio · ${leader.badge}ª insígnia`,
      place: leader.city,
      types: leader.types,
      spriteUrl: leader.spriteUrl,
      mapX: leader.mapX,
      mapY: leader.mapY,
      badgeName: leader.badgeName,
      badgeOriginalName: leader.badgeOriginalName,
      badgeImageUrl: leader.badgeImageUrl,
      team: leader.team,
    })),
    ...eliteFour.map((member) => ({
      name: member.name,
      role: `Elite dos 4 · ${member.position}º desafio`,
      place: member.place,
      types: member.types,
      spriteUrl: member.spriteUrl,
      mapX: member.mapX,
      mapY: member.mapY,
      badgeName: null,
      team: member.team,
    })),
  ];

  // Abre o painel com o mapa, começando pelo treinador tocado
  function openTrainer(index) {
    navigation.navigate("TrainerMap", {
      trainers,
      index,
      teamGames: generation.teamGames,
      map: {
        url: generation.mapUrl,
        width: generation.mapWidth,
        height: generation.mapHeight,
        visibleHeight: mapVisibleHeight,
      },
    });
  }

  return (
    <Screen edges={["bottom"]}>
      <S.Scroll contentContainerStyle={{ paddingBottom: 24 }}>
        <S.Header>
          <S.Label>Geração {generation.id}</S.Label>
          <S.Region>{generation.region}</S.Region>
          <S.Games>{generation.games}</S.Games>
          {/* A Unova não tem remake, então essa linha só aparece se a API mandar algum */}
          {generation.remakes ? (
            <S.Remakes>
              <S.RemakesLabel>Remakes: </S.RemakesLabel>
              {generation.remakes}
            </S.Remakes>
          ) : null}
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
            <S.Small>
              Em {generation.gymGames}, na ordem das insígnias. Toque em um líder para ver a
              cidade no mapa, o time e a insígnia.
            </S.Small>

            {gymLeaders.map((leader, index) => (
              <S.Leader key={leader.id} onPress={() => openTrainer(index)}>
                <S.LeaderSprite source={{ uri: leader.spriteUrl }} resizeMode="contain" />
                <S.LeaderInfo>
                  <S.LeaderName>{leader.name}</S.LeaderName>
                  <S.LeaderCity>{leader.badge}ª insígnia · {leader.city}</S.LeaderCity>
                </S.LeaderInfo>
                <S.LeaderTypes>
                  {/* A API manda os tipos separados por vírgula (ex: "grass,fire,water") */}
                  {leader.types.split(",").map((type) => <TypeBadge key={type} type={type} />)}
                </S.LeaderTypes>
              </S.Leader>
            ))}
          </Card>

          <Card>
            <SectionTitle>Elite dos 4</SectionTitle>
            <S.Small>
              Na ordem em que são enfrentados. Toque em um para ver onde fica no mapa e o time.
            </S.Small>

            {eliteFour.map((member, index) => (
              <S.Leader key={member.id} onPress={() => openTrainer(gymLeaders.length + index)}>
                <S.LeaderSprite source={{ uri: member.spriteUrl }} resizeMode="contain" />
                <S.LeaderInfo>
                  <S.LeaderName>{member.name}</S.LeaderName>
                  <S.LeaderCity>{member.position}º desafio · {member.place}</S.LeaderCity>
                </S.LeaderInfo>
                <S.LeaderTypes>
                  {member.types.split(",").map((type) => <TypeBadge key={type} type={type} />)}
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
