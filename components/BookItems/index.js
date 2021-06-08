import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import Buttons from '../Buttons';
import styles from './styles';

const BookItems = () => {
    return (
        <View style={styles.bookContainer}>
        <ImageBackground 
        source={require('../../assets/images/PBR1EP0.jpg')} 
        style={styles.image} />

       
        <View style={styles.titles}>
        <Text style={styles.title}>Programming With C</Text>
        <Text style={styles.subtytle}>By XYZ </Text>
        </View>
        <Buttons></Buttons>
      </View>
    )
}

export default BookItems

