import React from 'react';
import { colors } from '../../../utils';
import { Konten } from '../../atoms';
import { Tambahartikel, Tambahvideo, Tambahebook, Tambahpengumuman } from '../../../assets';
import {View, Text} from 'react-native';
import {Icon} from 'react-native-elements';

const KontenFeature2 = ({onPressArtikel, onPressVideo, onPressDokumen,onPressPengumuman}) => {
    return (
        <View>
        <Text style={styles.text}>Buat Konten KMS</Text>
            <View style={styles.wrapper}>
                    <Konten title="Tambah Artikel" img={Tambahartikel} onPress={onPressArtikel}/>
                    <Konten title="Tambah   Video" img={Tambahvideo} onPress={onPressVideo}/>
                    <Konten title="Tambah E-Dokumen" img={Tambahebook} onPress={onPressDokumen}/>
            </View>
            <View style={styles.wrapper1}>
                    <Konten title="Tambah Pengumuman" img={Tambahpengumuman} onPress={onPressPengumuman}/>
            </View>
            
        </View>
    )
}

const styles = {
    wrapper : {
        flex: 1, 
        justifyContent: 'space-around', 
        flexDirection: "row",
        marginBottom: 15,
    },
    wrapper1: {
        flex: 1, 
        justifyContent: 'flex-start', 
        flexDirection: "row",
        marginLeft :16,
        marginBottom: 15,
    },
    text:{
        fontFamily: 'Nunito',
        fontWeight: 'bold',
        fontSize: 15,
        lineHeight: 20,
        color: colors.red,
        marginLeft: 12,
        marginBottom:8
    }
}
export default KontenFeature2;