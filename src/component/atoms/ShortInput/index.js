import React from 'react';
import { TextInput } from 'react-native-gesture-handler';
import { colortext, colors, icons } from '../../../utils';
import { Icon } from 'react-native-elements';
import CardView from 'react-native-cardview'

const ShortInput =({placeholder, value, icon, ...rest}) => {
    return (
    
        <CardView style={styles.card} cardElevation={1} cardMaxElevation={1} cornerRadius={9}>
            <TextInput style={styles.input}
                placeholder={placeholder} 
                placeholderTextColor={colortext.gray}
                {...rest}
                defaultValue={value}
            />
        </CardView>
    
    )
}

const styles = {
    card :{
        height: 43, 
        marginHorizontal: 14, 
        marginTop: 10,
        opacity:0.6
    },
    input : {
        backgroundColor:colors.gray4,
        paddingVertical: 8,
        paddingHorizontal: 15,
        borderRadius: 9,
        fontSize: 14,
        fontWeight: 'normal',
        flex:1,
    }
}

export default ShortInput;