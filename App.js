import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import LoginScreen from './Apps/Screens/LoginScreen';
import { ClerkProvider, SignedIn, SignedOut } from '@clerk/clerk-expo';
import SignUpScreen from './components/SignUpScreen';
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native';
import MainScreen from './Apps/Screens/MainScreen';


const Stack = createStackNavigator();
function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} >
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Main" component={MainScreen} />
    </Stack.Navigator>
  )
}


export default function App() {
  return (
    //<ClerkProvider publishableKey={'pk_test_ZGVmaW5pdGUtYW50ZWF0ZXItNTguY2xlcmsuYWNjb3VudHMuZGV2JA'}>
    // <View className="flex-1 bg-white">
    //   <StatusBar style="auto" />
    <NavigationContainer>
      <HomeStack />
    </NavigationContainer>
    //</View>
    //</ClerkProvider>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

//Commit 2 nè
