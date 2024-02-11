import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignUpScreen from "./src/Screens/SignUpScreen/SignUpScreen";
import SignInScreen from "./src/Screens/SignInScreen/SignInScreen";
import FeedScreen from "./src/Screens/FeedScreen/FeedScreen"
import MarketScreen from "./src/Screens/MarketScreen/MarketScreen"
import ContentScreen from "./src/Screens/ContentScreen/Content"


const Stack = createStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Content">
            <Stack.Screen
                name="SignUp"
                component={SignUpScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="SignIn"
                component={SignInScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Feed"
                component={FeedScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Market"
                component={MarketScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Content"
                component={ContentScreen}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
      </NavigationContainer>


    // <View style={styles.container}>
    //   <Text>Open up App.js to start working on your app!</Text>
    //   <StatusBar style="auto" />
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
