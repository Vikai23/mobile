import { View, Text, TextInput, Image } from "react-native";
import { styles } from "./style";
export default function Register() {
    return (


        <View style={styles.container}>
            <View style={styles.logo}>
            <Image
        source={{ uri: "https://archives.bulbagarden.net/media/upload/6/68/EggMS3.png" }}
        style={{ width: 120, height: 120 }}
      />
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
