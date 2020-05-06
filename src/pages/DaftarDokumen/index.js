import React from 'react';
import { View, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { SearchBox, WhiteButton, BoxKonten } from '../../component/atoms';
import { Kelapa } from '../../assets';

const DaftarDokumen = () => {
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <SearchBox/>
            <BoxKonten kategori="Artikel" title="Artikel" img={Kelapa} isi='Budidaya Kelapa Sawit oleh Antara Darma 13 Mei 2020 Cara tanam kelapa sawit yang benar akan mempengaruhi kualitas tanaman sawit dan mempengaruhi buah yang akan dihasilkan. Mungkin beberapa petani sawit masih ada yang menanam kelapa sawit secara sembarangan dan tidak begitu memperhatikan teknik menanam yang baik dan benar. Sehingga terkadang hal itulah yang menjadi penyebab kenapa pohon kelapa sawit yang sedang ditanam tidak '/>
            <BoxKonten kategori="Artikel" title="Artikel" img={Kelapa} isi='Aku ingin mencintaimu dengan sederahana dengan kat ayang Aku ingin mencintaimu dengan sederahana dengan kat ayang tak sempat disampaikan kayu kepada api yang menjadikannya abu'/>
            <BoxKonten kategori="Artikel" title="Artikel" img={Kelapa} isi='Aku ingin mencintaimu dengan sederahana dengan kat ayang Aku ingin mencintaimu dengan sederahana dengan kat ayang tak sempat disampaikan kayu kepada api yang menjadikannya abu'/>
        </ScrollView>
    )
};
export default DaftarDokumen;