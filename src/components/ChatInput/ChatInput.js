import React, {useState} from 'react';
import {View, TextInput, TouchableOpacity, StyleSheet,Image,KeyboardAvoidingView} from 'react-native';
import socket from '../../Socket';
import {useSelector} from 'react-redux';

const ChatInput = ({room_id}) => {

    const [message,setMessage] = useState('');
    const username = useSelector(state => state.user.username);
    const user_id = useSelector(state => state.user.user_id);

    return(
      
        <View  style={styles.footer}>

          <View style={styles.inputContainer}>
            <TextInput style={styles.inputs}
                value = {message}
                placeholder="Write a message..."
                underlineColorAndroid='transparent'
                onChangeText={setMessage}/>
          </View>

            <TouchableOpacity style={styles.btnSend} onPress={()=>{
              if(message != null && message != ''){
                console.log(room_id)
                socket.emit('handle_msg',{
                  user_id: user_id,
                  room_id: room_id,
                  username: username, 
                  content: message})
                  setMessage('');
              }
            }}>
              <Image source={{uri:"https://img.icons8.com/small/75/ffffff/filled-sent.png"}} style={styles.iconSend}  />
            </TouchableOpacity>
        </View>
    )
}

export default ChatInput;

const styles = StyleSheet.create({

    footer:{
      flexDirection: 'row',
      height:70,
      backgroundColor: '#00324A',
      paddingHorizontal:10,
      padding:10,
    },
    btnSend:{
      backgroundColor:"#00BFFF",
      width:40,
      height:40,
      borderRadius:360,
      alignItems:'center',
      justifyContent:'center',
    },
    iconSend:{
      width:30,
      height:30,
      alignSelf:'center',
    },
    inputContainer: {
      borderBottomColor: '#F5FCFF',
      backgroundColor: '#FFFFFF',
      borderRadius:30,
      borderBottomWidth: 1,
      height:40,
      flexDirection: 'row',
      alignItems:'center',
      flex:1,
      marginRight:10,
    },
    inputs:{
      height:40,
      marginLeft:16,
      borderBottomColor: '#FFFFFF',
      flex:1,
    }
  }); 