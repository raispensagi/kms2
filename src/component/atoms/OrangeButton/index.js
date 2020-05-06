import React from 'react';
import {Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import { colors, colortext } from '../../../utils';

const OrangeButton = ({title, onPress}) => {
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
        backgroundColor: colors.orange,
        borderRadius : 10,
        alignSelf: 'flex-start',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 20,
    },
    text : {
        color:colortext.white, 
        fontSize:16, 
        fontFamily: 'Nunito', 
        fontWeight: 'bold', 
        paddingVertical: 10, 
        paddingHorizontal: 29,
        textTransform:'capitalize',
        textAlign: 'center'
    }
};
export default OrangeButton;