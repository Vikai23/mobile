import styled from "styled-components/native";
import { colors } from "@/theme";

const Scroll = styled.ScrollView``;

const Header = styled.View`
  gap: 2px;
  padding: 12px 20px 0;
`;

const Label = styled.Text`
  color: ${colors.red};
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 1.5px;
  text-transform: uppercase;
`;

const Region = styled.Text`
  color: ${colors.text};
  font-size: 34px;
  font-weight: 900;
`;

const Games = styled.Text`
  color: ${colors.muted};
  font-size: 13px;
`;

const Remakes = styled.Text`
  color: ${colors.muted};
  font-size: 13px;
  line-height: 19px;
  margin-top: 2px;
`;

const RemakesLabel = styled.Text`
  color: ${colors.text};
  font-weight: 700;
`;

const Content = styled.View`
  gap: 14px;
  padding: 20px 16px 0;
`;

const ChooseTitle = styled.Text`
  color: ${colors.text};
  font-size: 18px;
  font-weight: 800;
`;

// Linha com as 3 bolinhas dos iniciais
const Choices = styled.View`
  flex-direction: row;
  justify-content: space-around;
`;

const Choice = styled.TouchableOpacity`
  align-items: center;
  gap: 6px;
`;

// A bolinha do inicial escolhido ganha a borda na cor do tipo
const ChoiceCircle = styled.View`
  width: 76px;
  height: 76px;
  border-radius: 38px;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => (props.$active ? props.$color : colors.panel)};
  border-width: 2px;
  border-color: ${(props) => (props.$active ? props.$border : colors.line)};
`;

const ChoiceImage = styled.Image`
  width: 62px;
  height: 62px;
`;

const ChoiceName = styled.Text`
  color: ${(props) => (props.$active ? colors.text : colors.muted)};
  font-size: 13px;
  font-weight: ${(props) => (props.$active ? "800" : "600")};
`;

// Cartão grande do inicial escolhido
const StarterCard = styled.View`
  align-items: center;
  gap: 6px;
  padding: 20px 16px;
  background-color: ${(props) => props.$color};
  border-radius: 28px;
  border-width: 1px;
  border-color: ${(props) => props.$border};
`;

// Linha com a seta da esquerda, a imagem e a seta da direita
const ArtRow = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  align-self: stretch;
  margin-bottom: 8px;
`;

const ArrowButton = styled.TouchableOpacity`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  align-items: center;
  justify-content: center;
  background-color: ${colors.panel2};
  border-width: 1px;
  border-color: ${colors.line};
  opacity: ${(props) => (props.disabled ? 0.3 : 1)};
`;

// Círculo atrás da imagem, que dá um brilho na cor do tipo
const Glow = styled.View`
  width: 170px;
  height: 170px;
  border-radius: 85px;
  background-color: ${(props) => props.$color};
  align-items: center;
  justify-content: center;
`;

const StarterImage = styled.Image`
  width: 160px;
  height: 160px;
`;

const StarterNumber = styled.Text`
  color: ${colors.muted};
  font-size: 13px;
  font-weight: 800;
  letter-spacing: 1px;
`;

const StarterName = styled.Text`
  color: ${colors.text};
  font-size: 28px;
  font-weight: 900;
`;

const StarterCategory = styled.Text`
  color: ${colors.muted};
  font-size: 13px;
  margin-bottom: 4px;
`;

// A altura mínima evita que o cartão fique pulando de tamanho quando troca o inicial
const StarterText = styled.Text`
  color: ${colors.text};
  font-size: 15px;
  line-height: 22px;
  min-height: 88px;
  text-align: center;
  margin-top: 8px;
`;

// Botão na cor do tipo (planta, fogo ou água)
const SeeButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  gap: 8px;
  margin-top: 6px;
  padding: 12px 24px;
  border-radius: 24px;
  background-color: ${(props) => props.$color};
`;

const SeeButtonText = styled.Text`
  color: ${colors.bg};
  font-size: 15px;
  font-weight: 800;
`;

const Text = styled.Text`
  color: ${colors.text};
  font-size: 15px;
  line-height: 22px;
`;

const Small = styled.Text`
  color: ${colors.muted};
  font-size: 12px;
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

// Uma linha para cada líder de ginásio
const Leader = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 12px;
  padding: 10px 0;
  border-top-width: 1px;
  border-top-color: ${colors.line};
`;

// Bolinha vermelha com o número da insígnia
const LeaderNumber = styled.View`
  width: 30px;
  height: 30px;
  border-radius: 15px;
  background-color: ${colors.red};
  align-items: center;
  justify-content: center;
`;

const LeaderNumberText = styled.Text`
  color: ${colors.white};
  font-size: 14px;
  font-weight: 900;
`;

const LeaderInfo = styled.View`
  flex: 1;
`;

const LeaderName = styled.Text`
  color: ${colors.text};
  font-size: 15px;
  font-weight: 800;
`;

const LeaderCity = styled.Text`
  color: ${colors.muted};
  font-size: 13px;
`;

const LeaderTypes = styled.View`
  align-items: flex-end;
  gap: 4px;
`;

export {
  ArrowButton, ArtRow, Choice, ChoiceCircle, ChoiceImage, ChoiceName, Choices, ChooseTitle,
  Content, Games, Glow, Header, Label, Leader, LeaderCity, LeaderInfo, LeaderName, LeaderNumber,
  LeaderNumberText, LeaderTypes, MapBox, MapImage, Region, Remakes, RemakesLabel, Scroll,
  SeeButton, SeeButtonText,
  Small, StarterCard, StarterCategory, StarterImage, StarterName, StarterNumber, StarterText,
  Text,
};
