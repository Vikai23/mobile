import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable, TouchableOpacity, Image } from 'react-native';

export default function Home({navigaton}) {
  return (
    <View style={styles.container}>
      <Image source={require("../../../assets/icon.png")} style={{width: 64, height: 64}}/>
      <Text style={styles.textPrimary}>Testekk</Text>
      <View style={styles.geral}>
        <Pressable onPress={() => console.log("Apertado 1")}>
          <Text style={styles.btnPrimary}>
          Não tem cadastro
          </Text>
        </Pressable>
        <TouchableOpacity  onPress={() => navigaton.navigate("Login")} style={styles.btnSecondary}>
          <Text style={{color: "white", fontSize: 15}}>
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
    textDecorationLine: "underline",
    color: "darkblue",
    fontSize: 15
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
