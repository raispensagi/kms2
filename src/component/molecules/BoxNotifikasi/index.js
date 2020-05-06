import React from 'react';
import { View , Text, TouchableOpacity, Alert} from 'react-native';
import { colors } from '../../../utils';
import { ImageCircle } from '../../atoms';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    listenOrientationChange as loc,
    removeOrientationListener as rol
  } from 'react-native-responsive-screen';
const BoxNotifikasi = ({img, name, role, isi}) => {
    const handlerLongClick = () => {
        //handler for Long Click
        Alert.alert(
            "Hapus notifikasi?",
        " ",
      [
        { text: "Hapus", onPress: () => console.log("Hapus Notifikasi") }
      ],
      { cancelable: true },
        )
      };
    return (
        <TouchableOpacity onLongPress={handlerLongClick} style={styles.wrapper} activeOpacity={0.6}>
            <ImageCircle img={img} />
            <View style={{flexDirection:'column'}}>
                <View style={{flexDirection:'row'}}>
                    <Text style={styles.text}>{name} - </Text>
                    <Text style={styles.text}>{role}</Text>
                </View>
                <Text style={styles.textisi}>{isi}</Text>
            </View>
        </TouchableOpacity>
    )
};
const styles = {
    button: {
        flex: 1, 
        flexDirection:'row',
        justifyContent:'space-between',
        marginHorizontal: 14,
    },
    text :{
    //    / color: colortext.white,
        fontFamily: 'Nunito',
        fontWeight: '600',
        fontSize: 13,
        marginTop: 10,
    },
    textisi :{
        //    / color: colortext.white,
            fontFamily: 'Nunito',
            fontWeight: 'normal',
            fontSize: 13,
            textAlign: 'justify',
            width:wp('72'),
            marginBottom:5
        },
    image :{
        height: 45,
        resizeMode: "contain",
        justifyContent: 'center',
        alignSelf: "center",
        margin:8
    },
    wrapper: {
        position: 'relative',
        flexDirection: 'row',
        borderBottomWidth:1,
        borderColor: colors.gray3,
        backgroundColor: colors.white1,
    },
}
export default BoxNotifikasi;