import { StatusBar } from 'expo-status-bar';
import { Text, View, Pressable, TouchableOpacity, Image } from 'react-native';
import { styles } from "./style";
export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.logo}>
         <Image
        source={{ uri: "https://img.pokemondb.net/sprites/x-y/normal/blaziken-mega.png" }}
        style={{ width: 120, height: 120 }}
      />
      </View>
     
      <Text style={styles.textPrimary}>Testekk</Text>
      <View style={styles.geral}>
        <Pressable onPress={() => navigation.navigate("Register")}>
          <Text style={styles.btnPrimary}>
            Não tem cadastro
          </Text>
        </Pressable>
        <TouchableOpacity onPress={() => navigation.navigate("Login")} style={styles.btnSecondary}>
          <Text style={{ color: "white", fontSize: 15 }}>
            Login
          </Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

