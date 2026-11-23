import styled from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { colors } from "@/theme";

// Fundo escuro padrão das telas da Pokédex
const Screen = styled(SafeAreaView)`
  flex: 1;
  background-color: ${colors.bg};
`;

// Centraliza o "carregando" e as mensagens de erro
const Center = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  gap: 16px;
  padding: 24px;
`;

// Caixa escura de cada parte da tela (descrição, evoluções, mapa...)
const Card = styled.View`
  gap: 12px;
  padding: 18px;
  background-color: ${colors.panel};
  border-radius: 20px;
  border-width: 1px;
  border-color: ${colors.line};
`;

// Título pequeno de cada parte da tela (ex: "Evoluções")
const SectionTitle = styled.Text`
  color: ${colors.muted};
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 1.5px;
  text-transform: uppercase;
`;

// Botão principal, vermelho
const Button = styled.TouchableOpacity`
  padding: 14px 24px;
  border-radius: 24px;
  background-color: ${colors.red};
  align-items: center;
`;

const ButtonText = styled.Text`
  color: ${colors.white};
  font-size: 15px;
  font-weight: 700;
`;

// Botão com borda, para as ações secundárias
const OutlineButton = styled.TouchableOpacity`
  padding: 14px 24px;
  border-radius: 24px;
  border-width: 1px;
  border-color: ${colors.line};
  align-items: center;
`;

const OutlineButtonText = styled.Text`
  color: ${colors.text};
  font-size: 15px;
  font-weight: 700;
`;

// Texto que funciona como link (ex: "Criar conta")
const LinkText = styled.Text`
  color: ${colors.red};
  font-size: 14px;
  font-weight: 700;
`;

// Campos dos formulários (entrar e criar conta)
const Field = styled.View`
  gap: 6px;
`;

const Label = styled.Text`
  color: ${colors.muted};
  font-size: 13px;
  font-weight: 700;
`;

const Input = styled.TextInput`
  padding: 14px 16px;
  color: ${colors.text};
  font-size: 15px;
  background-color: ${colors.panel};
  border-radius: 14px;
  border-width: 1px;
  border-color: ${colors.line};
`;

export {
  Button, ButtonText, Card, Center, Field, Input, Label, LinkText, OutlineButton,
  OutlineButtonText, Screen, SectionTitle,
};
