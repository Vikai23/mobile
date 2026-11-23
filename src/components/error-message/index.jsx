import AlertBanner from "@components/alert-banner";
import { Button, ButtonText, Center, Screen } from "@components/ui";

// Tela de erro: mostra a mensagem e um botão para tentar buscar de novo
const ErrorMessage = ({ message, onRetry }) => {
  return (
    <Screen edges={["bottom"]}>
      <Center>
        <AlertBanner type="danger" message={message} />
        <Button onPress={onRetry}>
          <ButtonText>Tentar de novo</ButtonText>
        </Button>
      </Center>
    </Screen>
  );
};

export default ErrorMessage;
