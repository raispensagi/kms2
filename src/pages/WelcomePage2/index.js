import React from 'react';
import {View, Text, Image, StatusBar} from 'react-native';
import { colors } from '../../utils';
import RedButton from '../../component/atoms/RedButton';
import { Welcomepage2, Green, Orange } from '../../assets';
import { OrangeButton } from '../../component/atoms';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    listenOrientationChange as loc,
    removeOrientationListener as rol
  } from 'react-native-responsive-screen';

const WelcomePage2 = ({navigation}) => {
    const handleGoTo = screen => {
        navigation.replace(screen);
    };
    return (
        <View style={styles}>
        <StatusBar barStyle="dark-content" backgroundColor='#f5f5f5' />
            <View style={styles.circle2}/>
            <View style={styles.wrapper}>
                    <Image source={Welcomepage2} style={styles.img}/>
                    <Text style={styles.textgreen}>Berbagi dan mencari informasi terkait kelapa sawit dengan mudah dimana saja</Text>
            </View>
            <View style={styles.circle1}>
                <Image source={Green} style={{resizeMode: "contain",alignSelf: "center", height:150,}}/>
            </View>
            <View style={styles.circle2}>
                <Image source={Orange} style={{resizeMode: "contain",alignSelf: "center", height:230,}}/>
            </View>
            <View style={styles.circle3}>
                <Image source={Green} style={{resizeMode: "contain",alignSelf: "center", height:230,}}/>
            </View>
             <View style={styles.button}>
                <OrangeButton title="Lewati" onPress={() => handleGoTo('Register')}/>
                <RedButton title="Lanjut" onPress={() => handleGoTo('WelcomePage3')}/>
            </View>
        </View>
    );
};

const styles = {
    flex: 1,
    button :{
        position:'absolute',
        flexDirection:"row", 
        bottom:15,
        marginHorizontal:wp('3'), 
        marginTop:215
    },
    img : {
        height: hp('18'),
        resizeMode: "contain",
        alignSelf: "center",
        marginBottom : hp('2'),
        marginTop : hp('27.85'),
    },
    wrapper : {
        alignItems: 'center',
        justifyContent: 'center',
    },
    textgreen : {
        fontFamily: 'Nunito',
        fontWeight: 'bold',
        color:colors.green2,
        fontSize: 17,
        alignItems: 'center',
        textAlign: 'center',
        marginBottom: wp('-1.5'),
        marginHorizontal: wp('5'),
        elevation: 10
    },
    circle1 : {
        position: 'absolute',
        width: 180,
        height: 180,
        borderRadius: wp('150/2'),
        top: -40,
        left: 250,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.2,
        shadowRadius: 5,
    },
    circle2 : {
        position: 'absolute',
        width: wp('55'),
        height: hp('31'),
        borderRadius: wp('250/2'),
        top: hp('33'),
        left: wp('-32'),
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.2,
        shadowRadius: 5,
    },
    circle3 : {
        position: 'absolute',
        width: wp('51'),
        height: hp('29'),
        borderRadius: wp('185/2'),
        bottom: hp('-16'),
        left: wp('78'),
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.2,
        shadowRadius: 5,
    }
}
export default WelcomePage2;