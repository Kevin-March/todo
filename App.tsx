import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Button, Text, View, StyleSheet, useColorScheme} from 'react-native';
import LandingScreen from './src/screens/LandingScreen';
import CreateTaskScreen from './src/screens/CreateTaskScreen';
import ViewTasksScreen from './src/screens/ViewTasksScreen';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const Stack = createNativeStackNavigator();

const HomeScreen = ({navigation}) => {
  const isDark = useColorScheme() === 'dark';
  const backgroundColor = isDark ? '#000' : '#fff';
  const color = isDark ? '#fff' : '#000';

  return (
    <View style={[styles.container, {backgroundColor}]}>
      <Text style={[styles.title, {color}]}>Bienvenido a TODO</Text>
      <Button title="Login" onPress={() => navigation.navigate('Landing')} />
    </View>
  );
};

function App(): React.JSX.Element {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Landing" component={LandingScreen} />
          <Stack.Screen name="CreateTask" component={CreateTaskScreen} />
          <Stack.Screen name="ViewTasks" component={ViewTasksScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});
