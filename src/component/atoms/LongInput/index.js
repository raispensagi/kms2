import React from 'react';
import { TextInput } from 'react-native-gesture-handler';
import { colortext, colors, icons } from '../../../utils';
import { Icon } from 'react-native-elements';
import CardView from 'react-native-cardview'

const LongInput =({placeholder, icon, ...rest}) => {
    return (
    
        <CardView style={styles.card} cardElevation={1} cardMaxElevation={1} cornerRadius={9}>
            <TextInput style={styles.input} 
                multiline={true}
                placeholder={placeholder} 
                placeholderTextColor={colortext.gray}
                {...rest}
            />
        </CardView>
    
    )
}

const styles = {
    card :{
        height: 170, 
        marginHorizontal: 14, 
        marginTop: 10,
        opacity:0.6
    },
    input : {
        textAlignVertical: 'top',
        backgroundColor:colors.gray4,
        paddingHorizontal: 15,
        borderRadius: 9,
        fontSize: 14,
        fontWeight: 'normal',
        flex:1,
    }
}

export default LongInput;