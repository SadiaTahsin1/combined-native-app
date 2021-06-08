import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import Buttons from '../Buttons';
import styles from './styles';

const BookItems = (props) => {

  const {name,author,image}=props;
    return (
        <View style={styles.bookContainer}>
        <ImageBackground 
        source={image} 
        style={styles.image} />

       
        <View style={styles.titles}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subtytle}>By {author} </Text>
        </View>
        <View style={styles.buttonContainer}> <Buttons></Buttons></View>
       
      </View>
    )
}

export default BookItems

