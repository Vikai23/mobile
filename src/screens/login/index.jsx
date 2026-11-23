import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import AlertBanner from "@components/alert-banner";
import FormHeader from "@components/form-header";
import { Button, ButtonText, Field, Input, Label, LinkText, Screen } from "@components/ui";
import { colors, typeColorAlpha } from "@/theme";
import * as S from "./style";

// Imagem do Torchic que fica na pasta src/images
const torchicImage = require("../../images/torchic.png");

export default function Login() {
  const navigation = useNavigation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function handleLogin() {
    if (!email || !password) {
      setError("Preencha o email e a senha.");
      return;
    }
    if (!email.includes("@")) {
      setError("Digite um email válido.");
      return;
    }

    setError("");
    navigation.navigate("Generations");
  }

  return (
    <Screen edges={["bottom"]}>
      <S.Scroll contentContainerStyle={{ padding: 24, gap: 16 }} keyboardShouldPersistTaps="handled">
        <FormHeader
          image={torchicImage}
          color={typeColorAlpha("fire", "26")}
          title="Bem-vindo de volta"
          subtitle="Entre para ver a Pokédex dos iniciais."
        />

        {/* O "key" faz o alerta aparecer de novo quando a mensagem muda */}
        {error ? <AlertBanner key={error} type="alert" message={error} /> : null}

        <Field>
          <Label>Email</Label>
          <Input
            value={email}
            onChangeText={setEmail}
            placeholder="seu@email.com"
            placeholderTextColor={colors.muted}
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </Field>

        <Field>
          <Label>Senha</Label>
          <Input
            value={password}
            onChangeText={setPassword}
            placeholder="Digite sua senha"
            placeholderTextColor={colors.muted}
            secureTextEntry
          />
        </Field>

        <S.ForgotLink onPress={() => navigation.navigate("ForgotPassword")}>
          <LinkText>Esqueci minha senha</LinkText>
        </S.ForgotLink>

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
