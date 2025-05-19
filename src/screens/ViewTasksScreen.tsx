import React, {useState} from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  useColorScheme,
} from 'react-native';

type Task = {
  id: string;
  text: string;
  completed: boolean;
};

const initialTasks: Task[] = [
  {id: '1', text: 'Tarea de ejemplo 1', completed: false},
  {id: '2', text: 'Tarea de ejemplo 2', completed: true},
];

const ViewTasksScreen = () => {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);
  const isDark = useColorScheme() === 'dark';
  const backgroundColor = isDark ? '#000' : '#fff';
  const textColor = isDark ? '#fff' : '#000';

  const toggleCheckbox = (id: string) => {
    setTasks(prev =>
      prev.map(task =>
        task.id === id ? {...task, completed: !task.completed} : task,
      ),
    );
  };

  const renderItem = ({item}: {item: Task}) => (
    <TouchableOpacity
      onPress={() => toggleCheckbox(item.id)}
      style={styles.taskItem}>
      <Text style={[styles.checkbox, {color: textColor}]}>
        {item.completed ? '☑' : '☐'}
      </Text>
      <Text
        style={[
          styles.taskText,
          {
            color: textColor,
            textDecorationLine: item.completed ? 'line-through' : 'none',
          },
        ]}>
        {item.text}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View style={[styles.container, {backgroundColor}]}>
      <Text style={[styles.title, {color: textColor}]}>Tus Tareas</Text>
      <FlatList
        data={tasks}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        ListEmptyComponent={
          <Text style={{color: textColor, textAlign: 'center', marginTop: 20}}>
            No hay tareas disponibles.
          </Text>
        }
      />
    </View>
  );
};

export default ViewTasksScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  title: {
    fontSize: 22,
    marginBottom: 20,
    textAlign: 'center',
  },
  taskItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  checkbox: {
    fontSize: 22,
    marginRight: 12,
  },
  taskText: {
    fontSize: 18,
  },
});
