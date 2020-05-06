import React from 'react';
import {Text, Image, View}  from 'react-native';
import { colors, colortext } from '../../../utils';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    listenOrientationChange as loc,
    removeOrientationListener as rol
  } from 'react-native-responsive-screen';
import { BoxKonten, BoxKontenRiwayat } from '../../atoms';
import { Kelapa, Chart, Petani } from '../../../assets';

const BoxRiwayat = ({title,img, onPress}) => {
    return (
        <View>
            <View style={{flexDirection:'row', justifyContent:'space-between'}}>
            <Text style={styles.text}>Riwayat</Text>
            <Text style={styles.textlain} onPress={onPress}>Lainnya</Text>
        </View>
        <View style={styles.wrapper}>
            <BoxKontenRiwayat kategori="Artikel" title="Artikel" img={Kelapa} isi='Aku ingin mencintaimu dengan sederahana dengan kat ayang Aku ingin mencintaimu dengan sederahana dengan kat ayang tak sempat disampaikan kayu kepada api yang menjadikannya abu'/>
            <BoxKontenRiwayat kategori="Artikel" title="Artikel" img={Kelapa} isi='Aku ingin mencintaimu dengan sederahana dengan kat ayang Aku ingin mencintaimu dengan sederahana dengan kat ayang tak sempat disampaikan kayu kepada api yang menjadikannya abu'/>
            <BoxKontenRiwayat kategori="Artikel" title="Artikel" img={Kelapa} isi='Aku ingin mencintaimu dengan sederahana dengan kat ayang Aku ingin mencintaimu dengan sederahana dengan kat ayang tak sempat disampaikan kayu kepada api yang menjadikannya abu'/>
        </View>
        </View>
    
        
    )
}

const styles = {
    wrapper: {
        position: 'relative',
        marginHorizontal: 14,
        marginBottom:10,
        paddingBottom:15,
        borderRadius: 20,
        backgroundColor: colors.white2,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.02,
        shadowRadius: 10,
        elevation: 2
    },
    text:{
        fontFamily: 'Nunito',
        fontWeight: 'bold',
        fontSize: 15,
        lineHeight: 20,
        color: colors.red,
        marginLeft: 24,
        marginBottom:8
    },
    textlain:{
        fontFamily: 'Nunito',
        fontWeight: '600',
        fontSize: 15,
        lineHeight: 20,
        color: colors.red,
        marginRight: 24,
        marginBottom:8,
    }
    
}
export default BoxRiwayat;