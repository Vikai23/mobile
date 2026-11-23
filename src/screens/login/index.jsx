import { View, Text,TextInput, TouchableOpacity, Pressable, Image } from "react-native";
import { styles } from "./style.js";
export default function Login({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.logo}>
      <Image
  source={{ uri: "https://img.pokemondb.net/sprites/x-y/normal/torchic.png" }}
  style={{ width: 120, height: 120 }}
/>
        </View>
      
      
      <Text style={styles.textPrimary}>Login</Text>

      
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite seu email"
          keyboardType="email-address"
        />
      </View>


      <View style={styles.inputContainer}>
        <Text style={styles.label}>Senha</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite sua senha"
          secureTextEntry
        />
      </View>
       <View style={styles.btn}>
      <Pressable onPress={() => navigation.navigate("ForgotPassword")}>
        <Text style={styles.btnPrimary}>
          Esqueceu a senha?
        </Text>
      </Pressable>
      <TouchableOpacity
        onPress={() => navigation.navigate("Generations")}
        style={styles.btnSecondary}
      >
        <Text style={{ color: "white", fontSize: 15 }}>
          Login
        </Text>
      </TouchableOpacity>
      </View>
     
    </View>
  );
}

