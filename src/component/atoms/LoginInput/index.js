import React from 'react';
import { TextInput } from 'react-native-gesture-handler';
import { colortext, colors, icons } from '../../../utils';
import { Icon } from 'react-native-elements';
import CardView from 'react-native-cardview'

const LoginInput =({placeholder, icon, ...rest}) => {
    return (
    
        <CardView style={styles.card} cardElevation={2} cardMaxElevation={2} cornerRadius={12}>
            <Icon iconStyle={styles.icon} name={icon} size={20} color={icons.icon}/>
            <TextInput style={styles.input} 
                placeholder={placeholder} 
                placeholderTextColor={colortext.black}
                {...rest}
            />
        </CardView>
    
    )
}

const styles = {
    icon : {
        marginVertical: 12,
        marginLeft:12
    },
    card :{
        flexDirection: 'row',
        height: 47, 
        marginHorizontal: 35, 
        marginBottom: 25
    },
    input : {
        backgroundColor:colors.white1,
        paddingVertical: 8,
        paddingHorizontal: 20,
        borderRadius: 12,
        fontSize: 14,
        fontWeight: 'normal'
    }
}

export default LoginInput;