import React ,{useState}from 'react';
import {View, Text, Image,StyleSheet,ScrollView,  icon} from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import Logo from '../../../assets/images/Logo.png';
import {  Button, Checkbox,  TextInput } from 'react-native-paper';
import { Icon } from 'react-native-paper/lib/typescript/components/Avatar/Avatar';
import CheckBox from 'react-native-check-box'

const SignUpScreen =()=>{

    const [username, setUserName]=useState('');
    const [phonenumber, setPhoneNumber]=useState('');
    const [password, setPassword]=useState('');
    const [confirmpassword, setConfirnPassword]=useState('');

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
    const [isSelected, setSelection] = useState(false);


    return(
        <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.root}>
            <Image source={Logo}/>
            
            <Text style={styles.text}>Your Name</Text>
            <CustomInput placeholder="your name" value={username} setValue={setUserName}/>
            <Text style={styles.textsmall}>place enter your name</Text>
            
            <Text style={styles.text}>Phone Number</Text>
            <CustomInput placeholder="Your Phone Number" value={phonenumber} setValue={setPhoneNumber}/>
            <Text style={styles.textsmall}>phone number should be 11 digit number</Text>
            
            <Text style={styles.text}>Password</Text>
            <CustomInput placeholder="Password" value={password} setValue={setPassword} secureTextEntry={true}/>
            <Text style={styles.textsmall}>place enter your password</Text>

            <Text style={styles.text}>Confirm Password</Text>
            <CustomInput placeholder="Password" value={confirmpassword} setValue={setConfirnPassword} secureTextEntry={true}/>
            
            <CustomButton text={"Sign Up"}onPress={onSignInPressed} bgColor="green"/>
           

            <View style={styles.container}>

                <CheckBox
                    
                    onClick={()=>{
                    this.setState({
                        // isChecked:!this.state.isChecked
                    })
                    }}
                    //isChecked={this.state.isChecked}
                    //leftText={"CheckBox"}
                />
                    <Text  style={{color:"black", fontSize:10,paddingTop:8}}>By signing up,you agree to our </Text> 
                
                     <Button
                      uppercase={false}
                       onPress={() => console.log('Pressed')}>
                        <Text style={{color:"green", fontSize:10}}>Terms&Conditions | Privacy Policy</Text>
                        </Button>
                    {/* <Text  style={{color:"green", fontSize:12,paddingTop:7}}>|</Text>
                    <Button
                      uppercase={false}
                       onPress={() => console.log('Pressed')}>
                        <Text style={{color:"green", fontSize:12}}>Privacy Policy</Text>
                        </Button>  */}
 
            
            </View>
            <View style={styles.containn}>
                <Text style={styles.textt}>Already have an account?</Text>
                <Button uppercase={false} onPress={() => console.log('Pressed')}><Text style={{color:"green",fontSize:14}}>Sign In</Text></Button>
            </View>
          
         
          
           
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
        paddingTop:10,
        width:'100%',
        color:'black'
    },
    textt:{
       fontSize:14,
        color:'black',
        
    },
    textsmall:{
        width:'100%',
        color:'red',
        fontSize:12
       
    },


    container:{
        
       // width:'100%' ,
        flexDirection:'row',
      //alignContent:'flex-start',
        justifyContent:'flex-start',
        //flexWrap:"wrap",
        //padding:1,
        //flexWrap:'wrap'

    },
    // textbutton:{
    //     color:"green"
    // },
    contain:{
       
        // width:'100%' ,
        flexDirection:'row',
      alignContent:"space-between",
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
export default SignUpScreen
