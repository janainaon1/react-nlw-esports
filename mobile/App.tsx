import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello Janaina!</Text>
      <Button title="Entrar" />
      <Button title="Sair" />
      <StatusBar style="auto" />
    </View>
  );
}

interface ButtonProps {
  title: string;
}

function Button({ title }: ButtonProps) {
  return (
    <TouchableOpacity style={styles.button}>
      <Text>
        {title}
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    color: '#FFF',
    padding: 15,
    margin: 20,
    backgroundColor: '#ffb7e2',
    width: '90%',
    borderRadius: 10
  },
});
