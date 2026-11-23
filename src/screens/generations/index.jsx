import { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome6 } from "@expo/vector-icons";
import { getGenerations, getStarters } from "@services/api";
import ErrorMessage from "@components/error-message";
import Loading from "@components/loading";
import { Screen } from "@components/ui";
import { colors, typeColorAlpha } from "@/theme";
import * as S from "./style";

// Lista das 5 gerações. Tocando em uma, abre a tela para escolher o inicial dela.
const Generations = () => {
  const navigation = useNavigation();

  const [generations, setGenerations] = useState([]);
  const [starters, setStarters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  async function load() {
    setLoading(true);
    setError("");
    try {
      setGenerations(await getGenerations());
      setStarters(await getStarters());
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  }

  // Busca os dados na API quando a tela abre
  useEffect(() => {
    load();
  }, []);

  if (loading) return <Loading />;
  if (error) return <ErrorMessage message={error} onRetry={load} />;

  return (
    <Screen edges={["bottom"]}>
      <S.Scroll contentContainerStyle={{ padding: 16, gap: 12 }}>
        <S.Intro>
          <S.Title>Pokédex dos Iniciais</S.Title>
          <S.Subtitle>Escolha uma geração para conhecer os 3 Pokémon iniciais dela.</S.Subtitle>
        </S.Intro>

        {generations.map((item) => (
          <S.Card key={item.id} onPress={() => navigation.navigate("Generation", { id: item.id })}>
            <S.NumberCircle>
              <S.NumberText>{item.id}</S.NumberText>
            </S.NumberCircle>

            <S.Info>
              <S.Region>{item.region}</S.Region>
              <S.Games numberOfLines={1}>{item.games}</S.Games>
              <S.Starters>
                {/* Só os iniciais desta geração */}
                {starters
                  .filter((starter) => starter.generation === item.id)
                  .map((starter) => (
                    <S.StarterCircle
                      key={starter.id}
                      $color={typeColorAlpha(starter.type1, "26")}
                      $border={typeColorAlpha(starter.type1, "66")}
                    >
                      <S.StarterImage source={{ uri: starter.imageUrl }} resizeMode="contain" />
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
