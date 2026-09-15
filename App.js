import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack"

import { ForgotPassword, Home, Login, Register } from "@screens/"
import DetailsModal from '@components/modal';

const Stack = createNativeStackNavigator()

const RootStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
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
   <NavigationContainer>
      <RootStack />
   </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 32
  },
});