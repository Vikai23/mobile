import { View, Text, StyleSheet, TextInput, Image } from "react-native";

export default function ForgotPassword() {
    return (


        <View style={styles.container}>
            <View style={styles.logo}>
               
            </View>

            <Text style={styles.textPrimary}>Cadastro</Text>



            <View style={styles.inputContainer}>
                <Text style={styles.label}>Email</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Digite seu email"
                    keyboardType="email-address"
                />
            </View>




            <View style={styles.inputContainer}>
                <Text style={styles.label}>Senha:</Text>
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
        fontSize: 42
    },


});