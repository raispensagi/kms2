import React, {useState, useEffect, useCallback} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  RefreshControl,
} from 'react-native';
import {colors, colortext} from '../../../utils';
import {ImageCircle} from '../../atoms';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Bell} from '../../../assets';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  listenOrientationChange as loc,
  removeOrientationListener as rol,
} from 'react-native-responsive-screen';
import AsyncStorage from '@react-native-community/async-storage';
import {FlatList, ScrollView} from 'react-native-gesture-handler';

const Notifikasi = props => {
  const [notifikasi, setNotifikasi] = useState();
  const [jumlah, setJumlah] = useState();

  const getNotifikasi = async () => {
    const token = await AsyncStorage.getItem('userToken');
    const userToken = JSON.parse(token);
    fetch(`http://117.53.47.76/kms_backend/public/api/notifikasi/my`, {
      method: 'GET',
      headers: new Headers({
        Authorization: 'Bearer ' + userToken,
      }),
    })
      .then(response => response.json())
      .then(responseJson => {
        console.log('Notifikasi dipanggil ' + JSON.stringify(responseJson));
        setNotifikasi(responseJson.notifikasi.slice(0, 3));
        setJumlah(Object.keys(responseJson.notifikasi).length);
        console.log(Object.keys(responseJson.notifikasi).length);
      })
      .catch(error => {
        console.error(error);
      });
  };
  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    try {
      getNotifikasi();
      setRefreshing(false);
    } catch {
      console.error();
    }
  }, [refreshing]);

  // useEffect(() => {
  //   const unsubscribe = navigation.addListener('focus', () => {
  //     getNotifikasi();

  //     console.log('kepanggil dari sini');
  //   });

  //   return unsubscribe;
  // }, [navigation]);

  useEffect(() => {
    getNotifikasi();
    console.log('use effect test');
  }, []);

  if (props.jumlah === 0) {
    return (
      <SafeAreaView style={styles.wrapper}>
        <View style={{flexDirection: 'row', marginTop: 3}}>
          <ImageCircle img={Bell} />
          <View style={{flexDirection: 'column'}}>
            <View style={styles.button}>
              <View>
                <Text style={styles.text}>Tidak ada pengumuman</Text>
              </View>
            </View>
          </View>
        </View>
        <ScrollView
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        />
      </SafeAreaView>
    );
  } else {
    return (
      <SafeAreaView style={styles.wrapper}>
        <View style={{flexDirection: 'row', marginTop: 3}}>
          <View style={{marginTop: 3}}>
            <ImageCircle img={Bell} />
          </View>
          <View style={{flexDirection: 'column'}}>
            <FlatList
              data={props.notifikasi}
              refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
              }
              ListHeaderComponent={
                <View style={{flexDirection: 'column'}}>
                  <View style={styles.button}>
                    <View>
                      <Text style={styles.text} onPress={props.onPress}>
                        {props.jumlah} Pengumuman
                      </Text>
                    </View>
                    <View>
                      <Text style={styles.lihat} onPress={props.onPress}>
                        Lihat
                      </Text>
                    </View>
                  </View>
                </View>
              }
              renderItem={({item}) => (
                <Text style={styles.notif} onPress={props.onPress}>
                  {item.map(value => value.headline).slice(0, 40)}
                </Text>
              )}
              keyExtractor={item => item.map(value => value.id).toString()}
            />
          </View>
        </View>
      </SafeAreaView>
    );
  }
};
const styles = {
  notif: {
    color: colortext.white,
    fontSize: 13.5,
    width: wp('70'),
    textTransform:'capitalize',
  },
  button: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    color: colortext.white,
    fontFamily: 'Nunito',
    fontWeight: '700',
    fontSize: 15,
    marginTop: 5,
  },
  lihat: {
    marginRight: 25,
    color: colortext.white,
    fontFamily: 'Nunito',
    fontWeight: '700',
    fontSize: 15,
    marginTop: 5,
  },
  wrapper: {
    height: 94,
    flexDirection: 'row',
    marginHorizontal: 10,
    marginVertical: 15,
    borderRadius: 10,
    backgroundColor: colors.orange,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.07,
    shadowRadius: 5,
    elevation: 4,
  },
};
export default Notifikasi;
