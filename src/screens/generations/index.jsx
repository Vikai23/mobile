import { useNavigation } from "@react-navigation/native";
import { FontAwesome6 } from "@expo/vector-icons";
import { generations } from "@/data/generations";
import { getArtworkUrl } from "@services/api";
import { Screen } from "@components/ui";
import { colors, typeColorAlpha } from "@/theme";
import * as S from "./style";

// Lista das 5 gerações. Tocando em uma, abre a tela para escolher o inicial dela.
const Generations = () => {
  const navigation = useNavigation();

  return (
    <Screen edges={["bottom"]}>
      <S.Scroll contentContainerStyle={{ padding: 16, gap: 12 }}>
        <S.Intro>
          <S.Title>Pokédex dos Iniciais</S.Title>
          <S.Subtitle>Escolha uma geração para conhecer os 3 Pokémon iniciais dela.</S.Subtitle>
        </S.Intro>

        {generations.map((item) => (
          <S.Card
            key={item.number}
            onPress={() => navigation.navigate("Generation", { number: item.number })}
          >
            <S.NumberCircle>
              <S.NumberText>{item.number}</S.NumberText>
            </S.NumberCircle>

            <S.Info>
              <S.Region>{item.region}</S.Region>
              <S.Games numberOfLines={1}>{item.games}</S.Games>
              <S.Starters>
                {item.starters.map((starter) => (
                  <S.StarterCircle
                    key={starter.id}
                    $color={typeColorAlpha(starter.type, "26")}
                    $border={typeColorAlpha(starter.type, "66")}
                  >
                    <S.StarterImage source={{ uri: getArtworkUrl(starter.id) }} resizeMode="contain" />
                  </S.StarterCircle>
                ))}
              </S.Starters>
            </S.Info>

            <FontAwesome6 name="chevron-right" size={16} color={colors.muted} />
          </S.Card>
        ))}
      </S.Scroll>
    </Screen>
  );
};

export default Generations;
