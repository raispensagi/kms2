import React, {useState, useEffect, useCallback} from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  SafeAreaView,
  ActivityIndicator,
  RefreshControl,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {
  SearchBox,
  WhiteButton,
  BoxKonten,
  AddButton,
} from '../../component/atoms';
import {Kelapa} from '../../assets';
import {colors} from '../../utils';
import AsyncStorage from '@react-native-community/async-storage';
const DaftarArtikel = ({navigation}) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [arraydata, setArrayData] = useState([]);
  const getData = async () => {
    const token = await AsyncStorage.getItem('userToken');
    const userToken = JSON.parse(token);
    fetch(`http://117.53.47.76/kms_backend/public/api/konten/artikel`, {
      method: 'GET',
      headers: new Headers({
        Authorization: 'Bearer ' + userToken,
      }),
    })
      .then(response => response.json())
      .then(responseJson => {
        setLoading(false);
        setData(responseJson.konten.reverse());
        setArrayData(responseJson.konten);
      })
      .catch(error => {
        console.error(error);
      });
  };
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getData();
    });

    return unsubscribe;
  }, [navigation]);

  const [value, setValue] = useState();
  const searchFilterFunction = text => {
    setValue(text);
    // console.log(arraydata.find(text))
    const newData = arraydata.filter(item => {
      const itemData = `${item.judul.toUpperCase()} ${item.kategori.toUpperCase()} ${item.konten
        .map(value => value.isi)
        .toString()
        .toUpperCase()}`;
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });
    setData(newData);
    console.log(newData.length);
  };
  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    try {
      getData();
      setRefreshing(false);
    } catch {
      console.error();
    }
  }, [refreshing]);
  if (loading === true) {
    return (
      <View style={{alignItems: 'center', flex: 1, justifyContent: 'center'}}>
        <ActivityIndicator size="large" color={colors.red} />
      </View>
    );
  }
  return (
    <SafeAreaView style={{backgroundColor: colors.white1, flex: 1}}>
      <SearchBox
        onChangeText={text => searchFilterFunction(text)}
        value={value}
      />
      {data.length < 1 ? (
          <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
            <Text>Kata yang dicari tidak dapat ditemukan.</Text>
            <Text>Cobalah memakai kata yang lainnya.</Text>
          </View>): 
          (
        <FlatList
          showsVerticalScrollIndicator={false}
          data={data}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
          renderItem={({item}) => (
            <BoxKonten
              tipe={item.tipe}
              kategori={item.kategori}
              title={item.judul}
              isi={item.konten.map(value => value.isi).toString()}
              onPress={() => navigation.navigate('Artikel', {id: item.id})}
            />
          )}
          keyExtractor={item => item.id.toString()}
        />
      )}
    </SafeAreaView>
  );
};
export default DaftarArtikel;
