import styled from "styled-components/native";
import { colors } from "@/theme";

const Scroll = styled.ScrollView``;

// Topo com a imagem do Pokémon, com o fundo na cor do tipo dele
const Top = styled.View`
  align-items: center;
  gap: 2px;
  padding: 20px;
  background-color: ${(props) => props.$color};
  border-radius: 28px;
  border-width: 1px;
  border-color: ${(props) => props.$border};
`;

const PokedexNumber = styled.Text`
  color: ${colors.muted};
  font-size: 14px;
  font-weight: 800;
  letter-spacing: 1px;
`;

const Name = styled.Text`
  color: ${colors.text};
  font-size: 30px;
  font-weight: 900;
`;

const Category = styled.Text`
  color: ${colors.muted};
  font-size: 14px;
`;

// Círculo atrás da imagem, que dá um brilho na cor do tipo
const Glow = styled.View`
  width: 210px;
  height: 210px;
  border-radius: 105px;
  background-color: ${(props) => props.$color};
  align-items: center;
  justify-content: center;
  margin: 14px 0;
`;

const Artwork = styled.Image`
  width: 200px;
  height: 200px;
`;

const Types = styled.View`
  flex-direction: row;
  gap: 8px;
`;

// Botões para trocar a imagem entre a versão normal e a shiny
const Versions = styled.View`
  flex-direction: row;
  gap: 4px;
  margin-top: 14px;
  padding: 4px;
  border-radius: 20px;
  background-color: ${colors.panel};
  border-width: 1px;
  border-color: ${colors.line};
`;

// O botão escolhido fica na cor do tipo do Pokémon
const Version = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  gap: 6px;
  padding: 7px 16px;
  border-radius: 16px;
  background-color: ${(props) => (props.$active ? props.$color : "transparent")};
`;

const VersionText = styled.Text`
  color: ${(props) => (props.$active ? colors.bg : colors.muted)};
  font-size: 13px;
  font-weight: 800;
`;

// Quadradinhos com altura, peso e geração
const Stats = styled.View`
  flex-direction: row;
  gap: 10px;
`;

const Stat = styled.View`
  flex: 1;
  gap: 4px;
  padding: 12px 14px;
  background-color: ${colors.panel};
  border-radius: 16px;
  border-width: 1px;
  border-color: ${colors.line};
`;

const StatLabel = styled.Text`
  color: ${colors.muted};
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 1px;
  text-transform: uppercase;
`;

const StatValue = styled.Text`
  color: ${colors.text};
  font-size: 18px;
  font-weight: 800;
`;

const Description = styled.Text`
  color: ${colors.text};
  font-size: 16px;
  line-height: 24px;
`;

// Uma linha para cada estágio da evolução. O que está aberto fica destacado na cor do tipo.
const Evolution = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  gap: 12px;
  padding: 8px 12px;
  border-radius: 16px;
  border-width: 1px;
  border-color: ${(props) => (props.$active ? props.$border : colors.line)};
  background-color: ${(props) => (props.$active ? props.$color : "transparent")};
`;

const EvolutionImage = styled.Image`
  width: 56px;
  height: 56px;
`;

const EvolutionInfo = styled.View`
  flex: 1;
`;

const EvolutionName = styled.Text`
  color: ${colors.text};
  font-size: 16px;
  font-weight: 800;
`;

const EvolutionLevel = styled.Text`
  color: ${colors.muted};
  font-size: 13px;
`;

const Here = styled.Text`
  color: ${colors.text};
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 1px;
  text-transform: uppercase;
`;

export {
  Artwork, Category, Description, Evolution, EvolutionImage, EvolutionInfo, EvolutionLevel,
  EvolutionName, Glow, Here, Name, PokedexNumber, Scroll, Stat, StatLabel, StatValue, Stats, Top,
  Types, Version, VersionText, Versions,
};
