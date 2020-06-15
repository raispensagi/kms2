import React from 'react';
import { View, Image, Text } from 'react-native';
import { colors } from '../../utils';
import { Logo } from '../../assets';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    listenOrientationChange as loc,
    removeOrientationListener as rol
  } from 'react-native-responsive-screen';


const LoginTemplate = () => {
    return (
    <View style={{position:'relative', }}>
        <View style={styles.circle2}/>
        <View style={styles.circle1}/>
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
        marginBottom: 30,
        alignItems: 'center',
        textAlign: 'center',
        fontFamily: 'Nunito',
        fontWeight: 'bold',
        color:colors.red,
        fontSize: hp('3.4'),
        elevation: 30,
    },
    logo : {
        marginTop: 2,
        resizeMode: "center",
        width: wp('25'),
        height: hp('13'), 
        alignSelf: "center",
    },
    boxlogo : {
        backgroundColor: colors.white1,
        width: 100,
        height: 100, 
        alignSelf: 'center',
        marginTop: hp('15'),
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
    circle1 : {
        position:'absolute',
        width: wp("57"),
        height: hp('31'),
        borderRadius: hp('233/2'),
        backgroundColor: colors.red,
        top: hp('-19'),
        left: wp('-13'),
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 20,
    },
    circle2 : {
        position:'absolute',
        width: wp('81'),
        height: hp('49'),
        borderRadius: wp('367/2'),
        backgroundColor: colors.orange,
        top: hp('-24'),
        left: wp('35'),
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 10,
    },
}
export default LoginTemplate;