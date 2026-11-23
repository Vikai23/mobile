import { useNavigation, useRoute } from "@react-navigation/native";
import { generations } from "@/data/generations";
import { getArtworkUrl } from "@services/api";
import TypeBadge from "@components/type-badge";
import { Card, Screen, SectionTitle } from "@components/ui";
import { typeColor } from "@/theme";
import * as S from "./style";

// Tela de uma geração: os 3 iniciais, onde conseguir eles, o mapa e os líderes de ginásio
const Generation = () => {
  const navigation = useNavigation();
  const { number } = useRoute().params;

  const generation = generations.find((item) => item.number === number);
  const { map } = generation;

  // Altura do mapa que aparece na tela.
  // Se não tiver "visibleHeight", mostra a imagem inteira.
  const mapVisibleHeight = map.visibleHeight ?? map.height;

  return (
    <Screen edges={["bottom"]}>
      <S.Scroll contentContainerStyle={{ paddingBottom: 24 }}>
        <S.Hero>
          <S.Label>Geração {generation.number}</S.Label>
          <S.Region>{generation.region}</S.Region>
          <S.Games>{generation.games}</S.Games>
        </S.Hero>

        <S.Content>
          <SectionTitle>Os 3 iniciais</SectionTitle>

          <S.Starters>
            {generation.starters.map((starter) => (
              <S.StarterCard
                key={starter.id}
                $color={typeColor[starter.type]}
                onPress={() => navigation.navigate("Pokemon", { id: starter.id })}
              >
                <S.StarterImage source={{ uri: getArtworkUrl(starter.id) }} resizeMode="contain" />
                <S.StarterName numberOfLines={1}>{starter.name}</S.StarterName>
                <TypeBadge type={starter.type} />
              </S.StarterCard>
            ))}
          </S.Starters>

          <S.Hint>Toque em um inicial para ver a Pokédex e as evoluções dele.</S.Hint>

          <Card>
            <SectionTitle>Onde conseguir os iniciais</SectionTitle>
            <S.Text>{generation.starterLocation}</S.Text>
          </Card>

          <Card>
            <SectionTitle>Mapa da região</SectionTitle>
            {/* A caixa tem o tamanho da parte visível e esconde o que passar dela */}
            <S.MapBox style={{ aspectRatio: map.width / mapVisibleHeight }}>
              <S.MapImage
                source={{ uri: map.url }}
                style={{ aspectRatio: map.width / map.height }}
                resizeMode="stretch"
              />
            </S.MapBox>
            <S.Small>Mapa: Serebii.net</S.Small>
          </Card>

          <Card>
            <SectionTitle>Líderes de ginásio</SectionTitle>
            <S.Small>Em {generation.gymGames}, na ordem das insígnias</S.Small>

            {generation.gymLeaders.map((leader, index) => (
              <S.Leader key={leader.name}>
                <S.LeaderNumber>
                  <S.LeaderNumberText>{index + 1}</S.LeaderNumberText>
                </S.LeaderNumber>
                <S.LeaderInfo>
                  <S.LeaderName>{leader.name}</S.LeaderName>
                  <S.LeaderCity>{leader.city}</S.LeaderCity>
                </S.LeaderInfo>
                <S.LeaderTypes>
                  {leader.types.map((type) => <TypeBadge key={type} type={type} />)}
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
