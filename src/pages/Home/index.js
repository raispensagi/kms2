import React, { useState, useEffect, useCallback } from 'react';
import {View, Text, FlatList, StatusBar, RefreshControl, ActivityIndicator} from 'react-native';
import { NavigasiBar, Notifikasi, KontenFeature, BoxRiwayat } from '../../component/molecules';
import { ScrollView } from 'react-native-gesture-handler';
import { ProfilBeranda, BoxKonten, HeaderBar, BoxKontenRiwayat } from '../../component/atoms';
import { colors } from '../../utils';
import { PakarFemale } from '../../assets';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import AsyncStorage from '@react-native-community/async-storage';

const Home = ({navigation}) => {
    const [data, setData] = useState();
    const getData = async () => {
        const token = await AsyncStorage.getItem('userToken')
        const userToken = JSON.parse(token)          
        fetch(`http://117.53.47.76/kms_backend/public/api/petani/riwayat`,
        {
            method:"GET",
            headers: new Headers ( {
                Authorization : 'Bearer ' + userToken
            })
        })
        .then((response) => response.json())
        .then((responseJson) => {
            setData(responseJson.bookmark)
        }
        )
        .catch((error) => {
            console.error(error);
        });
    }
    useEffect(()=> {
        getData()
    }, [])
      const [refreshing,setRefreshing]= useState(false)
      const onRefresh = useCallback( async ()=> {
        setRefreshing(true);
        try {
            getData();
            setRefreshing(false)
        }  
        catch {
            console.error();
        }             

      }, [refreshing])
    return (
        <View style={styles.wrapper}>
        <StatusBar barStyle="dark-content" backgroundColor='#fff' />
            <FlatList  showsVerticalScrollIndicator={false}
                ListHeaderComponent= {
                    <>
                    <Notifikasi onPress={()=>navigation.navigate('Daftar Notifikasi')} />
                    <KontenFeature 
                    onPressArtikel={()=>navigation.navigate('Daftar Artikel')} 
                    onPressVideo={()=>navigation.navigate('Daftar Video')} 
                    onPressDokumen={()=>navigation.navigate('Daftar E-Dokumen')}/>
                    <Text style={styles.riwayat}>Riwayat</Text>
                    </>
                }
                data={data}
                refreshControl={
                    <RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>
                }
                    renderItem={({item}) => 
                    <BoxKontenRiwayat 
                        kategori={item.tipe} 
                        title={item.judul}
                        isi={item.penulis.map(value=>value.nama)}
                        onPressKonten={()=> navigation.navigate(item.tipe.toString(), {id:item.konten_id})}
                                />}
                        keyExtractor={(item) => item.id.toString()}
            />
        </View>
    );
};

const styles = {
    wrapper:{
        flex:1,
    },
    riwayat : {
        fontFamily: 'Nunito',
        fontWeight: 'bold',
        fontSize: 15,
        lineHeight: 20,
        color: colors.red,
        marginLeft: 12,
        marginBottom:8
    }
};

export default Home;