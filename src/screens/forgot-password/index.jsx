import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { getArtworkUrl } from "@/helpers";
import AlertBanner from "@components/alert-banner";
import FormHeader from "@components/form-header";
import { Button, ButtonText, Field, Input, Label, Screen } from "@components/ui";
import { colors, typeColorAlpha } from "@/theme";
import * as S from "./style";

// Imagem oficial do Blaziken (número 257 da Pokédex)
const blazikenImage = { uri: getArtworkUrl(257) };

export default function ForgotPassword() {
  const navigation = useNavigation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function handleSave() {
    if (!email || !password) {
      setError("Preencha o email e a nova senha.");
      return;
    }
    if (!email.includes("@")) {
      setError("Digite um email válido.");
      return;
    }
    if (password.length < 6) {
      setError("A nova senha precisa ter pelo menos 6 caracteres.");
      return;
    }

    setError("");
    setEmail("");
    setPassword("");
    navigation.navigate("DetailsModal", {
      title: "Feito",
      description: "Senha alterada com sucesso!",
      type: "success",
    });
  }

  return (
    <Screen edges={["bottom"]}>
      <S.Scroll contentContainerStyle={{ padding: 24, gap: 16 }} keyboardShouldPersistTaps="handled">
        <FormHeader
          image={blazikenImage}
          color={typeColorAlpha("fire", "26")}
          title="Esqueci a senha"
          subtitle="Digite o email da sua conta e escolha uma nova senha."
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
          <Label>Nova senha</Label>
          <Input
            value={password}
            onChangeText={setPassword}
            placeholder="Pelo menos 6 caracteres"
            placeholderTextColor={colors.muted}
            secureTextEntry
          />
        </Field>

        <Button onPress={handleSave}>
          <ButtonText>Salvar nova senha</ButtonText>
        </Button>
      </S.Scroll>
    </Screen>
  );
}
