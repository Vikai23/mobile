import styled from "styled-components/native";
import { colors } from "@/theme";

// Fundo escurecido atrás do painel
const Overlay = styled.View`
  flex: 1;
  justify-content: flex-end;
  background-color: rgba(0, 0, 0, 0.6);
`;

// Painel que sobe de baixo, igual ao modal.
// A altura máxima deixa um pedaço da tela de trás aparecendo quando o time é grande.
const Sheet = styled.View`
  max-height: 92%;
  gap: 14px;
  padding: 24px 20px 32px;
  background-color: ${colors.panel};
  border-top-left-radius: 28px;
  border-top-right-radius: 28px;
  border-width: 1px;
  border-color: ${colors.line};
`;

// Botão de fechar no canto, como no modal que o professor ensinou
const CloseBtn = styled.TouchableOpacity`
  position: absolute;
  top: 18px;
  right: 18px;
  z-index: 1;
`;

const Header = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 14px;
  padding-right: 28px;
`;

const SpriteBox = styled.View`
  width: 84px;
  height: 84px;
  border-radius: 20px;
  align-items: center;
  justify-content: center;
  background-color: ${colors.panel2};
`;

const Sprite = styled.Image`
  width: 80px;
  height: 80px;
`;

const HeaderInfo = styled.View`
  flex: 1;
  gap: 4px;
`;

const Role = styled.Text`
  color: ${colors.red};
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 1px;
  text-transform: uppercase;
`;

const Name = styled.Text`
  color: ${colors.text};
  font-size: 22px;
  font-weight: 900;
`;

const Types = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  gap: 6px;
`;

// Abas Mapa, Time e Insígnia
const Tabs = styled.View`
  flex-direction: row;
  padding: 4px;
  border-radius: 14px;
  background-color: ${colors.panel2};
`;

const Tab = styled.TouchableOpacity`
  flex: 1;
  align-items: center;
  padding: 8px;
  border-radius: 10px;
  background-color: ${(props) => (props.$active ? colors.red : "transparent")};
`;

const TabText = styled.Text`
  color: ${(props) => (props.$active ? colors.white : colors.muted)};
  font-size: 14px;
  font-weight: 800;
`;

const MapArea = styled.View`
  gap: 10px;
`;

// Caixa do mapa. O "overflow: hidden" corta o que passar da altura da caixa.
const MapBox = styled.View`
  width: 100%;
  overflow: hidden;
  border-radius: 12px;
  background-color: ${colors.panel2};
`;

const MapImage = styled.Image`
  width: 100%;
`;

// Bolinha vermelha que marca a cidade no mapa.
// Aqui precisa de position absolute: é o único jeito de colocar a marca em cima da imagem.
// As margens negativas deixam o centro da bolinha bem em cima da cidade.
const Marker = styled.View`
  position: absolute;
  width: 18px;
  height: 18px;
  margin-left: -9px;
  margin-top: -9px;
  border-radius: 9px;
  background-color: ${colors.red};
  border-width: 3px;
  border-color: ${colors.white};
`;

const PlaceBar = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 8px;
  padding: 10px 14px;
  border-radius: 12px;
  background-color: ${colors.panel2};
`;

const PlaceName = styled.Text`
  flex: 1;
  color: ${colors.text};
  font-size: 15px;
  font-weight: 800;
`;

const BadgeArea = styled.View`
  align-items: center;
  gap: 6px;
  padding: 16px;
  border-radius: 16px;
  background-color: ${colors.panel2};
`;

const BadgeImage = styled.Image`
  width: 96px;
  height: 96px;
  margin-bottom: 6px;
`;

const BadgeName = styled.Text`
  color: ${colors.text};
  font-size: 20px;
  font-weight: 900;
`;

const BadgeOriginal = styled.Text`
  color: ${colors.muted};
  font-size: 13px;
  font-style: italic;
`;

const BadgeText = styled.Text`
  color: ${colors.text};
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  margin-top: 6px;
`;

const TeamGames = styled.Text`
  color: ${colors.muted};
  font-size: 12px;
`;

// Lista do time. O "flex-shrink" deixa ela encolher (e rolar) quando não cabe no painel.
const TeamList = styled.ScrollView`
  flex-shrink: 1;
`;

// Uma linha para cada Pokémon do time
const TeamRow = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 12px;
  padding: 8px 12px;
  border-radius: 14px;
  background-color: ${colors.panel2};
`;

const TeamImage = styled.Image`
  width: 56px;
  height: 56px;
`;

const TeamInfo = styled.View`
  flex: 1;
  gap: 4px;
`;

// Nome de um lado e nível do outro
const TeamTop = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const TeamName = styled.Text`
  color: ${colors.text};
  font-size: 15px;
  font-weight: 800;
`;

const TeamLevel = styled.Text`
  color: ${colors.muted};
  font-size: 13px;
  font-weight: 800;
`;

const TeamNote = styled.Text`
  color: ${colors.muted};
  font-size: 12px;
`;

// Linha de evolução com as imagens pequenas e as setinhas entre elas
const Evolutions = styled.View`
  flex-direction: row;
  align-items: center;
`;

const Stage = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 4px;
  margin-right: 4px;
`;

// Bolinha de cada estágio. O Pokémon do time ganha a borda vermelha.
const StageBox = styled.View`
  width: 34px;
  height: 34px;
  border-radius: 17px;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => (props.$active ? colors.bg : "transparent")};
  border-width: 2px;
  border-color: ${(props) => (props.$active ? colors.red : "transparent")};
`;

const StageImage = styled.Image`
  width: 28px;
  height: 28px;
`;

const Controls = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const ArrowButton = styled.TouchableOpacity`
  width: 44px;
  height: 44px;
  border-radius: 22px;
  align-items: center;
  justify-content: center;
  background-color: ${colors.panel2};
  border-width: 1px;
  border-color: ${colors.line};
  opacity: ${(props) => (props.disabled ? 0.3 : 1)};
`;

const Counter = styled.Text`
  color: ${colors.muted};
  font-size: 14px;
  font-weight: 700;
`;

export {
  ArrowButton, BadgeArea, BadgeImage, BadgeName, BadgeOriginal, BadgeText, CloseBtn, Controls,
  Counter, Evolutions, Header, HeaderInfo, MapArea, MapBox, MapImage, Marker, Name, Overlay,
  PlaceBar, PlaceName, Role, Sheet, Sprite, SpriteBox, Stage, StageBox, StageImage, Tab, TabText,
  Tabs, TeamGames, TeamImage, TeamInfo, TeamLevel, TeamList, TeamName, TeamNote, TeamRow, TeamTop,
  Types,
};
