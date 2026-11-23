import { useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { FontAwesome6 } from "@expo/vector-icons";
import { generations } from "@/data/generations";
import { descriptions } from "@/data/descriptions";
import { getArtworkUrl } from "@services/api";
import { formatNumber } from "@/helpers";
import TypeBadge from "@components/type-badge";
import { Card, Screen, SectionTitle } from "@components/ui";
import { colors, typeColor, typeColorAlpha } from "@/theme";
import * as S from "./style";

// Tela de uma geração: escolher o inicial, onde conseguir eles,
// o mapa da região e os líderes de ginásio
const Generation = () => {
  const navigation = useNavigation();
  const { number } = useRoute().params;

  // Posição do inicial escolhido na lista (0, 1 ou 2)
  const [current, setCurrent] = useState(0);

  const generation = generations.find((item) => item.number === number);
  const { map, starters } = generation;

  const starter = starters[current];
  const description = descriptions[starter.id];

  // Altura do mapa que aparece na tela.
  // Se não tiver "visibleHeight", mostra a imagem inteira.
  const mapVisibleHeight = map.visibleHeight ?? map.height;

  return (
    <Screen edges={["bottom"]}>
      <S.Scroll contentContainerStyle={{ paddingBottom: 24 }}>
        <S.Header>
          <S.Label>Geração {generation.number}</S.Label>
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
                  $color={typeColorAlpha(item.type, "26")}
                  $border={typeColor[item.type]}
                >
                  <S.ChoiceImage source={{ uri: getArtworkUrl(item.id) }} resizeMode="contain" />
                </S.ChoiceCircle>
                <S.ChoiceName $active={index === current}>{item.name}</S.ChoiceName>
              </S.Choice>
            ))}
          </S.Choices>

          {/* Cartão grande do inicial escolhido, com o fundo na cor do tipo dele */}
          <S.StarterCard
            $color={typeColorAlpha(starter.type, "26")}
            $border={typeColorAlpha(starter.type, "66")}
          >
            <S.ArtRow>
              <S.ArrowButton onPress={() => setCurrent(current - 1)} disabled={current === 0}>
                <FontAwesome6 name="chevron-left" size={16} color={colors.text} />
              </S.ArrowButton>

              <S.Glow $color={typeColorAlpha(starter.type, "40")}>
                <S.StarterImage source={{ uri: getArtworkUrl(starter.id) }} resizeMode="contain" />
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
            <S.StarterCategory>{description.category}</S.StarterCategory>
            <TypeBadge type={starter.type} />
            <S.StarterText>{description.text}</S.StarterText>

            <S.SeeButton
              $color={typeColor[starter.type]}
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
