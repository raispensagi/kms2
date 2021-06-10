import React from 'react';
import {View, Text, Image, StatusBar} from 'react-native';
import { colors } from '../../utils';
import RedButton from '../../component/atoms/RedButton';
import { Welcomepage3, Red, Orange } from '../../assets';
import { OrangeButton } from '../../component/atoms';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    listenOrientationChange as loc,
    removeOrientationListener as rol
  } from 'react-native-responsive-screen';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { color } from 'react-native-reanimated';

const WelcomePage3 = ({navigation}) => {
    const handleGoTo = screen => {
        navigation.replace(screen);
    };
    return (
        <View style={styles}>
        <StatusBar barStyle="dark-content" backgroundColor='#f5f5f5' />
            <View style={styles.wrapper}>
                    <Image source={Welcomepage3} style={styles.img}/>
                    <Text style={styles.textgreen}>Mendapatkan informasi terbaru dan terupdate langsung dari pakar sawit</Text>
            </View>
            <View style={styles.circle1}>
                <Image source={Red} style={{resizeMode: "contain",alignSelf: "center", height:180,}}/>
            </View>
            <View style={styles.circle2}>
                <Image source={Orange} style={{resizeMode: "contain",alignSelf: "center", height:250,}}/>
            </View>
            <View style={styles.circle3}>
                <Image source={Red} style={{resizeMode: "contain",alignSelf: "center", height:190,}}/>
            </View>
            <View style={styles.button}>
                <RedButton title="Lanjut" onPress={() => handleGoTo('Loginmenu')}/>
            </View>
        </View>
    );
};

const styles = {
    flex: 1,
    button :{ 
        position:"absolute",
        bottom:15,
        left:175
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
        marginHorizontal: wp('5'),
        elevation:5
    },
    circle1 : {
        position: 'absolute',
        width: 180,
        height: 180,
        borderRadius: wp('150/2'),
        top: hp('-10'),
        left: wp('-16'),
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
        width: 250,
        height: 250,
        top: hp('32'),
        left: wp('83'),
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
        bottom: hp('-17'),
        left: wp('-17'),
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.2,
        shadowRadius: 5,
    }
}

export default WelcomePage3;