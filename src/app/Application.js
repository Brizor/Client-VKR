import React,{useEffect, useState} from 'react';
import { StyleSheet} from 'react-native';
import AppNavigation from '../navigation/AppNavigation';
import {Provider} from 'react-redux';
import store from '../store';
import '../UserAgent';
import io from 'socket.io-client';


export default function Application() {


  return (
    <Provider store={store}>
      <AppNavigation/>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
