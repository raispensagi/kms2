import React from 'react';
import { colors } from '../../../utils';
import { Konten } from '../../atoms';
import { Artikel, Video, Ebook } from '../../../assets';
import {View, Text} from 'react-native';

const KontenFeature = ({onPressArtikel, onPressVideo, onPressDokumen}) => {
    return (
        <View>
        <Text style={styles.text}>Konten KMS</Text>
            <View style={styles.wrapper}>
                    <Konten title="Artikel" img={Artikel} onPress={onPressArtikel}/>
                    <Konten title="Video" img={Video} onPress={onPressVideo}/>
                    <Konten title="E-Dokumen" img={Ebook} onPress={onPressDokumen}/>
            </View>
        </View>
    )
}

const styles = {
    wrapper : {
        flex: 1, 
        justifyContent: 'space-around', 
        flexDirection: "row",
        marginBottom: 10
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