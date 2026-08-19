import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable, TouchableOpacity, Image } from 'react-native';

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: "https://img.pokemondb.net/sprites/x-y/normal/blaziken-mega.png" }}
        style={{ width: 120, height: 120 }}
      />
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20
  },
  textPrimary: {
    fontSize: 42
  },
  btnPrimary: {
    backgroundColor: "#3474eb",
    padding: 12,
    borderRadius: 20,
    color: "#fff"
  },
  btnSecondary: {
    backgroundColor: "blue",
    padding: 12,
    borderRadius: 20
  },
  geral: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    gap: 20
  }
});
