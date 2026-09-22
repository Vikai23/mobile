import { useState } from "react";
import { View, Text, TextInput, Image, Pressable, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { styles } from "./style";
import AlertBanner from "@components/alert-banner";

export default function ForgotPassword() {
    const navigation = useNavigation();
    const [password, setPassword] = useState("");

    function handleSave() {
        if (!password) return;

        navigation.navigate("DetailsModal", {
            title: "Feito",
            description: "Senha alterada com sucesso!",
            type: "success",
        });
        setPassword("");
    }

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.logo}>
                <Image
                    source={{ uri: "https://img.pokemondb.net/sprites/diamond-pearl/normal/blaziken-f.png" }}
                    style={{ width: 120, height: 120 }}
                />
            </View>

            <Text style={styles.textPrimary}>Esqueci a Senha</Text>

            <AlertBanner type="alert" message="Uma mensagem de Alerta." />
            <AlertBanner type="info" message="Uma mensagem de Informação." />
            <AlertBanner type="danger" message="Uma mensagem de Perigo." />
            <AlertBanner type="success" message="Uma mensagem de Sucesso." />

            <View style={styles.inputContainer}>
                <Text style={styles.label}>Nova Senha:</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Digite sua senha"
                    secureTextEntry
                    value={password}
                    onChangeText={setPassword}
                />
            </View>

            <Pressable onPress={handleSave} style={styles.btnPrimary}>
                <Text style={styles.btnPrimaryText}>Salvar</Text>
            </Pressable>
        </ScrollView>
    );
}
