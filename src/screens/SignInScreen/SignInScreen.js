import React ,{useState}from 'react';
import {View, Text, Image,StyleSheet,ScrollView, icon} from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import Logo from '../../../assets/images/Logo.png';
import {  Button,  TextInput } from 'react-native-paper';
import { Icon } from 'react-native-paper/lib/typescript/components/Avatar/Avatar';
import CheckBox from 'react-native-check-box'


const SignInScreen =()=>{

    const [phonenumber, setPhoneNumber]=useState('');
    const [password, setPassword]=useState('');

    const onSignInPressed=()=>{
        console.warn("Sign in");
    };
    const onSignInFacebook=()=>{
        console.warn("onSignInFacebook");
    };
    const onSignInGoogle=()=>{
        console.warn("onSignInGoogle");
    };
    const [checked, setChecked] = React.useState(false);



    return(
        <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.root}>
            <Image source={Logo}/>
            
            <Text style={styles.text}>Phone Number</Text>
            <CustomInput placeholder="Your Phone Number" value={phonenumber} setValue={setPhoneNumber}/>
            <Text style={styles.text}>Password</Text>
            <CustomInput placeholder="Your Password" value={password} setValue={setPassword} secureTextEntry={true}/>
            
            <CustomButton text={"Login"}onPress={onSignInPressed} bgColor="green"/>
           

            <View style={styles.container}>

                <View  style={styles.contain}>
                <CheckBox
    
                    onClick={()=>{
                    this.setState({
                        // isChecked:!this.state.isChecked
                    })
                    }}
                    //isChecked={this.state.isChecked}
                    //leftText={"CheckBox"}
                />
                                
                    <Text style={{color:"black", fontSize:14}}>Remember</Text> 
                </View>
                
                <Button
                      uppercase={false}
                       onPress={() => console.log('Pressed')}>
                        <Text style={{color:"green", fontSize:12}}>Forgot Password?</Text>
                        </Button> 
            
            </View>
            <View style={styles.containn}>
                <Text style={{color:"black", fontSize:14}}>Don't have an account</Text>
                <Button uppercase={false} onPress={() => console.log('Pressed')}><Text style={{color:"green"}}>Sign Up</Text></Button>
            </View>
          
          <Text style={{color:"black", fontSize:18}}>Or, Login With </Text>
         
          
          <CustomButton text={"Facebook"}onPress={onSignInFacebook} bgColor="blue" />
          
          <CustomButton text={"Google"}onPress={onSignInGoogle} bgColor="red" />
           
        </View>
        </ScrollView>
       
    );
};
const styles= StyleSheet.create({
    root:{
        //flex:3,
        alignItems:'center',
        padding:18,
        flexDirection:'column',
    },
    Logo:{
        width:'100%',
        height:70,
        
        
    },
    text:{
        width:'100%',
        color:'black'
    },


    container:{
        
        width:'100%' ,
        flexDirection:'row',
      //alignContent:"space-between",
        justifyContent:"space-between",
        color:'red',
        //flexWrap:"wrap",
        padding:1,
        //flexWrap:'wrap'

    },
    // textbutton:{
    //     color:"green"
    // },
    contain:{
       
        // width:'100%' ,
        flexDirection:'row',
      //alignContent:"space-between",
       // justifyContent:"space-between",
        //color:'red',
        //flexWrap:"wrap",
        padding:10,
        //alignItems:'center',
        //flexWrap:'wrap'
        

    },
    containn:{

        flexDirection:'row',
        padding:10,
        alignItems:'center',

    },
    
});
export default SignInScreen
