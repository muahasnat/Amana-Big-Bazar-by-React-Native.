import React from "react";
import {View,Text,StyleSheet,Pressable} from 'react-native';
const CustomButton = ({onPress,text, bgColor}) =>{
return (
    <Pressable
     onPress={onPress} 
     style={[
        styles.container,
         bgColor ? {backgroundColor:bgColor}:{}
         ]} >
        <Text style={styles.text}>{text}</Text>
    </Pressable>
);
};

const styles=StyleSheet.create({
    container :{
        //backgroundColor:'green',
        width:'100%',
        padding:10,
        marginVertical:7,
        borderRadius:5,
        alignItems:"center"

    },
    text:{
        fontWeight:"bold",
        color:'white'
    }
});


export default CustomButton