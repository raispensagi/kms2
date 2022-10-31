import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, SafeAreaView, ActivityIndicator } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { SearchBox, WhiteButton } from '../../component/atoms';
import { colors } from '../../utils';
import AsyncStorage from '@react-native-community/async-storage';


const KategoriArtikel = ({navigation}) => {
    const handleGoTo = screen => {
        navigation.navigate(screen);
    };
    const [loading, setLoading]=useState(true)
    const [data, setData] = useState([]);
    const [arraydata, setArrayData]=useState([]);
    const getData = async () => {
        const token = await AsyncStorage.getItem('userToken')
        const userToken = JSON.parse(token)          
        fetch(`http://117.53.47.76:8001/api/konten/artikel`,
        {
            method:"GET",
            headers: new Headers ( {
                Authorization : 'Bearer ' + userToken
            })
        })
        .then((response) => response.json())
        .then((responseJson) => {
            setLoading(false)
            setData(responseJson.konten)
            setArrayData(responseJson.konten)
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
          const itemData = `${item.kategori.toUpperCase()}`;
          const textData = text.toUpperCase();
    
          return itemData.indexOf(textData) > -1;
        });
        setData (newData)
      };
      
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
        
        <SafeAreaView style={{backgroundColor:colors.white1, flex:1}} >
            <SearchBox onChangeText={ text => searchFilterFunction(text)} value={value}/>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={data}
                renderItem={({item}) => 
                    <WhiteButton title={item.kategori} onPress={()=> handleGoTo('Daftar Artikel', {itemId: item.id,
              otherParam:item.title,})}/>}
                keyExtractor={item=> item.id.toString()}
            />
        </SafeAreaView>
    )
};
export default KategoriArtikel;
