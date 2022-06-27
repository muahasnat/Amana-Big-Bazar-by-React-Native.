import React from "react";
import {View, Text, TextInput,StyleSheet} from 'react-native';
//import {TextInput} from 'react-native-paper'
const CustomInput = ({value, setValue, placeholder,secureTextEntry}) => {
return(
    <View style={styles.container}>
        <TextInput
        value={value}
        onChangeText={setValue}
        placeholder={placeholder} 
        secureTextEntry={secureTextEntry}
       // right={<TextInput.Icon name="eye"/>}
        style={styles.input}/>
    </View>
);
};

const styles = StyleSheet.create({
    container: {
        backgroundColor:'gry',
        width:'100%',

        borderColor:'black',
        borderWidth:1,
        borderRadius:5,
        paddingHorizontal:10,
        marginTop:5,
       
    },
    input:{},
});


export default CustomInput