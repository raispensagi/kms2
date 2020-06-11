import React, { useCallback, useState, useEffect } from 'react';
import { View , Text, SafeAreaView, FlatList, RefreshControl} from 'react-native';
import { BoxNotifikasi } from '../../component/molecules';
import { PakarFemale } from '../../assets';
import { ScrollView } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-community/async-storage';
import { NavigationContainer } from '@react-navigation/native';

const DaftarNotifikasi = ({jumlah,notif, navigation}) => {
    const [notifikasi, setNotifikasi]= useState();
    const getNotifikasi = async () => {
        const token = await AsyncStorage.getItem('userToken')
        const userToken = JSON.parse(token)          
        fetch(`http://117.53.47.76/kms_backend/public/api/notifikasi/all`,
        {
            method:"GET",
            headers: new Headers ( {
                Authorization : 'Bearer ' + userToken
            })
        })
        .then((response) => response.json())
        .then((responseJson) => {
            setNotifikasi(responseJson.notifikasi)
        }
        )
        .catch((error) => {
            console.error(error);
        });
    }
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
      useEffect(()=> {
        getNotifikasi()
    }, [])
    return (
        <SafeAreaView showsVerticalScrollIndicator={false} style={styles.wrapper}>
           <FlatList
                showsVerticalScrollIndicator={false}
                data={notifikasi}
                refreshControl={
                    <RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>
                }
                renderItem={({item}) => 
                    <BoxNotifikasi  id={item.id}
                                    name={item.headline} 
                                    role={item.role} 
                                    isi={item.isi.slice(0,78)}
                                    onPress={()=> navigation.navigate('Notifikasi', {id:item.id})}
                                    />  
                }
                keyExtractor={item => item.id.toString()}
            />
        </SafeAreaView>
    )
};
const styles = {
    button: {
        flex: 1, 
        flexDirection:'row',
        justifyContent:'space-between',
        marginHorizontal: 14,
    },
    text :{
        fontFamily: 'Nunito',
        fontWeight: '700',
        fontSize: 15,
        marginTop: 10,
    },
    image :{
        height: 45,
        resizeMode: "contain",
        justifyContent: 'center',
        alignSelf: "center",
        margin:8
    },
    wrapper: {
        position: 'relative',
        flexDirection: 'column',
    },
}
export default DaftarNotifikasi;