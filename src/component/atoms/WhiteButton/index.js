import React from 'react';
import {Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import { colors, colortext } from '../../../utils';

const WhiteButton = ({title, onPress}) => {
    return (
        <View > 
            <TouchableOpacity activeOpacity={0.8} onPress={onPress}
                style={styles.button}>
                <Text style={styles.text}> {title} </Text>
            </TouchableOpacity>
        </View>
    )
};


const styles = {
    button : {
        marginHorizontal:13,
        marginBottom:10,
        backgroundColor: colors.white1,
        borderRadius : 8,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.02,
        shadowRadius: 10,
        elevation: 2
    },
    text : {
        color:colortext.black, 
        fontSize:12, 
        fontFamily: 'Nunito', 
        fontWeight: 'normal', 
        paddingVertical: 13, 
        paddingHorizontal: 15,
        textTransform:'capitalize',
        textAlign: 'justify',
    }
};
export default WhiteButton;