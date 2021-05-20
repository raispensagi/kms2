import React, { useState, useEffect } from 'react';
import { View, Image, Text, ActivityIndicator} from 'react-native';
import DownloadLButton from '../../component/atoms/DownloadButton';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    listenOrientationChange as loc,
    removeOrientationListener as rol
  } from 'react-native-responsive-screen';
import { Kelapa } from '../../assets';
import { ScrollView } from 'react-native-gesture-handler';
import { colortext, colors, icons } from '../../utils';
import AsyncStorage from '@react-native-community/async-storage';
const DokumenPage = ({judul, penulis, penerbit, tahun, bahasa, halaman, deskripsi, file}) => {
    return (
          <View> 
          <View style={styles.wrapper}>
            <View style={{flexDirection:'row'}}>
            <View style={{flexDirection: 'column'}}>
                <Image source={Kelapa} style={styles.image}/>
            </View>
                <View style={{flexDirection:'column', marginVertical:10}}>
                    <View style={{flexDirection:'row'}}>
                        <Text style={{fontWeight:'500',}}>Judul      : </Text>
                        <Text style={styles.isi}>{judul}</Text>
                    </View>
                    <View style={{flexDirection:'row'}}>
                        <Text style={{fontWeight:'500',}}>Penulis  : </Text>
                        <Text style={styles.isi}>{penulis}</Text>
                    </View>
                    <View style={{flexDirection:'row'}}>
                        <Text style={{fontWeight:'500',}}>Tahun     : </Text>
                        <Text style={styles.isi}>{tahun}</Text>
                    </View>
                    <View style={{flexDirection:'row'}}>
                        <Text style={{fontWeight:'500',}}>Penerbit : </Text>
                        <Text style={styles.isi}>{penerbit}</Text>
                    </View>                  
                    <View style={{flexDirection:'row'}}>
                        <Text style={{fontWeight:'500',}}>Bahasa   : </Text>
                        <Text style={styles.isi}>{bahasa}</Text>
                    </View> 
                    <View style={{flexDirection:'row'}}>
                        <Text style={{fontWeight:'500',}}>Halaman : </Text>
                        <Text style={styles.isi}>{halaman}</Text>
                    </View>
                </View>
            </View>
          </View>
            <DownloadLButton url={file.toString()}/>
            <View style={styles.wrap}>
            <Text style={styles.Ringkasan}>Ringkasan </Text>
            <Text style={styles.ringkasanisi}>{deskripsi}</Text>
            </View>
          </View>
      )
}
const styles = {
    wrapper :{
        marginTop:10,
        marginBottom:5,
        flexDirection: 'row',
        marginHorizontal: 12,
        borderRadius: 10,
        backgroundColor: colors.white1,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.07,
        shadowRadius: 10,
        elevation: 5
    },
    wrap: {
        backgroundColor:colors.gray4,
        paddingHorizontal: 15,
        paddingVertical: 10, 
        borderRadius: 9,
        fontSize: 14,
        fontWeight: 'normal',
        marginTop: 15,
        marginHorizontal: 12,
    },
    image : {
        height:hp('24'),
        width:wp('29'),
        margin: 15,
    },
    isi : {
        fontFamily: 'Nunito',
        fontWeight:'300',
        fontSize: 14,
        width:wp('37'),
        textAlign: 'justify'
    },
    ringkasanisi : {
        fontFamily: 'Nunito',
        fontWeight:'300',
        marginTop: 1,
        marginLeft : 1,
        fontSize: 14,
        textAlign: 'justify',
        marginHorizontal: 10,
        marginBottom:10
    },
    Ringkasan : {
        marginTop: 1,
        fontFamily: 'Nunito',
        fontWeight:'500',
        fontSize: 16,
        textAlign: 'justify',
        marginLeft : 1,
        fontWeight :'bold'
    }
}
export default DokumenPage;