import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import React from 'react';
import Routes from './src/router';


export default function App() {
  return (
    <>
     <StatusBar style='light' backgroundColor='#000' translucent={true}/>
     <Routes/>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: 'orange',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
