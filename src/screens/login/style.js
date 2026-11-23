import styled from "styled-components/native";
import { colors } from "@/theme";

const Scroll = styled.ScrollView``;

// Link "Esqueci minha senha", alinhado à direita
const ForgotLink = styled.TouchableOpacity`
  align-self: flex-end;
`;

const Footer = styled.View`
  flex-direction: row;
  justify-content: center;
  gap: 6px;
  margin-top: 4px;
`;

const FooterText = styled.Text`
  color: ${colors.muted};
  font-size: 14px;
`;

const FooterLink = styled.TouchableOpacity``;

export { Footer, FooterLink, FooterText, ForgotLink, Scroll };
