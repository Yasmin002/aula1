import { StatusBar } from 'expo-status-bar';
import {StyleSheet, Text, View } from 'react-native';



export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Olá mundo!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto:{
    color: '#00FF7F',
    fontSize:30
  }
});
