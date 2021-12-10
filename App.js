import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, Image, TouchableHighlight, SafeAreaView } from 'react-native';

export default function App() {
  const handlePress = () => console.log("Pressed!!!");
  console.log("App executed!");

  return (
    <SafeAreaView style={styles.container}>
      <Text>Hello Ghidyon! Start Building!</Text>
      <TouchableHighlight activeOpacity={0.1}>
        <Image
          source={{
            uri: "https://picsum.photos/200/300",
            width: 200,
            height: 300
          }} />
      </TouchableHighlight>
      <StatusBar style="auto" />
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
