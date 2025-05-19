import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Alert,
  useColorScheme,
} from 'react-native';

const CreateTaskScreen = () => {
  const [task, setTask] = useState('');
  const isDark = useColorScheme() === 'dark';
  const backgroundColor = isDark ? '#000' : '#fff';
  const textColor = isDark ? '#fff' : '#000';

  const handleCreateTask = () => {
    if (task.trim() === '') {
      Alert.alert('Error', 'Por favor ingresa una tarea.');
      return;
    }

    // Acá podrías guardar la tarea en una base de datos, estado global, etc.
    Alert.alert('Tarea creada', `"${task}" fue agregada`);
    setTask('');
  };

  return (
    <View style={[styles.container, {backgroundColor}]}>
      <Text style={[styles.title, {color: textColor}]}>Crear Nueva Tarea</Text>
      <TextInput
        style={[
          styles.input,
          {
            backgroundColor: isDark ? '#222' : '#eee',
            color: textColor,
            borderColor: isDark ? '#444' : '#ccc',
          },
        ]}
        placeholder="Escribe tu tarea aquí..."
        placeholderTextColor={isDark ? '#aaa' : '#666'}
        value={task}
        onChangeText={setTask}
      />
      <Button title="Crear tarea" onPress={handleCreateTask} />
    </View>
  );
};

export default CreateTaskScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 22,
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    marginBottom: 20,
  },
});
