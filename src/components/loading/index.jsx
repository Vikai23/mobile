import { ActivityIndicator } from "react-native";
import { Center, Screen } from "@components/ui";
import { colors } from "@/theme";

// Tela de "carregando", usada enquanto os dados chegam da API
const Loading = () => {
  return (
    <Screen edges={["bottom"]}>
      <Center>
        <ActivityIndicator size="large" color={colors.red} />
      </Center>
    </Screen>
  );
};

export default Loading;
