import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, SafeAreaView, Alert, Button } from 'react-native';

export default function App() {
  const handlePress = () => console.log("Pressed!!!");
  console.log("App executed!");

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <Button
        color="orange"
        onPress={() => Alert.prompt("Number Prompt", "Enter a number",
          (string => console.log(string)))}
        title="Tap me" />
    </SafeAreaView>
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
