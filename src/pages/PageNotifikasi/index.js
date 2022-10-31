import React, { useState, useEffect } from 'react';
import { View, Text, Image, ActivityIndicator, SafeAreaView, FlatList } from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    listenOrientationChange as loc,
    removeOrientationListener as rol
  } from 'react-native-responsive-screen';
import AsyncStorage from '@react-native-community/async-storage';
import { NotifikasiPage } from '../../template';
import { colors } from '../../utils';

const PageNotifikasi = ({route}) => {
    const {headline, isi, penulis, date} = route.params || {};
      
    return (
        <SafeAreaView>
                  <NotifikasiPage
                    judul={headline}
                    isi={isi}
                    penulis={penulis}
                    date={date}
                  />
        </SafeAreaView>
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
        textAlign: 'justify' 
    },
    text : {
        fontFamily: 'Nunito',
        fontWeight:'300',
        fontSize: 14,
        textAlign: 'justify',
        marginHorizontal: 10
    }
}
export default PageNotifikasi;