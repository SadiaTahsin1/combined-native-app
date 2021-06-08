import React from 'react'
import { View, Text, FlatList } from 'react-native'
import styles from './styles';
import book from './Book'
import BookItems from '../BookItems';
const BookList = (props) => {
    return (
        <View>
           <FlatList 
           data={book}
           renderItem={({item})=><BookItems book={item}></BookItems>}></FlatList>
        </View>
    )
}

export default BookList
