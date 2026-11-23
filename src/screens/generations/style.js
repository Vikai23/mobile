import styled from "styled-components/native";
import { colors } from "@/theme";

// Parte vermelha do topo, que continua o cabeçalho
const Hero = styled.View`
  gap: 4px;
  padding: 8px 20px 24px;
  background-color: ${colors.red};
  border-bottom-left-radius: 28px;
  border-bottom-right-radius: 28px;
`;

const Title = styled.Text`
  color: ${colors.white};
  font-size: 26px;
  font-weight: 900;
`;

const Subtitle = styled.Text`
  color: rgba(255, 255, 255, 0.85);
  font-size: 14px;
`;

const Card = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  gap: 14px;
  margin: 0 16px;
  padding: 14px;
  background-color: ${colors.panel};
  border-radius: 16px;
  border-width: 1px;
  border-color: ${colors.line};
`;

// Bolinha vermelha com o número da geração
const NumberCircle = styled.View`
  width: 48px;
  height: 48px;
  border-radius: 24px;
  background-color: ${colors.red};
  align-items: center;
  justify-content: center;
`;

const NumberText = styled.Text`
  color: ${colors.white};
  font-size: 22px;
  font-weight: 900;
`;

const Info = styled.View`
  flex: 1;
  gap: 2px;
`;

const Region = styled.Text`
  color: ${colors.text};
  font-size: 20px;
  font-weight: 800;
`;

const Games = styled.Text`
  color: ${colors.muted};
  font-size: 12px;
`;

const Starters = styled.View`
  flex-direction: row;
  gap: 8px;
  margin-top: 8px;
`;

// Fundo clarinho na cor do tipo (planta, fogo ou água)
const StarterCircle = styled.View`
  width: 52px;
  height: 52px;
  border-radius: 26px;
  background-color: ${(props) => props.$color};
  align-items: center;
  justify-content: center;
`;

const StarterImage = styled.Image`
  width: 46px;
  height: 46px;
`;

export {
  Card, Games, Hero, Info, NumberCircle, NumberText, Region, StarterCircle, StarterImage,
  Starters, Subtitle, Title,
};
