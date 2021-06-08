import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import BookItems from './components/BookItems';

export default function App() {
  return (
    <View style={styles.container}>
     <BookItems 
     name={"Programming with C"}
     author={"XXXYZ"}  
     image={require('./assets/images/Book_Cover_Mockup.jpg')}></BookItems>
      
      <StatusBar style="auto" />
    </View>
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
