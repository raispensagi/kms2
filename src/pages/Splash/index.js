import React, { useEffect } from 'react';
import {View, Text, Image} from 'react-native';
import { colors } from '../../utils';
import { Logo } from '../../assets';

const Splash = ({navigation}) => {
    useEffect (()=> {
        setTimeout(() => {
                navigation.replace('NavigationBar');
        }, 2000);
    });
    return (
        <View style={{position:'relative'}}>
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
        backgroundColor: colors.white1,
        width: 120,
        height: 120, 
        alignSelf: 'center',
        marginTop: 160,
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