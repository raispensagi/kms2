import React from 'react';
import {View, Text, Image} from 'react-native';
import { colors } from '../../utils';
import RedButton from '../../component/atoms/RedButton';
import { Logo } from '../../assets';
import { OrangeButton } from '../../component/atoms';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    listenOrientationChange as loc,
    removeOrientationListener as rol
  } from 'react-native-responsive-screen';

const WelcomePage1 = ({navigation}) => {
    const handleGoTo = screen => {
        navigation.navigate(screen);
    };
    return (
        <View style={styles}>
            <View style={styles.wrapper}>
                    <Image source={Logo} style={styles.img}/>
                    <Text style={styles.textgreen}>Selamat Datang</Text>
                    <Text style={styles.textred}>Aplikasi KMS Kelapa Sawit</Text>
            </View>
            <View style={styles.circle1}/>
            <View style={styles.circle2}/>
            <View style={styles.circle3}/>
            <View style={styles.button}>
                <OrangeButton title="Lewati" onPress={() => handleGoTo('Login')}/>
                <RedButton title="Lanjut" onPress={() => handleGoTo('WelcomePage2')}/>
            </View>
        </View>
    );
};

const styles = {
    flex: 1,
    button : {
        flexDirection:"row", 
        justifyContent:"space-between", 
        bottom:0, 
        marginBottom: 20, 
        marginHorizontal:20, 
    },
    img : {
        height: hp('18'),
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
        fontSize: hp('3.7'),
        alignItems: 'center',
        elevation: 20,
        },
    textred : {
        fontFamily: 'Nunito', 
        fontWeight: '700',
        color:colors.red,
        fontSize: hp('3'),
        alignItems: 'center',
        elevation: 20,
        marginBottom:hp('1')
    },
    circle1 : {
        position: 'absolute',
        width: wp("43"),
        height: hp('24'),
        borderRadius: hp('150/2'),
        backgroundColor: colors.red,
        top: hp('-8'),
        left: wp('-7'),
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
        position: 'absolute',
        width: wp('70'),
        height: hp('40'),
        borderRadius: 250/2,
        backgroundColor: colors.orange,
        top: 150,
        left: wp('79'),
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 10,
    },
    circle3 : {
        width: 185,
        height: 185,
        borderRadius: 185/2,
        backgroundColor: colors.red,
        bottom: -150,
        left: -63,
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