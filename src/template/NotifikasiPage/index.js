import React, { useState, useEffect } from 'react';
import { View, Text, Image, ActivityIndicator } from 'react-native';
import { BookmarkButton } from '../../component/atoms';
import { Kelapa } from '../../assets';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    listenOrientationChange as loc,
    removeOrientationListener as rol
  } from 'react-native-responsive-screen';
const NotifikasiPage = ({judul, isi}) => {
    return (
        <View style={{flex:1}}>
            <Text style={styles.judul}>{judul}</Text>
            <Text style={styles.isi}>{isi}</Text>
        </View>
    )
}
const styles = {
    image : {
        height:hp('30'),
        width:wp('94'),
        margin: 10,
        justifyContent: 'center'
    },
    judul : {
        marginLeft: 10, 
        marginTop: 10,
        fontFamily: 'Nunito',
        fontWeight:'700',
        fontSize: 16,
        textAlign: 'justify' ,
        width:wp('85'),
    },
    text : {
        fontFamily: 'Nunito',
        fontWeight:'300',
        fontSize: 14,
        textAlign: 'justify',
        marginHorizontal: 10,
        width:wp('85'),
    },
    isi : {
        fontFamily: 'Nunito',
        fontWeight:'300',
        fontSize: 14,
        textAlign: 'justify',
        marginHorizontal: 10,
        width:wp('95'),
    }
}
export default NotifikasiPage;