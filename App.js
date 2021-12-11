// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  StatusBar,
  Platform
} from 'react-native';
import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks';

export default function App() {
  const { landscape, potrait } = useDeviceOrientation();
  return (
    <SafeAreaView style={styles.container}>
      <View style={{
        width: '100%',
        height: landscape ? '100%' : '30%',
        backgroundColor: "dodgerblue"
      }}>

      </View>
    </SafeAreaView >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
