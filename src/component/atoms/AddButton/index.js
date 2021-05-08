import React from 'react';
import {Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import { colors, colortext } from '../../../utils';

const AddButton = ({title1, title2, onPress1, onPress2}) => {
    return (
        <View style={{marginHorizontal:10, marginVertical:10, flexDirection:'row', justifyContent:'space-around'}}> 
            <TouchableOpacity activeOpacity={0.8} onPress={onPress1}
                style={styles.button1}>
                <Text style={styles.text}> {title1} </Text>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.8} onPress={onPress2}
                style={styles.button2}>
                <Text style={styles.text}> {title2} </Text>
            </TouchableOpacity>
        </View>
    )
};


const styles = {
    button1 : {
        backgroundColor: colors.red,
        borderRadius : 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 2,
    },
    button2 : {
        backgroundColor: colors.green4,
        borderRadius : 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 2,
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
export default AddButton;