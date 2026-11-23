import styled from "styled-components/native";
import { colors } from "@/theme";

// Divide a tela em duas partes: o texto em cima e os botões embaixo
const Content = styled.View`
  flex: 1;
  justify-content: space-between;
  padding: 24px;
`;

const Top = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;

const Starters = styled.View`
  flex-direction: row;
  gap: 12px;
  margin-bottom: 20px;
`;

// Bolinha na cor do tipo com o inicial dentro
const StarterCircle = styled.View`
  width: 88px;
  height: 88px;
  border-radius: 44px;
  background-color: ${(props) => props.$color};
  border-width: 1px;
  border-color: ${(props) => props.$border};
  align-items: center;
  justify-content: center;
`;

const StarterImage = styled.Image`
  width: 74px;
  height: 74px;
`;

const Label = styled.Text`
  color: ${colors.red};
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 1.5px;
  text-transform: uppercase;
`;

const Title = styled.Text`
  color: ${colors.text};
  font-size: 32px;
  font-weight: 900;
  text-align: center;
`;

const Subtitle = styled.Text`
  color: ${colors.muted};
  font-size: 15px;
  line-height: 22px;
  text-align: center;
`;

const Buttons = styled.View`
  gap: 12px;
`;

export { Buttons, Content, Label, StarterCircle, StarterImage, Starters, Subtitle, Title, Top };
