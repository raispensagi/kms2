import React from 'react';
import { View, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { SearchBox, WhiteButton } from '../../component/atoms';

const KategoriArtikel = ({navigation}) => {
    const handleGoTo = screen => {
        navigation.navigate(screen);
    };
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <SearchBox/>
            <WhiteButton title="Pendahuluan terkait Kelapa Sawit" onPress={()=> handleGoTo('Artikel')}/>
        </ScrollView>
    )
};
export default KategoriArtikel;