import styled from "styled-components/native";
import { colors } from "@/theme";

const Container = styled.View`
  align-items: center;
  gap: 6px;
  margin-bottom: 8px;
`;

// Círculo atrás da imagem
const Glow = styled.View`
  width: 130px;
  height: 130px;
  border-radius: 65px;
  background-color: ${(props) => props.$color};
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
`;

const Picture = styled.Image`
  width: 110px;
  height: 110px;
`;

const Title = styled.Text`
  color: ${colors.text};
  font-size: 26px;
  font-weight: 900;
  text-align: center;
`;

const Subtitle = styled.Text`
  color: ${colors.muted};
  font-size: 14px;
  line-height: 20px;
  text-align: center;
`;

export { Container, Glow, Picture, Subtitle, Title };
