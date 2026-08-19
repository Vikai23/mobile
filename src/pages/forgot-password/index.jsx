import { View, Text, StyleSheet, TextInput, Image } from "react-native";

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


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 14,
    },



    label: {
        fontSize: 14,
        color: "#222",
        marginBottom: 4,
    },

    input: {
        width: "100%",
        height: 40,
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 8,
        paddingHorizontal: 12,
        backgroundColor: "#fff",
        fontSize: 15,
    },



    textPrimary: {
        fontSize: 20
    },

});