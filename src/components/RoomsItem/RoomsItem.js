import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import socket from '../../Socket'

const RoomsItem = ({name, room_id,choseRoom}) => {
    console.log(choseRoom);
    return(
        <TouchableOpacity onPress={()=>{
            
            choseRoom(room_id, name);
            console.log(room_id);
        }}>
            <View style={styles.roomItem}>
                <Text>{name}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    roomItem: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        borderWidth: 1,
        backgroundColor: 'white',
        borderColor: "#465881",
        borderRadius: 5,
        marginBottom: 10
    }
});

export default RoomsItem;