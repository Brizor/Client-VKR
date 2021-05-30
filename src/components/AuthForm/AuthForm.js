import { StatusBar } from 'expo-status-bar';
import React ,{useState, useEffect} from 'react';
import { StyleSheet, Text, View ,Keyboard,ImageBackground, TouchableWithoutFeedback, TextInput, TouchableOpacity } from 'react-native';
import {useDispatch, useSelector} from 'react-redux'
import socket from '../../Socket'



const AuthForm = props => {

  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);


  
  return (
    
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      
    <View style={styles.container}>
    <Text style={styles.logo}>Chat VKR</Text>
    <View style={styles.inputView}>
      <TextInput 
        style={styles.inputText}
        autoCompleteType='username'
        placeholder="Username..." 
        autoCapitalize="none"
        
        placeholderTextColor="#003f5c"

        onChangeText={setUsername} 
        value={username}
      />
    </View>
    <View style={styles.inputView}>
      <TextInput 
          style={styles.inputText}
          placeholder="Password..." 
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={setPassword} 
          value={password}
        />
    </View>
    
    <TouchableOpacity style={styles.loginBtn} onPress={()=> 
      {
        if(username != null && username != '' && username != undefined && password != null && password != '' && password != undefined){
          console.log(username,  password)
          socket.emit("authorization", { username: username, password: password})
        }
          
      }}>
        <Text style={styles.loginText}>LOGIN</Text>
    </TouchableOpacity>
    </View>
  </TouchableWithoutFeedback>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#003f5c',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo:{
    fontWeight:"bold",
    fontSize:50,
    color:"#fb5b5a",
    marginBottom:40
  },
  inputView:{
    width:"80%",
    backgroundColor:"#465881",
    borderRadius:25,
    height:50,
    marginBottom:20,
    justifyContent:"center",
    padding:20
  },
  inputText:{
    height:50,
    color:"white"
  },
  loginBtn:{
    width:"80%",
    backgroundColor:"#fb5b5a",
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:40,
    marginBottom:10
  },
});

export default AuthForm;