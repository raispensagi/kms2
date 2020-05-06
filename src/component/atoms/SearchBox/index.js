import React from 'react';
import { TextInput } from 'react-native-gesture-handler';
import { colortext, colors, icons } from '../../../utils';
import { Icon } from 'react-native-elements';
import CardView from 'react-native-cardview';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    listenOrientationChange as loc,
    removeOrientationListener as rol
  } from 'react-native-responsive-screen';

const SearchBox =({placeholder, icon, ...rest}) => {
    
    return (
    
        <CardView style={styles.card} cardElevation={2} cardMaxElevation={2} cornerRadius={8}>
            <Icon iconStyle={styles.icon} name="search" size={20} color={colors.gray2}/>
            <TextInput style={styles.input} 
                placeholder="Cari                                                          " 
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
        height: 40, 
        marginHorizontal: 13, 
        marginVertical: 10,
        flex:1,
        opacity: .4,
        backgroundColor:colors.gray4,
    },
    input : {
        backgroundColor:colors.gray4,
        paddingVertical: 8,
        paddingHorizontal: 20,
        borderRadius: 7,
        fontSize: 14,
        fontWeight: 'normal',
    }
}

export default SearchBox;