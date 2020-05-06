import React from 'react';
import {Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import { colors, colortext } from '../../../utils';

const ActionButton = ({title, onPress}) => {
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
        marginTop:10,
        backgroundColor: colors.red,
        marginHorizontal: 35,
        borderRadius : 12,
        alignSelf: 'stretch',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.15,
        shadowRadius: 25,
        elevation: 3,
    },
    text : {
        color:colortext.white, 
        fontSize:16, 
        fontFamily: 'Nunito', 
        fontWeight: 'bold', 
        paddingVertical: 13, 
        paddingHorizontal: 29,
        textTransform:'capitalize',
        textAlign: 'center'
    }
};
export default ActionButton;