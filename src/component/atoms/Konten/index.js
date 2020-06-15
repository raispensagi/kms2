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
const Konten = ({title,img, onPress}) => {
    return (
    <View style={styles.wrapper}>
        <TouchableOpacity style={styles.wrapper} activeOpacity={0.7} onPress={onPress}>
            <Image source={img} style={styles.image}/>
            <Text style={styles.text}> {title}</Text>
        </TouchableOpacity>
    </View>
        
    )
}

const styles = {
    wrapper : {
        backgroundColor : colors.green4,
        height: hp('12'),
        width: wp('25'),
        borderRadius: 15,
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 4,
    },
    image : {
        height: hp('8.5'),
        marginTop : 3,
        resizeMode: "contain",
        alignSelf: "center",
    },
    text : {
        color:colortext.white, 
        marginTop:-4,
        fontSize: 14, 
        fontFamily: 'Nunito', 
        fontWeight: '600', 
        textTransform:'capitalize',
        textAlign: 'center',
    }

}
export default Konten;