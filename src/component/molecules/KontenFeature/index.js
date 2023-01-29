import React from 'react';
import { colors } from '../../../utils';
import { Konten } from '../../atoms';
import { Artikel, Video, Ebook, Bell } from '../../../assets';
import {View, Text} from 'react-native';
import {Icon} from 'react-native-elements';

const KontenFeature = ({onPressArtikel, onPressVideo, onPressDokumen}) => {
    return (
        <View>
        <Text style={styles.text}>Konten KMS</Text>
            <View style={styles.wrapper}>
                    <Konten title="Daftar        Artikel" img={Artikel} onPress={onPressArtikel}/>
                    <Konten title="Daftar        Video" img={Video} onPress={onPressVideo}/>
                    <Konten title="Daftar         E-Dokumen" img={Ebook} onPress={onPressDokumen}/>
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
export default KontenFeature;