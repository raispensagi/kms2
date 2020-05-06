import React from 'react';
import { View, Image } from 'react-native';
import { colors } from '../../../utils';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    listenOrientationChange as loc,
    removeOrientationListener as rol
  } from 'react-native-responsive-screen';

const ImageCircle = ({img}) => {
    return (
        <View style={styles.wrapper}>
            <Image source={img} style={styles.image}/>
        </View>
    )
};
const styles = {
    image :{
        height: hp('10'),
        resizeMode: "contain",
        justifyContent: 'center',
        alignSelf: "center",
        marginTop: hp('-0.5')
    },
    wrapper: {
        marginHorizontal: 15,
        marginVertical: hp('2'),
        width: wp('16'),
        height: hp('9'),
        borderRadius: hp('65/2'),
        backgroundColor: colors.white2,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 10
    },
}
export default ImageCircle;