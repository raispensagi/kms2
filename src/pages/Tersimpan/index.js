import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, FlatList, StyleSheet, SafeAreaView, ActivityIndicator, RefreshControl } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { SearchBox, WhiteButton, BoxKonten, BoxKontenVideo } from '../../component/atoms';
import { Kelapa } from '../../assets';
import { colors } from '../../utils';
import AsyncStorage from '@react-native-community/async-storage';

const Tersimpan = ({navigation}) => {
    const [loading, setLoading]=useState(true)
    const [data, setData] = useState();
    const [arraydata, setArrayData]=useState([]);
    const getData = async () => {
        const token = await AsyncStorage.getItem('userToken')
        const userToken = JSON.parse(token)          
        fetch(`http://117.53.47.76/kms_backend/public/api/petani/bookmark`,
        {
            method:"GET",
            headers: new Headers ( {
                Authorization : 'Bearer ' + userToken
            })
        })
        .then((response) => response.json())
        .then((responseJson) => {
            setLoading(false)
            setData(responseJson.bookmark)
            setArrayData(responseJson.bookmark)
        }
        )
        .catch((error) => {
            console.error(error);
        });
    }
    useEffect(()=> {
        getData()
    }, [])
    const [value, setValue] = useState()
    const searchFilterFunction = text => {
        setValue(text)
        const newData = arraydata.filter(item => {
          const itemData = `${item.judul.toUpperCase()} ${item.penulis.map(value => value.nama).toString().toUpperCase()} ${item.tipe.toUpperCase()}`;
          const textData = text.toUpperCase();
    
          return itemData.indexOf(textData) > -1;
        });
        setData (newData)
      };
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
    if (loading===true) {
            return (
                <View style={{alignItems: 'center',
                flex: 1,
                justifyContent: 'center'}}>
                    <ActivityIndicator size="large" color={colors.red}/>
                </View>
            )
    }
    return (
        <SafeAreaView style={{backgroundColor:colors.white1, flex:1}}>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={data}
                refreshControl={
                    <RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>
                }
                ListHeaderComponent= {
                    <>
                    <SearchBox onChangeText={ text => searchFilterFunction(text)} value={value}/>
                    </> }
                renderItem={({item}) => 
                <BoxKontenVideo  kategori={item.tipe} 
                            title={item.judul} 
                            isi={item.penulis.map(value=>value.nama)}
                            onPress={()=> navigation.navigate(item.tipe.toString(), {id:item.konten_id})}
                            />}
                keyExtractor={item => item.id.toString()}
            />
            </SafeAreaView>
    )
};
export default Tersimpan;