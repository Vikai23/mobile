import { useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { FontAwesome6 } from "@expo/vector-icons";
import TypeBadge from "@components/type-badge";
import { colors } from "@/theme";
import * as S from "./style";

// Painel que abre por cima da tela da geração, igual ao mapa da região no jogo:
// mostra o treinador, a cidade marcada no mapa, o time dele e a insígnia do ginásio.
// As setas passam de um treinador para o outro, como o cursor do mapa.
const TrainerMap = () => {
  const navigation = useNavigation();
  const { trainers, index, map, teamGames } = useRoute().params;

  // Posição do treinador que está aparecendo na lista
  const [current, setCurrent] = useState(index);
  // Aba escolhida: "map" (Mapa), "team" (Time) ou "badge" (Insígnia)
  const [tab, setTab] = useState("map");

  const trainer = trainers[current];

  // Só os líderes de ginásio dão insígnia. Se a aba Insígnia estava aberta
  // e as setas chegam na Elite dos 4, o painel volta para o mapa.
  const hasBadge = Boolean(trainer.badgeName);
  const currentTab = tab === "badge" && !hasBadge ? "map" : tab;

  const tabs = [
    { key: "map", label: "Mapa" },
    { key: "team", label: "Time" },
  ];
  if (hasBadge) {
    tabs.push({ key: "badge", label: "Insígnia" });
  }

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

        <S.Tabs>
          {tabs.map((item) => (
            <S.Tab key={item.key} $active={currentTab === item.key} onPress={() => setTab(item.key)}>
              <S.TabText $active={currentTab === item.key}>{item.label}</S.TabText>
            </S.Tab>
          ))}
        </S.Tabs>

        {currentTab === "badge" ? (
          <S.BadgeArea>
            <S.BadgeImage source={{ uri: trainer.badgeImageUrl }} resizeMode="contain" />
            <S.BadgeName>{trainer.badgeName}</S.BadgeName>
            <S.BadgeOriginal>{trainer.badgeOriginalName} no jogo</S.BadgeOriginal>
            <S.BadgeText>
              Você ganha essa insígnia quando vence {trainer.name} no ginásio da {trainer.place}.
            </S.BadgeText>
          </S.BadgeArea>
        ) : null}

        {currentTab === "team" ? (
          <>
            <S.TeamGames>Time em {teamGames}, na ordem da batalha.</S.TeamGames>

            {/* Se o time não couber na tela, a lista rola */}
            <S.TeamList contentContainerStyle={{ gap: 8 }}>
              {trainer.team.map((pokemon) => (
                <S.TeamRow key={pokemon.id}>
                  <S.TeamImage source={{ uri: pokemon.imageUrl }} resizeMode="contain" />

                  <S.TeamInfo>
                    <S.TeamTop>
                      <S.TeamName>{pokemon.name}</S.TeamName>
                      <S.TeamLevel>Nv. {pokemon.level}</S.TeamLevel>
                    </S.TeamTop>
                    {pokemon.note ? <S.TeamNote>{pokemon.note}</S.TeamNote> : null}

                    {/* Linha de evolução. O Pokémon do time fica com a borda vermelha. */}
                    {pokemon.evolutions.length === 1 ? (
                      <S.TeamNote>Não evolui</S.TeamNote>
                    ) : (
                      <S.Evolutions>
                        {pokemon.evolutions.map((stage, stageIndex) => (
                          <S.Stage key={stage.name}>
                            {stageIndex > 0 ? (
                              <FontAwesome6 name="chevron-right" size={9} color={colors.muted} />
                            ) : null}
                            <S.StageBox $active={stage.name === pokemon.name}>
                              <S.StageImage source={{ uri: stage.imageUrl }} resizeMode="contain" />
                            </S.StageBox>
                          </S.Stage>
                        ))}
                      </S.Evolutions>
                    )}
                  </S.TeamInfo>
                </S.TeamRow>
              ))}
            </S.TeamList>
          </>
        ) : null}

        {currentTab === "map" ? (
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
        ) : null}

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
