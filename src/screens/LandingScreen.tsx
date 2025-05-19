import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  useColorScheme,
  Button,
} from 'react-native';

const LandingScreen = ({navigation}) => {
  const isDark = useColorScheme() === 'dark';
  const backgroundColor = isDark ? '#000' : '#fff';
  const textColor = isDark ? '#fff' : '#000';

  return (
    <View style={[styles.container, {backgroundColor}]}>
      <Text style={[styles.title, {color: textColor}]}>
        ¡Bienvenido a TODO!
      </Text>
      <View style={styles.buttonContainer}>
        <Button
          title="Crear nueva tarea"
          onPress={() => navigation.navigate('CreateTask')}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Ver tareas"
          onPress={() => navigation.navigate('ViewTasks')}
        />
      </View>
    </View>
  );
};

export default LandingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 30,
  },
  buttonContainer: {
    width: '100%',
    marginBottom: 15,
  },
});
