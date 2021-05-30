import React from 'react';
import {View, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import RoomsItem from '../RoomsItem';

const RoomList = ({choseRoom}) => {
    console.log(choseRoom);

    const rooms = useSelector(state => state.room.rooms);
    return (
        <View style={styles.container}>
            {
                rooms.map(room => {
                    return <RoomsItem choseRoom={choseRoom} key={room.id} name={room.name} room_id={room.id}/>
                })
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop:30,
        marginHorizontal: 15
    }
});

export default RoomList;