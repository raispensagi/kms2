import React from 'react';
import {View, Text, Image, StatusBar} from 'react-native';
import { colors } from '../../utils';
import RedButton from '../../component/atoms/RedButton';
import { Logo, Red, Orange } from '../../assets';
import { OrangeButton } from '../../component/atoms';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    listenOrientationChange as loc,
    removeOrientationListener as rol
  } from 'react-native-responsive-screen';

const WelcomePage1 = ({navigation}) => {
    const handleGoTo = screen => {
        navigation.replace(screen);
    };
    return (
        <View style={styles}>
        <StatusBar barStyle="dark-content" backgroundColor='#f5f5f5' />
            <View style={styles.wrapper}>
                    <Image source={Logo} style={styles.img}/>
                    <Text style={styles.textgreen}>Selamat Datang</Text>
                    <Text style={styles.textred}>Aplikasi KMS Kelapa Sawit</Text>
            </View>
            <View style={styles.circle1}>
                <Image source={Red} style={{resizeMode: "contain",alignSelf: "center", height:180,}}/>
            </View>
            <View style={styles.circle2}>
                <Image source={Orange} style={{resizeMode: "contain",alignSelf: "center", height:280,}}/>
            </View>
            <View style={styles.circle3}>
                <Image source={Red} style={{resizeMode: "contain",alignSelf: "center", height:230,}}/>
            </View>
            <View style={styles.button}>
                <OrangeButton title="Lewati" onPress={() => handleGoTo('Loginmenu')}/>
                <RedButton title="Lanjut" onPress={() => handleGoTo('WelcomePage2')}/>
            </View>
        </View>
    );
};

const styles = {
    flex: 1,
    button : {
        position:'absolute',
        flexDirection:"row", 
        justifyContent:"space-between", 
        bottom:15,
        marginHorizontal:wp('3'), 
    },
    img : {
        height: 110,
        resizeMode: "contain",
        alignSelf: "center",
        marginBottom : hp('2'),
        marginTop : hp('27'),
    },
    wrapper : {
        alignItems: 'center',
        justifyContent: 'center',
    },
    textgreen : {
        fontFamily: 'Nunito',
        fontWeight: 'bold',
        color:colors.green2,
        fontSize: 23,
        alignItems: 'center',
        elevation: 20,
        },
    textred : {
        fontFamily: 'Nunito', 
        fontWeight: '700',
        color:colors.red,
        fontSize: 20,
        alignItems: 'center',
        elevation: 20,
        marginBottom:hp('1')
    },
    circle1 : {
        position: 'absolute',
        width: 180,
        height: 180,
        borderRadius: 180/2,
        top: hp('-12'),
        left: wp('-15'),
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.2,
        shadowRadius: 10,
        elevation: 10,
    },
    circle2 : {
        position: 'absolute',
        width: 280,
        height: 280,
        borderRadius: 280/2,
        top: hp('30'),
        left: wp('78'),
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 10,
    },
    circle3 : {
        position: 'absolute',
        width: 230,
        height: 230,
        borderRadius: 230/2,
        bottom: hp('-16'),
        left: wp('-30'),
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.2,
        shadowRadius: 5,
    }
}

export default WelcomePage1;