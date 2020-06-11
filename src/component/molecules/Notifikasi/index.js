import React, { useState, useEffect, useCallback } from 'react';
import { View , Text, SafeAreaView, StatusBar, RefreshControl} from 'react-native';
import { colors, colortext } from '../../../utils';
import { ImageCircle } from '../../atoms';
import { Bell } from '../../../assets';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    listenOrientationChange as loc,
    removeOrientationListener as rol
  } from 'react-native-responsive-screen';
import AsyncStorage from '@react-native-community/async-storage';
import { FlatList } from 'react-native-gesture-handler';

const Notifikasi = ({notif, onPress, navigation}) => {
    const [notifikasi, setNotifikasi]= useState();
    const [jumlah, setJumlah]= useState();
    const getNotifikasi = async () => {
        const token = await AsyncStorage.getItem('userToken')
        const userToken = JSON.parse(token)          
        fetch(`http://117.53.47.76/kms_backend/public/api/notifikasi/all`,
        {
            method:"GET",
            headers: new Headers ( {
                Authorization : 'Bearer ' + userToken
            })
        })
        .then((response) => response.json())
        .then((responseJson) => {
            setNotifikasi(responseJson.notifikasi.slice(0,3))
            setJumlah(Object.keys(responseJson.notifikasi).length) ;
        }
        )
        .catch((error) => {
            console.error(error);
        });
    }
    useEffect(()=> {
        getNotifikasi()
    }, [])
    return (
    <SafeAreaView style={styles.wrapper}>
        <View style={{flexDirection:'row'}}>
            <ImageCircle img={Bell}/>
            <View style={{flexDirection:'column'}}>
                <FlatList
                    data={notifikasi}
                    ListHeaderComponent={
                        <View style={{flexDirection:"column",}}>
                            <View style={styles.button}>
                                <View>
                                    <Text style={styles.text}>{jumlah} Notifikasi baru</Text>
                                </View>
                                <View>
                                    <Text style={styles.lihat} onPress={onPress}>Lihat</Text>
                                </View>
                            </View>
                        </View>
                    }
                    renderItem={({item}) => 
                        <Text style={styles.notif}>{item.headline.slice(0, 40)}</Text>
                                    }
                    keyExtractor={(item) => item.id.toString()}
                />
            </View>
        </View>
        </SafeAreaView>
    )
};
const styles = {
    notif: {
        color: colortext.white, 
        fontSize: hp('2'),
        width: wp('70')
    },
    button: {
        flex: 1, 
        flexDirection:'row',
        justifyContent:'space-between',
    },
    text :{
        color: colortext.white,
        fontFamily: 'Nunito',
        fontWeight: '700',
        fontSize: hp('2.2'),
        marginTop: 10,
    },
    lihat :{
        marginRight:14,
        color: colortext.white,
        fontFamily: 'Nunito',
        fontWeight: '700',
        fontSize: hp('2.2'),
        marginTop: 10,
    },
    wrapper: {
        height: hp('15'),
        flexDirection: 'row',
        marginHorizontal: 10,
        marginVertical:15,
        borderRadius: 10,
        backgroundColor: colors.orange,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.07,
        shadowRadius: 5,
        elevation: 4
    },
}
export default Notifikasi;