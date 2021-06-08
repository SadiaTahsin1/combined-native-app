import React from 'react';
import { View, Text, Pressable } from 'react-native';
import styles from './styles';

const Buttons = () => {
    return (
        <View style={styles.container}>
            <Pressable style={styles.button} 
            onPress={()=>{console.log('ni')}}><Text style={styles.text}>Buy</Text></Pressable>
        </View>
    )
}

export default Buttons
