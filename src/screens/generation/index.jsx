import { useNavigation, useRoute } from "@react-navigation/native";
import { generations } from "@/data/generations";
import { getArtworkUrl } from "@services/api";
import TypeBadge from "@components/type-badge";
import { Screen, SectionTitle } from "@components/ui";
import { typeColor } from "@/theme";
import * as S from "./style";

// Tela de uma geração: mostra a região e os 3 iniciais dela
const Generation = () => {
  const navigation = useNavigation();
  const { number } = useRoute().params;

  const generation = generations.find((item) => item.number === number);

  return (
    <Screen edges={["bottom"]}>
      <S.Scroll contentContainerStyle={{ paddingBottom: 24 }}>
        <S.Hero>
          <S.Label>Geração {generation.number}</S.Label>
          <S.Region>{generation.region}</S.Region>
          <S.Games>{generation.games}</S.Games>
        </S.Hero>

        <S.Content>
          <SectionTitle>Os 3 iniciais</SectionTitle>

          <S.Starters>
            {generation.starters.map((starter) => (
              <S.StarterCard
                key={starter.id}
                $color={typeColor[starter.type]}
                onPress={() => navigation.navigate("Pokemon", { id: starter.id })}
              >
                <S.StarterImage source={{ uri: getArtworkUrl(starter.id) }} resizeMode="contain" />
                <S.StarterName numberOfLines={1}>{starter.name}</S.StarterName>
                <TypeBadge type={starter.type} />
              </S.StarterCard>
            ))}
          </S.Starters>

          <S.Hint>Toque em um inicial para ver a Pokédex e as evoluções dele.</S.Hint>
        </S.Content>
      </S.Scroll>
    </Screen>
  );
};

export default Generation;
