import React from 'react';
import {Text, Image, View}  from 'react-native';
import { colors, colortext } from '../../../utils';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    listenOrientationChange as loc,
    removeOrientationListener as rol
  } from 'react-native-responsive-screen';
const BoxKonten = ({title,tipe, isi, kategori, onPress}) => {
    return (
    <TouchableOpacity style={styles.wrapper} activeOpacity={0.7} onPress={onPress}>
          <View style={{marginRight:5}}>
                <Text style={styles.textkategori}>{tipe} - {kategori}</Text>
                <Text style={styles.text}>{title}</Text>
                <Text style={styles.textisi}>{isi.slice(0,100)}..</Text>
            </View>
        </TouchableOpacity>
    
        
    )
}

const styles = {
    wrapper : {
        position: 'relative',
        flexDirection: 'row',
        backgroundColor: colors.white1,
        borderBottomWidth:1,
        borderColor: colors.gray4,
    },
    text : {
        marginHorizontal: 10, 
        color:colortext.black,
        fontSize: 13.5, 
        fontFamily: 'Nunito', 
        fontWeight: '700', 
        textTransform:'capitalize',
        textAlign: 'justify',
    },
    textisi: {
        marginHorizontal: 10,
        color:colortext.black,
        fontSize: 13, 
        fontFamily: 'Nunito', 
        fontWeight: '600', 
        textAlign: 'justify',
        paddingBottom: 5
    },
    textkategori: {
        marginHorizontal: 10,
        marginTop:6,
        color:colortext.black,
        fontSize: 12, 
        fontFamily: 'Nunito', 
        fontWeight: '600', 
        textAlign: 'justify',
    }

}
export default BoxKonten;