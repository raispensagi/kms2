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
import AsyncStorage from '@react-native-community/async-storage';
import { colortext, colors, icons } from '../../utils';
const ArtikelPage = ({id, judul, penulis, img, isi}) => {
    return (
        <View style={styles.wrap}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <View style={{flexDirection:'column'}}>
                    <View style={{flexDirection: 'row'}}>
                    <Text style={styles.judul}>{judul}</Text>
                    <BookmarkButton id={id}/>
                    </View>
                    <Text style={styles.text}>oleh {penulis}</Text>
                </View>
            </View>
            <Text style={styles.isi}>{isi}</Text>
            {/* <Image style={styles.image} source={img}/> */}
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
        flex: 1,
        textTransform:'capitalize',
    },
    text : {
        fontFamily: 'Nunito',
        marginLeft: 1,
        marginTop: 3,
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
        marginTop: 10,
        marginLeft: 1,
        width:wp('85'),
        color: 'black',
    }
}
export default ArtikelPage;