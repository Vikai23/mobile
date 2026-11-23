import { FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome6 } from "@expo/vector-icons";
import { generations } from "@/data/generations";
import { getArtworkUrl } from "@services/api";
import { Screen } from "@components/ui";
import { colors, lightTypeColor } from "@/theme";
import * as S from "./style";

// Lista das 5 gerações. Tocando em uma, abre a tela com os iniciais dela.
const Generations = () => {
  const navigation = useNavigation();

  return (
    <Screen edges={["bottom"]}>
      <FlatList
        data={generations}
        keyExtractor={(item) => String(item.number)}
        contentContainerStyle={{ gap: 12, paddingBottom: 24 }}
        ListHeaderComponent={
          <S.Hero>
            <S.Title>Pokédex dos Iniciais</S.Title>
            <S.Subtitle>Escolha uma geração para ver os 3 Pokémon iniciais dela.</S.Subtitle>
          </S.Hero>
        }
        renderItem={({ item }) => (
          <S.Card onPress={() => navigation.navigate("Generation", { number: item.number })}>
            <S.NumberCircle>
              <S.NumberText>{item.number}</S.NumberText>
            </S.NumberCircle>

            <S.Info>
              <S.Region>{item.region}</S.Region>
              <S.Games numberOfLines={1}>{item.games}</S.Games>
              <S.Starters>
                {item.starters.map((starter) => (
                  <S.StarterCircle key={starter.id} $color={lightTypeColor(starter.type)}>
                    <S.StarterImage source={{ uri: getArtworkUrl(starter.id) }} resizeMode="contain" />
                  </S.StarterCircle>
                ))}
              </S.Starters>
            </S.Info>

            <FontAwesome6 name="chevron-right" size={18} color={colors.muted} />
          </S.Card>
        )}
      />
    </Screen>
  );
};

export default Generations;
