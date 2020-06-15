import React from 'react';
import {Text, Image, View, ActivityIndicator}  from 'react-native';
import { colors, colortext } from '../../../utils';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    listenOrientationChange as loc,
    removeOrientationListener as rol
  } from 'react-native-responsive-screen';
const BoxKontenRiwayat = ({title, onPressKonten, isi, kategori}) => {
    return (
        <TouchableOpacity style={styles.wrapper} activeOpacity={0.7} onPress={onPressKonten}>
            <View style={{marginHorizontal:10}}>
                <Text style={styles.textkategori}>{kategori}</Text>
                <Text style={styles.text}>{title}</Text>
                <Text style={styles.textisi}>{isi}</Text>
            </View>
        </TouchableOpacity>
    
        
    )
}

const styles = {
    wrapper : {
        position: 'relative',
        marginTop:5,
        marginBottom:5,
        flexDirection: 'row',
        marginHorizontal: 10,
        borderRadius: 10,
        backgroundColor: colors.white1,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.07,
        shadowRadius: 10,
        elevation: 2
    },
    text : {
        color:colortext.black,
        fontSize: 13.5, 
        fontFamily: 'Nunito', 
        fontWeight: '700', 
        textTransform:'capitalize',
        textAlign: 'justify',
    },
    textisi: {
        color:colortext.black,
        fontSize: 13, 
        fontFamily: 'Nunito', 
        fontWeight: '600', 
        textAlign: 'justify',
        width:wp('72'),
        marginBottom: 5
    },
    textkategori: {
        marginTop:6,
        color:colortext.black,
        fontSize: 12, 
        fontFamily: 'Nunito', 
        fontWeight: '600', 
        textAlign: 'justify',
        width:wp('60'),
    }

}
export default BoxKontenRiwayat;