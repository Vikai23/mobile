import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { SafeAreaProvider } from "react-native-safe-area-context";

import { ForgotPassword, Generation, Generations, Home, Login, Pokemon, Register } from "@screens/"
import DetailsModal from '@components/modal';
import { colors } from "@/theme";

const Stack = createNativeStackNavigator()

// Cabeçalho escuro, da mesma cor do fundo das telas da Pokédex
const headerOptions = {
  headerStyle: { backgroundColor: colors.bg },
  headerTintColor: colors.text,
  headerTitleStyle: { fontWeight: "bold" },
  headerShadowVisible: false,
}

const RootStack = () => {
  return (
    <Stack.Navigator screenOptions={headerOptions}>
      <Stack.Screen name="Home" component={Home} options={{ title: "Início", headerShown: false }} />
      <Stack.Screen name="Login" component={Login} options={{ title: "Entrar" }} />
      <Stack.Screen name="Register" component={Register} options={{ title: "Criar conta" }} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} options={{ title: "Esqueci a senha" }} />
      <Stack.Screen name="Generations" component={Generations} options={{ title: "Gerações" }} />
      <Stack.Screen name="Generation" component={Generation} options={{ title: "Iniciais" }} />
      <Stack.Screen name="Pokemon" component={Pokemon} options={{ title: "Pokédex" }} />
      <Stack.Group screenOptions={{
        presentation: "transparentModal", animation: "slide_from_bottom" }}>
        <Stack.Screen
          name='DetailsModal'
          component={DetailsModal}
          options={{ headerShown: false }} />
      </Stack.Group>
    </Stack.Navigator>
  )
}

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <RootStack />
      </NavigationContainer>
      <StatusBar style="light" />
    </SafeAreaProvider>
  );
}
