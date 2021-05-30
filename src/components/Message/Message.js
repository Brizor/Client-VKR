import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Message = ({type, username, content}) => {

    const renderName = (name) => {
        return(
          <Text style={styles.time}>
            {name}
          </Text>
        );
      }
    
    let inMessage = type === 'in';
    let itemStyle = inMessage ? styles.itemIn : styles.itemOut;
    return (
        <View style={[styles.item, itemStyle]}>
            {!inMessage && renderName(username)}
            <View style={[styles.balloon]}>
                <Text>{content}</Text>
            </View>
            {inMessage && renderName(username)}
        </View>
    )
}

export default Message;

const styles = StyleSheet.create({

    balloon: {
      maxWidth: 250,
      padding: 15,
      borderRadius: 20,
    },
    time: {
      alignSelf: 'flex-end',
      margin: 15,
      fontSize:12,
      color:"#808080",
    },
    itemIn: {
      alignSelf: 'flex-start'
    },
    itemOut: {
      alignSelf: 'flex-end'
    },
    item: {
      marginVertical: 7,
      flex: 1,
      flexDirection: 'row',
      backgroundColor:"#eeeeee",
      borderRadius:300,
      padding:10,
    },
  }); 