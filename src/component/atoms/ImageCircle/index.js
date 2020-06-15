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
        <View>
            <Image source={img} style={styles.image}/>
        </View>
    )
};
const styles = {
    image :{
        height: 65,
        width: 65,
        marginVertical: 8,
        marginHorizontal: 15,
    },
}
export default ImageCircle;