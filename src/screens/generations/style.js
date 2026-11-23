import styled from "styled-components/native";
import { colors } from "@/theme";

const Scroll = styled.ScrollView``;

const Intro = styled.View`
  gap: 6px;
  padding: 8px 4px 8px;
`;

const Title = styled.Text`
  color: ${colors.text};
  font-size: 28px;
  font-weight: 900;
`;

const Subtitle = styled.Text`
  color: ${colors.muted};
  font-size: 14px;
  line-height: 20px;
`;

const Card = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  gap: 14px;
  padding: 16px;
  background-color: ${colors.panel};
  border-radius: 20px;
  border-width: 1px;
  border-color: ${colors.line};
`;

// Bolinha vermelha com o número da geração
const NumberCircle = styled.View`
  width: 46px;
  height: 46px;
  border-radius: 23px;
  background-color: ${colors.red};
  align-items: center;
  justify-content: center;
`;

const NumberText = styled.Text`
  color: ${colors.white};
  font-size: 20px;
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
  margin-top: 10px;
`;

// Bolinha na cor do tipo (planta, fogo ou água) com o inicial dentro
const StarterCircle = styled.View`
  width: 52px;
  height: 52px;
  border-radius: 26px;
  background-color: ${(props) => props.$color};
  border-width: 1px;
  border-color: ${(props) => props.$border};
  align-items: center;
  justify-content: center;
`;

const StarterImage = styled.Image`
  width: 44px;
  height: 44px;
`;

export {
  Card, Games, Info, Intro, NumberCircle, NumberText, Region, Scroll, StarterCircle, StarterImage,
  Starters, Subtitle, Title,
};
