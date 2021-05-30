import React ,{useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {loadUser} from '../store/actions/userAction';
import socket from '../Socket';
import AuthForm from '../components/AuthForm'
import '../UserAgent';


const LoginScreen = props => {

  const dispatch = useDispatch();

  useEffect(()=>{
    socket.on("authorization", (data)=>{
      dispatch(loadUser(data.user_id, data.username, data.userkey))
      console.log(data);
      props.navigation.navigate('Home')
    })

    return () => socket.off("authorization")

  }, [])

  
  return (
    <AuthForm/>
  );
}


export default LoginScreen;
