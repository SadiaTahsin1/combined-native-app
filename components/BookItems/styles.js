import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    bookContainer:{
        width:"100%",
        height:"100%"
      },
      titles:{
        width:"100%",
        marginTop:"10%",
        alignItems:"center"
      },
      title:
      {
       
        fontSize:30,
        fontWeight:500,
        color:'blue',
        fontFamily:'sarif',
        
      },
      subtytle:{
       
        fontSize:20,
        fontWeight:600,
        color:'orange'
      },
      image:{
        width:"100%",
        height:"100%",
        resizeMode:"cover",
        position:"absolute"
      },
      buttonContainer:{
        position:"absolute",
        width:"100%",
        bottom:50

    }
})

export default styles