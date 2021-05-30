import React,{useState, useEffect,useRef} from 'react';
import { StyleSheet, Text, View,Image,KeyboardAvoidingView ,TouchableOpacity,ScrollView  ,Platform} from 'react-native';
import socket from '../Socket';
import ChatInput from '../components/ChatInput';
import Message from '../components/Message';
import {useSelector} from 'react-redux';
import { AntDesign } from '@expo/vector-icons'; 

  
  const ChatScreen = ({navigation}) => {

    const userkey = useSelector(state => state.user.userkey);
    const username = useSelector(state => state.user.username);
    const user_id = useSelector(state => state.user.user_id);
    const scrollViewRef = useRef();
    
    const room_id = navigation.getParam('room_id')
    
    const [messages, setMessages] = useState([]);



  useEffect(()=>{
    socket.on("join",(mess) => {

      setMessages(mess);
      
      
      socket.on('handle_msg', (data) => {
        console.log("message" + messages)
  
      /*  let mess = [...messages,data]
        mess.push(data)*/
        setMessages(messages => [...messages, data]);
      })   
    })

    
    return ()=>{
      console.log(room_id)
      socket.emit("leave", {room_id: room_id})
      socket.off('handle_msg');
      socket.off('join');
    }
  },[])

  return (
    
    <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.container} keyboardVerticalOffset={60}>
      <ScrollView styles={styles.list}
        ref={scrollViewRef}
        
      >
        {console.log(messages)}
        {
        
          messages.map((item, index) => {
            let type;
            if(user_id != item.user_id){
         
              type = 'in';
            }
            else{
              type = 'out';
            }
            return <Message key = {index} type = {type} content={item.content} username={item.username}></Message>
      })}
      </ScrollView>
     
          <TouchableOpacity onPress={() => scrollViewRef.current.scrollToEnd()} style={styles.button}>

            <AntDesign name="downcircleo" size={50} color="orange" style={styles.imageStl}/>
          
          </TouchableOpacity>
        
      <ChatInput room_id = {room_id}/>


      </KeyboardAvoidingView>
  );
}
export default ChatScreen;

ChatScreen.navigationOptions = ({navigation}) => {
  const room_name = navigation.getParam('room_name')
  return{
    headerTitle: room_name
  }
}


const styles = StyleSheet.create({
  container:{
    flex:1,
    position: 'relative',
    backgroundColor: '#003f5c'
  }, 
  button: {
    width:60,
    height:60,
    position: 'absolute',
    justifyContent: 'center',

    bottom: 80,
    right: 20,
  },
  imageStl:{
    width:50,
    height:50,
    alignSelf:'center',
  },
  list:{
    paddingHorizontal: 17,
  }
}); 