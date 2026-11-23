import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { createAccount } from "@services/api";
import AlertBanner from "@components/alert-banner";
import FormHeader from "@components/form-header";
import { Button, ButtonText, Field, Input, Label, LinkText, Screen } from "@components/ui";
import { colors } from "@/theme";
import * as S from "./style";

// Imagem do ovo de Pokémon (do site PokémonDB)
const eggImage = { uri: "https://img.pokemondb.net/sprites/home/normal/egg.png" };

export default function Register() {
  const navigation = useNavigation();

  const [name, setName] = useState("");
  const [error, setError] = useState("");

  async function handleRegister() {
    if (!name.trim()) {
      setError("Digite um nome.");
      return;
    }

    try {
      // A API salva a conta. Se o nome já existir, ela devolve um erro.
      await createAccount(name.trim());
      setError("");
      setName("");
      navigation.navigate("DetailsModal", {
        title: "Conta criada",
        description: `Agora é só entrar com o nome ${name.trim()}.`,
        type: "success",
      });
    } catch (e) {
      setError(e.message);
    }
  }

  return (
    <Screen edges={["bottom"]}>
      <S.Scroll contentContainerStyle={{ padding: 24, gap: 16 }} keyboardShouldPersistTaps="handled">
        <FormHeader
          image={eggImage}
          color={colors.panel2}
          title="Criar conta"
          subtitle="É rápido: só precisa de um nome."
        />

        {/* O "key" faz o alerta aparecer de novo quando a mensagem muda */}
        {error ? <AlertBanner key={error} type="alert" message={error} /> : null}

        <Field>
          <Label>Nome</Label>
          <Input
            value={name}
            onChangeText={setName}
            placeholder="Como você quer ser chamado?"
            placeholderTextColor={colors.muted}
            autoCorrect={false}
            returnKeyType="go"
            onSubmitEditing={handleRegister}
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
