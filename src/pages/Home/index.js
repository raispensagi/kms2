import React from 'react';
import {View, Text} from 'react-native';
import { NavigasiBar, Notifikasi, KontenFeature, BoxRiwayat } from '../../component/molecules';
import { ScrollView } from 'react-native-gesture-handler';
import { ProfilBeranda, BoxKonten } from '../../component/atoms';
import { colors } from '../../utils';
import { PakarFemale } from '../../assets';

const Home = ({navigation}) => {
    const handleGoTo = screen => {
        navigation.navigate(screen);
    };
    return (
        <View style={styles.wrapper}>
            <ScrollView showsVerticalScrollIndicator={false} style={styles.wrapper}>
                    <ProfilBeranda img={PakarFemale} fullName="Nadya Farchana" role="Pakar"/>
                    <Notifikasi onPress={()=>handleGoTo('Notifikasi')} jumlah="3" notif="pada hari minggu" notif="aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"/>
                    <KontenFeature 
                    onPressArtikel={()=>handleGoTo('Kategori Artikel')} 
                    onPressVideo={()=>handleGoTo('Video')} 
                    onPressDokumen={()=>handleGoTo('Dokumen')}/>
                    <BoxRiwayat onPress={()=>handleGoTo('Riwayat')}/>
            </ScrollView>
        </View>
    );
};

const styles = {
    wrapper:{
        flex:1,
    }
};

export default Home;