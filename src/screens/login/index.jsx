import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { login } from "@services/api";
import AlertBanner from "@components/alert-banner";
import FormHeader from "@components/form-header";
import { Button, ButtonText, Field, Input, Label, LinkText, Screen } from "@components/ui";
import { colors, typeColorAlpha } from "@/theme";
import * as S from "./style";

// Imagem do Torchic que fica na pasta src/images
const torchicImage = require("../../images/torchic.png");

export default function Login() {
  const navigation = useNavigation();

  const [name, setName] = useState("");
  const [error, setError] = useState("");

  async function handleLogin() {
    if (!name.trim()) {
      setError("Digite o seu nome.");
      return;
    }

    try {
      // A API confere se existe uma conta com esse nome
      await login(name.trim());
      setError("");
      navigation.navigate("Generations");
    } catch (e) {
      setError(e.message);
    }
  }

  return (
    <Screen edges={["bottom"]}>
      <S.Scroll contentContainerStyle={{ padding: 24, gap: 16 }} keyboardShouldPersistTaps="handled">
        <FormHeader
          image={torchicImage}
          color={typeColorAlpha("fire", "26")}
          title="Bem-vindo de volta"
          subtitle="Digite o nome que você usou para criar a conta."
        />

        {/* O "key" faz o alerta aparecer de novo quando a mensagem muda */}
        {error ? <AlertBanner key={error} type="alert" message={error} /> : null}

        <Field>
          <Label>Nome</Label>
          <Input
            value={name}
            onChangeText={setName}
            placeholder="Seu nome de treinador"
            placeholderTextColor={colors.muted}
            autoCorrect={false}
            returnKeyType="go"
            onSubmitEditing={handleLogin}
          />
        </Field>

        <Button onPress={handleLogin}>
          <ButtonText>Entrar</ButtonText>
        </Button>

        <S.Footer>
          <S.FooterText>Ainda não tem conta?</S.FooterText>
          <S.FooterLink onPress={() => navigation.navigate("Register")}>
            <LinkText>Criar conta</LinkText>
          </S.FooterLink>
        </S.Footer>
      </S.Scroll>
    </Screen>
  );
}
