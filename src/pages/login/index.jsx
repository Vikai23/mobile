import { View, Text, StyleSheet, TextInput, TouchableOpacity, Pressable, Image } from "react-native";

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
        onPress={() => console.log("Apertado Login")}
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 14,
  },


  logo:{
    top: 68
  },

  textPrimary: {
    fontSize: 42,
  },

  inputContainer: {
    width: "60%",
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
   
  btn:{
    display: 'flex',
    flexDirection:"row",
    justifyContent: "center",
    alignItems: "center",
    gap: 50,
  },


  btnPrimary: {
    textDecorationLine: "underline",
    color: "grey",
    fontSize: 15,
  },

  btnSecondary: {
    backgroundColor: "blue",
    padding: 8,
    borderRadius: 22,
  },
});
