import { useNavigation } from "@react-navigation/native";
import { generations } from "@/data/generations";
import { getArtworkUrl } from "@services/api";
import { Button, ButtonText, OutlineButton, OutlineButtonText, Screen } from "@components/ui";
import { typeColorAlpha } from "@/theme";
import * as S from "./style";

// Tela de entrada do app
export default function Home() {
  const navigation = useNavigation();

  // Os 3 iniciais de Kanto aparecem no topo da tela
  const kantoStarters = generations[0].starters;

  return (
    <Screen>
      <S.Content>
        <S.Top>
          <S.Starters>
            {kantoStarters.map((starter) => (
              <S.StarterCircle
                key={starter.id}
                $color={typeColorAlpha(starter.type, "26")}
                $border={typeColorAlpha(starter.type, "66")}
              >
                <S.StarterImage source={{ uri: getArtworkUrl(starter.id) }} resizeMode="contain" />
              </S.StarterCircle>
            ))}
          </S.Starters>

          <S.Label>Gerações 1 a 5</S.Label>
          <S.Title>Pokédex dos Iniciais</S.Title>
          <S.Subtitle>
            Conheça os Pokémon iniciais das 5 primeiras gerações, com a Pokédex, as evoluções,
            os mapas e os líderes de ginásio.
          </S.Subtitle>
        </S.Top>

        <S.Buttons>
          <Button onPress={() => navigation.navigate("Login")}>
            <ButtonText>Entrar</ButtonText>
          </Button>
          <OutlineButton onPress={() => navigation.navigate("Register")}>
            <OutlineButtonText>Criar conta</OutlineButtonText>
          </OutlineButton>
        </S.Buttons>
      </S.Content>
    </Screen>
  );
}
