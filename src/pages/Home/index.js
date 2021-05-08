import React, { useState, useEffect, useCallback } from 'react';
import {View, Text, FlatList, StatusBar, RefreshControl, ActivityIndicator} from 'react-native';
import { NavigasiBar, Notifikasi, KontenFeature, BoxRiwayat } from '../../component/molecules';
import { ScrollView } from 'react-native-gesture-handler';
import { ProfilBeranda, BoxKonten, HeaderBar, BoxKontenRiwayat, AddButton } from '../../component/atoms';
import { colors } from '../../utils';
import { BlurView } from "@react-native-community/blur";
import { Colors } from 'react-native/Libraries/NewAppScreen';
import AsyncStorage from '@react-native-community/async-storage';
import ActionButton from 'react-native-action-button';
import { Icon } from 'react-native-elements';
const Home = ({navigation}) => {
    const [data, setData] = useState();
    const getData = async () => {
        const token = await AsyncStorage.getItem('userToken')
        const userToken = JSON.parse(token)          
        fetch(`http://117.53.47.76/kms_backend/public/api/riwayat`,
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
                    <Notifikasi onPress={()=>navigation.navigate('Daftar Pengumuman')} />
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
            <ActionButton   backgroundTappable={true} 
                            buttonColor={colors.red} 
                            spacing={7}
                            offsetX={15}
                            offsetY={15}
                            buttonTextStyle={{fontSize:30}}
                            bgColor="rgba(0,0,0,.5)"
                            useNativeFeedback={false}>
                <ActionButton.Item  spaceBetween={10} 
                                    textContainerStyle={{borderRadius:5}} 
                                    buttonColor={colors.green4} 
                                    title="Notifikasi" 
                                    onPress={() => navigation.navigate("Tambah Pengumuman")}
                                    textStyle={{fontFamily:'Nunito'}}
                                    useNativeFeedback={false}>
                    <Icon name="notifications" color={colors.white1} size={21} />
                </ActionButton.Item>
                <ActionButton.Item  spaceBetween={10} 
                                    textContainerStyle={{borderRadius:5}} 
                                    buttonColor={colors.orange} title="Artikel" 
                                    onPress={ ()=>navigation.navigate('Tambah Artikel')}
                                    textStyle={{fontFamily:'Nunito'}}
                                    useNativeFeedback={false}>
                    <Icon name="description" color={colors.white1} size={21} />
                </ActionButton.Item>
                <ActionButton.Item  spaceBetween={10} 
                                    textContainerStyle={{borderRadius:5}} 
                                    buttonColor={colors.green4} 
                                    title="Video" 
                                    onPress={() => navigation.navigate("Tambah Video")}
                                    textStyle={{fontFamily:'Nunito'}}
                                    useNativeFeedback={false}
                                    >
                    <Icon name="videocam" color={colors.white1} size={23} />
                </ActionButton.Item>
                <ActionButton.Item  spaceBetween={10} 
                                    textContainerStyle={{borderRadius:5}} 
                                    buttonColor={colors.orange} 
                                    title="E-Dokumen" 
                                    onPress={() => navigation.navigate("Tambah E-Dokumen")}
                                    textStyle={{fontFamily:'Nunito'}}
                                    useNativeFeedback={false}>
                    <Icon name="dvr" color={colors.white1} size={21} />
                </ActionButton.Item>
            </ActionButton>
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