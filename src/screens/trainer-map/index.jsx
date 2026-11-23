import { useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { FontAwesome6 } from "@expo/vector-icons";
import TypeBadge from "@components/type-badge";
import { colors } from "@/theme";
import * as S from "./style";

// Painel que abre por cima da tela da geração, igual ao mapa da região no jogo:
// mostra o treinador, a cidade marcada no mapa e a insígnia do ginásio.
// As setas passam de um treinador para o outro, como o cursor do mapa.
const TrainerMap = () => {
  const navigation = useNavigation();
  const { trainers, index, map } = useRoute().params;

  // Posição do treinador que está aparecendo na lista
  const [current, setCurrent] = useState(index);
  // Aba escolhida: "map" (Mapa) ou "badge" (Insígnia)
  const [tab, setTab] = useState("map");

  const trainer = trainers[current];

  // Só os líderes de ginásio dão insígnia. A Elite dos 4 mostra sempre o mapa.
  const hasBadge = Boolean(trainer.badgeName);
  const showBadge = hasBadge && tab === "badge";

  return (
    <S.Overlay>
      <S.Sheet>
        <S.CloseBtn onPress={() => navigation.goBack()}>
          <FontAwesome6 name="xmark" size={22} color={colors.muted} />
        </S.CloseBtn>

        <S.Header>
          <S.SpriteBox>
            <S.Sprite source={{ uri: trainer.spriteUrl }} resizeMode="contain" />
          </S.SpriteBox>
          <S.HeaderInfo>
            <S.Role>{trainer.role}</S.Role>
            <S.Name>{trainer.name}</S.Name>
            <S.Types>
              {trainer.types.split(",").map((type) => <TypeBadge key={type} type={type} />)}
            </S.Types>
          </S.HeaderInfo>
        </S.Header>

        {hasBadge ? (
          <S.Tabs>
            <S.Tab $active={!showBadge} onPress={() => setTab("map")}>
              <S.TabText $active={!showBadge}>Mapa</S.TabText>
            </S.Tab>
            <S.Tab $active={showBadge} onPress={() => setTab("badge")}>
              <S.TabText $active={showBadge}>Insígnia</S.TabText>
            </S.Tab>
          </S.Tabs>
        ) : null}

        {showBadge ? (
          <S.BadgeArea>
            <S.BadgeImage source={{ uri: trainer.badgeImageUrl }} resizeMode="contain" />
            <S.BadgeName>{trainer.badgeName}</S.BadgeName>
            <S.BadgeOriginal>{trainer.badgeOriginalName} no jogo</S.BadgeOriginal>
            <S.BadgeText>
              Você ganha essa insígnia quando vence {trainer.name} no ginásio da {trainer.place}.
            </S.BadgeText>
          </S.BadgeArea>
        ) : (
          <S.MapArea>
            {/* A caixa tem o tamanho da parte visível do mapa e esconde o que passar dela */}
            <S.MapBox style={{ aspectRatio: map.width / map.visibleHeight }}>
              <S.MapImage
                source={{ uri: map.url }}
                style={{ aspectRatio: map.width / map.height }}
                resizeMode="stretch"
              />
              {/* A marca fica em cima da cidade. A posição é em porcentagem do tamanho do mapa,
                  então ela fica no lugar certo em qualquer tamanho de tela. */}
              {trainer.mapX !== null ? (
                <S.Marker
                  style={{
                    left: `${(trainer.mapX / map.width) * 100}%`,
                    top: `${(trainer.mapY / map.visibleHeight) * 100}%`,
                  }}
                />
              ) : null}
            </S.MapBox>

            {/* Barra com o nome do lugar, igual a do mapa do jogo */}
            <S.PlaceBar>
              <FontAwesome6 name="location-dot" size={14} color={colors.red} />
              <S.PlaceName>{trainer.place}</S.PlaceName>
            </S.PlaceBar>
          </S.MapArea>
        )}

        <S.Controls>
          <S.ArrowButton onPress={() => setCurrent(current - 1)} disabled={current === 0}>
            <FontAwesome6 name="chevron-left" size={16} color={colors.text} />
          </S.ArrowButton>
          <S.Counter>
            {current + 1} de {trainers.length}
          </S.Counter>
          <S.ArrowButton
            onPress={() => setCurrent(current + 1)}
            disabled={current === trainers.length - 1}
          >
            <FontAwesome6 name="chevron-right" size={16} color={colors.text} />
          </S.ArrowButton>
        </S.Controls>
      </S.Sheet>
    </S.Overlay>
  );
};

export default TrainerMap;
