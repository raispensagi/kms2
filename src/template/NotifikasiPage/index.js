import React, { useState, useEffect } from 'react';
import { View, Text, Image, ActivityIndicator } from 'react-native';
import { BookmarkButton } from '../../component/atoms';
import { Kelapa } from '../../assets';
import { colortext, colors, icons } from '../../utils';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    listenOrientationChange as loc,
    removeOrientationListener as rol
  } from 'react-native-responsive-screen';
const NotifikasiPage = ({judul, isi, penulis, date}) => {
    return (
        <View style={styles.wrap}>
            <Text style={styles.judul}>{judul}</Text>
            <Text style={styles.isi}>{`Oleh ${penulis}`}</Text>
            <Text style={styles.isi}>{date}</Text>
            <Text style={styles.isi}>{isi}</Text>
            
        </View>
    )
}
const styles = {
    wrap: {
        backgroundColor:colors.gray4,
        paddingHorizontal: 15,
        paddingVertical: 10, 
        borderRadius: 9,
        fontSize: 14,
        fontWeight: 'normal',
        marginTop: 15,
        marginHorizontal: 12,
        flexWrap: 'wrap',
    },
    image : {
        height:hp('30'),
        width:wp('94'),
        margin: 10,
        justifyContent: 'center'
    },
    judul : {
        marginLeft: 1, 
        marginTop: 1,
        fontFamily: 'Nunito',
        fontWeight:'700',
        fontSize: 16,
        textAlign: 'justify' ,
        width:wp('85'),
        textTransform:'capitalize',
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
        width:wp('85'),
        marginLeft: 1, 
        marginTop: 6,
    }
}
export default NotifikasiPage;