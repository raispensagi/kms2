import React, { useState } from 'react';
import { View , Text, TouchableOpacity, Alert, Modal} from 'react-native';
import { colors } from '../../../utils';
import { ImageCircle } from '../../atoms';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    listenOrientationChange as loc,
    removeOrientationListener as rol
  } from 'react-native-responsive-screen';
import { PakarMale } from '../../../assets';
import AsyncStorage from '@react-native-community/async-storage';
const BoxNotifikasi = ({name, isi, onPress, id}) => {
  const handlerLongClick = () => {
    //handler for Long Click
    const remove = async () => {
      const token = await AsyncStorage.getItem('userToken')
      const userToken = JSON.parse(token)          
      fetch(`http://117.53.47.76/kms_backend/public/api/notifikasi/delete/${id}`,
      {
        method:"DELETE",
        headers: new Headers ( {
            Authorization : 'Bearer ' + userToken,
            Accept: 'application/json',
            'Content-Type': 'application/json'
        }),
        })
        .then((response) => response.json())
        .catch((error) => {
            console.error(error);
        });
  }
    Alert.alert(
          "Hapus notifikasi?",
          " ",
        [
          { text: "Batal", onPress: () => console.log("Batal Hapus Notifikasi") },
          { text: "Hapus", onPress: () => remove() },
        ],
        { cancelable: true },
          )
        };
    return (
        <TouchableOpacity onLongPress={
            handlerLongClick
          } style={styles.wrapper} activeOpacity={0.6}
          onPress={onPress}>
            <ImageCircle img={PakarMale} />
            <View style={{flexDirection:'column'}}>
                <View style={{flexDirection:'row'}}>
                    <Text style={styles.text}>{name}</Text>
                </View>
                <Text style={styles.textisi}>{isi}</Text>
            </View>
        </TouchableOpacity>
    )
};
const styles = {
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
      },
    modalView: {
        margin:20,
        backgroundColor: "white",
        borderRadius: 10,
        paddingHorizontal: 70,
        paddingVertical:20,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
      },
      openButton: {
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 50,
        elevation: 2
      },
      textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
      },
      modalText: {
        marginBottom: 15,
        textAlign: "center"
      }
    ,button: {
        flex: 1, 
        flexDirection:'row',
        justifyContent:'space-between',
        marginHorizontal: 14,
    },
    text :{
    //    / color: colortext.white,
        fontFamily: 'Nunito',
        fontWeight: '700',
        fontSize: 13,
        marginTop: 10,
        width:wp('70')
    },
    textisi :{
        //    / color: colortext.white,
            fontFamily: 'Nunito',
            fontWeight: 'normal',
            fontSize: 13,
            textAlign: 'justify',
            width:wp('74'),
            marginBottom:5
        },
    image :{
        height: 45,
        resizeMode: "contain",
        justifyContent: 'center',
        alignSelf: "center",
        margin:8
    },
    wrapper: {
        position: 'relative',
        flexDirection: 'row',
        borderBottomWidth:1,
        borderColor: colors.gray3,
        backgroundColor: colors.white1,
    },
}
export default BoxNotifikasi;