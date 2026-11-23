import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import AlertBanner from "@components/alert-banner";
import FormHeader from "@components/form-header";
import { Button, ButtonText, Field, Input, Label, LinkText, Screen } from "@components/ui";
import { colors } from "@/theme";
import * as S from "./style";

// Imagem do ovo de Pokémon (do site PokémonDB)
const eggImage = { uri: "https://img.pokemondb.net/sprites/home/normal/egg.png" };

export default function Register() {
  const navigation = useNavigation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function handleRegister() {
    if (!email || !password) {
      setError("Preencha o email e a senha.");
      return;
    }
    if (!email.includes("@")) {
      setError("Digite um email válido.");
      return;
    }
    if (password.length < 6) {
      setError("A senha precisa ter pelo menos 6 caracteres.");
      return;
    }

    setError("");
    setEmail("");
    setPassword("");
    navigation.navigate("DetailsModal", {
      title: "Conta criada",
      description: "Agora é só entrar com seu email e senha.",
      type: "success",
    });
  }

  return (
    <Screen edges={["bottom"]}>
      <S.Scroll contentContainerStyle={{ padding: 24, gap: 16 }} keyboardShouldPersistTaps="handled">
        <FormHeader
          image={eggImage}
          color={colors.panel2}
          title="Criar conta"
          subtitle="É rapidinho: só precisa de um email e uma senha."
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
            placeholder="Pelo menos 6 caracteres"
            placeholderTextColor={colors.muted}
            secureTextEntry
          />
        </Field>

        <Button onPress={handleRegister}>
          <ButtonText>Criar conta</ButtonText>
        </Button>

        <S.Footer>
          <S.FooterText>Já tem conta?</S.FooterText>
          <S.FooterLink onPress={() => navigation.navigate("Login")}>
            <LinkText>Entrar</LinkText>
          </S.FooterLink>
        </S.Footer>
      </S.Scroll>
    </Screen>
  );
}
