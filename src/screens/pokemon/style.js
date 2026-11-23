import styled from "styled-components/native";
import { colors } from "@/theme";

const Scroll = styled.ScrollView``;

// Topo com a imagem do Pokémon, com fundo na cor do tipo dele
const Hero = styled.View`
  align-items: center;
  padding: 12px 20px 20px;
  background-color: ${(props) => props.$color};
  border-bottom-left-radius: 28px;
  border-bottom-right-radius: 28px;
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

const Genus = styled.Text`
  color: ${colors.muted};
  font-size: 14px;
`;

const Artwork = styled.Image`
  width: 220px;
  height: 220px;
  margin: 8px 0;
`;

const Types = styled.View`
  flex-direction: row;
  gap: 8px;
`;

const Content = styled.View`
  gap: 14px;
  padding: 16px 16px 0;
`;

const Stats = styled.View`
  flex-direction: row;
  gap: 12px;
`;

const Stat = styled.View`
  flex: 1;
  align-items: center;
  gap: 2px;
  padding: 12px;
  background-color: ${colors.panel};
  border-radius: 14px;
  border-width: 1px;
  border-color: ${colors.line};
`;

const StatLabel = styled.Text`
  color: ${colors.muted};
  font-size: 12px;
  font-weight: 700;
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

const Source = styled.Text`
  color: ${colors.muted};
  font-size: 12px;
  font-style: italic;
`;

const EvolutionRow = styled.View`
  flex-direction: row;
  align-items: center;
`;

// Cada Pokémon da linha de evolução. O que está aberto fica com borda vermelha.
const Evolution = styled.TouchableOpacity`
  flex: 1;
  align-items: center;
  gap: 4px;
  padding: 8px 2px;
  border-radius: 14px;
  border-width: 2px;
  border-color: ${(props) => (props.$active ? colors.red : "transparent")};
`;

const EvolutionImage = styled.Image`
  width: 64px;
  height: 64px;
`;

const EvolutionName = styled.Text`
  color: ${colors.text};
  font-size: 12px;
  font-weight: 700;
`;

const Arrow = styled.View`
  width: 40px;
  align-items: center;
  gap: 2px;
`;

const ArrowText = styled.Text`
  color: ${colors.muted};
  font-size: 10px;
  font-weight: 700;
`;

const Hint = styled.Text`
  color: ${colors.muted};
  font-size: 12px;
  text-align: center;
`;

export {
  Arrow, ArrowText, Artwork, Content, Description, Evolution, EvolutionImage, EvolutionName,
  EvolutionRow, Genus, Hero, Hint, Name, PokedexNumber, Scroll, Source, Stat, StatLabel, StatValue,
  Stats, Types,
};
