import { SearchBar } from 'react-native-elements';
import React, { Component } from 'react';
import { colors } from '../../../utils';
import { color } from 'react-native-reanimated';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import AsyncStorage from '@react-native-community/async-storage';

const SearchBox = ({onChangeText, value}) => {
    return (
      <SearchBar
        placeholder="Masukan kata yang ingin dicari"
        onChangeText={onChangeText}
        value={value}
        inputStyle={{fontSize:14, fontWeight: 'normal', fontFamily:'Nunito'}}
        containerStyle={{height :50, backgroundColor:colors.white1, borderTopColor:colors.gray4, borderTopColor:colors.white1, borderBottomWidth:0, paddingBottom:10}}
        inputContainerStyle={{height :40, backgroundColor:colors.gray4, borderRadius: 7}}
      />
    );
  }

export default SearchBox;