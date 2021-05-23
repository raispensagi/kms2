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
const BoxKontenVideoo = ({title,img, isi, kategori, onPress}) => {
    return (
    
    <TouchableOpacity style={styles.wrapper} activeOpacity={0.7} onPress={onPress}>
             
            <View>
                <Text style={styles.textkategori}>{kategori}</Text>
                <Text style={styles.text}>{title}</Text>
                <Text style={styles.textisi}>Penulis : {isi}</Text>
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
        paddingBottom: 5,
        textTransform:'capitalize',
    },
    textkategori: {
        marginHorizontal: 10,
        marginTop:6,
        color:colortext.black,
        fontSize: 12, 
        fontFamily: 'Nunito', 
        fontWeight: '600', 
        textAlign: 'justify',
        width:wp('60'),
    }

}
export default BoxKontenVideoo;