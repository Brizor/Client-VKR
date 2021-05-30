import React,{useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {loadRooms} from '../store/actions/roomAction'
import RoomList from '../components/RoomList';
import socket from '../Socket';

const HomeScreen = props => {

  const dispatch = useDispatch();
  const user_id = useSelector(state => state.user.user_id);
  const userkey = useSelector(state => state.user.userkey);
  const username = useSelector(state => state.user.username);
  

  useEffect(()=>{
    socket.emit("home", {user_id: user_id, userkey: userkey});
    socket.on('home', (data)=>{
      console.log(data);
      dispatch(loadRooms(data));
    });
    return ()=>{
      socket.off('home');
    
    }
  }, [])

  return (
    <View style={styles.container}>
          <RoomList choseRoom={(room_id, room_name)=>{
            socket.emit('join', {username: username, room: room_id, userkey: userkey})
            props.navigation.navigate('Chat',{room_id: room_id, room_name:room_name})
            }}/>
    </View>

  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#003f5c',
  },
  block: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});