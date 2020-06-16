import React, { useState, useCallback } from 'react';
import { TextInput } from 'react-native-gesture-handler';
import { colortext, colors, icons } from '../../../utils';
import { Icon } from 'react-native-elements';
import CardView from 'react-native-cardview'

const PasswordInput =({placeholder, icon, ...rest}) => {
    const [hide, setHide]= useState(true)
    const [iconEye, setIcon]= useState("visibility-off")
    const [coloreye, setColorEye]= useState(icons.icon)
    const changeIcon = () => {
        iconEye!== 'visibility-off' ? (setIcon('visibility-off'), setHide(true), setColorEye(icons.icon))
        : (setIcon("visibility"), setHide(false), setColorEye(colors.red))
    }
   
    return (
    
        <CardView style={styles.card} cardElevation={2} cardMaxElevation={2} cornerRadius={12}>
            <Icon iconStyle={styles.icon} name={icon} size={20} color={icons.icon}/>
            <TextInput style={styles.input} 
                secureTextEntry={hide}
                placeholder={placeholder} 
                placeholderTextColor={colortext.gray}
                {...rest}
            />
            <Icon onPress= {changeIcon} containerStyle={styles.iconeye} name={iconEye} size={20} color={coloreye}/>
        </CardView>
    
    )
}

const styles = {
    icon : {
        marginVertical: 12,
        marginLeft:12
    },
    iconeye : {
        flexDirection: 'row', justifyContent: 'flex-end', marginRight:20
    },
    card :{
        flexDirection: 'row',
        height: 47, 
        marginHorizontal: 20, 
        marginBottom: 15
    },
    input : {
        backgroundColor:colors.white1,
        paddingVertical: 8,
        paddingRight:10,
        paddingLeft: 20,
        borderRadius: 12,
        fontSize: 14,
        fontWeight: 'normal',
        flex:1
    }
}

export default PasswordInput;