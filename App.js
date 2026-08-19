import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './src/pages/home';
import Login from './src/pages/login';
import ForgotPassword from './src/pages/forgot-password';
import Register from  './src/pages/register';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }}/>

        <Stack.Screen name="Login" component={Login} options={{ title: 'Login' }}/>

        <Stack.Screen name="ForgotPassword" component={ForgotPassword} options={{ title: 'Esqueci a Senha' }}/>

        <Stack.Screen name="Register" component={Register} options={{ title: 'Cadastro' }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}