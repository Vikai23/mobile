import { View, Text,TextInput, Image } from "react-native";

import { styles } from "./style";

export default function ForgotPassword() {
    return (
        <View style={styles.container}>
            <View style={styles.logo}>
                <Image
                    source={{ uri: "https://img.pokemondb.net/sprites/diamond-pearl/normal/blaziken-f.png" }}
                    style={{ width: 120, height: 120 }}
                />
            </View>

            <Text style={styles.textPrimary}>Esqueci a Senha</Text>

            <View style={styles.inputContainer}>
                <Text style={styles.label}>Nova Senha:</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Digite sua senha"
                    secureTextEntry
                />
            </View>
        </View>


    );
}



