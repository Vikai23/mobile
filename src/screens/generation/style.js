import styled from "styled-components/native";
import { colors } from "@/theme";

const Scroll = styled.ScrollView``;

// Parte vermelha do topo, que continua o cabeçalho
const Hero = styled.View`
  gap: 2px;
  padding: 8px 20px 24px;
  background-color: ${colors.red};
  border-bottom-left-radius: 28px;
  border-bottom-right-radius: 28px;
`;

const Label = styled.Text`
  color: rgba(255, 255, 255, 0.8);
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 1.5px;
  text-transform: uppercase;
`;

const Region = styled.Text`
  color: ${colors.white};
  font-size: 34px;
  font-weight: 900;
`;

const Games = styled.Text`
  color: rgba(255, 255, 255, 0.85);
  font-size: 13px;
`;

const Content = styled.View`
  gap: 12px;
  padding: 20px 16px 0;
`;

const Starters = styled.View`
  flex-direction: row;
  gap: 10px;
`;

// Cartão de cada inicial, com a borda na cor do tipo
const StarterCard = styled.TouchableOpacity`
  flex: 1;
  align-items: center;
  gap: 6px;
  padding: 12px 4px;
  background-color: ${colors.panel};
  border-radius: 16px;
  border-width: 2px;
  border-color: ${(props) => props.$color};
`;

const StarterImage = styled.Image`
  width: 84px;
  height: 84px;
`;

const StarterName = styled.Text`
  color: ${colors.text};
  font-size: 14px;
  font-weight: 800;
`;

const Hint = styled.Text`
  color: ${colors.muted};
  font-size: 13px;
  text-align: center;
  margin-bottom: 4px;
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
  border-radius: 10px;
  background-color: ${colors.bg};
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
  Content, Games, Hero, Hint, Label, Leader, LeaderCity, LeaderInfo, LeaderName, LeaderNumber,
  LeaderNumberText, LeaderTypes, MapBox, MapImage, Region, Scroll, Small, StarterCard,
  StarterImage, StarterName, Starters, Text,
};
