import React, { useEffect, useState } from 'react';
import {View, Text, Image, StatusBar} from 'react-native';
import { colors } from '../../utils';
import { Logo } from '../../assets';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    listenOrientationChange as loc,
    removeOrientationListener as rol
  } from 'react-native-responsive-screen';
import AsyncStorage from '@react-native-community/async-storage';

const Splash = ({navigation}) => {
    useEffect (()=> {
        setTimeout(async() => {
            const token = await AsyncStorage.getItem('userToken')
            if(token){
                navigation.replace('KMS Sawit')
            }else{
                navigation.replace('WelcomePage1')
            }
        }, 2000);
    }, []);
    return (
        <View style={{alignItems: 'center',
        flex: 1,
        justifyContent: 'center'}}>
        <StatusBar barStyle="dark-content" backgroundColor='#fff' />
        <View style={styles.boxlogo}>
            <Image source={Logo} style={styles.logo}/>
        </View>
        <Text style={styles.text}>KMS SAWIT</Text>
    </View>
    )
};
const styles = {
    text : {
        marginTop: 20,
        alignItems: 'center',
        textAlign: 'center',
        fontFamily: 'Nunito',
        fontWeight: 'bold',
        color:colors.red,
        fontSize: 24,
        elevation: 30,
    },
    logo : {
        marginTop: 5,
        resizeMode: "center",
        width: 110,
        height: 110, 
        alignSelf: "center",
    },
    boxlogo : {
        width: 110,
        height: 110, 
        alignSelf: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 20,
        borderRadius: 15
    },
}

export default Splash;