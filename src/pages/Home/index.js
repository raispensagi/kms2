import React, {useState, useEffect, useCallback} from 'react';
import {
  View,
  Text,
  FlatList,
  StatusBar,
  RefreshControl,
  ActivityIndicator,
} from 'react-native';
import {colors, colortext} from '../../utils';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  listenOrientationChange as loc,
  removeOrientationListener as rol,
} from 'react-native-responsive-screen';
import {
  NavigasiBar,
  Notifikasi,
  KontenFeature,
  KontenFeature2,
  BoxRiwayat,
} from '../../component/molecules';
import {ScrollView} from 'react-native-gesture-handler';
import {
  ProfilBeranda,
  BoxKonten,
  HeaderBar,
  BoxKontenRiwayat,
  AddButton,
} from '../../component/atoms';
// import {colors, colortext} from '../../utils';
import {BlurView} from '@react-native-community/blur';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import AsyncStorage from '@react-native-community/async-storage';
import ActionButton from 'react-native-action-button';
import {Icon} from 'react-native-elements';
import {useDispatch, useSelector} from 'react-redux';

const Home = ({navigation}) => {
  const [data, setData] = useState();
  const stateHistory = useSelector(state => state.HistoryHomeReducer);
  const dispatch = useDispatch();

  const getData = async () => {
    const token = await AsyncStorage.getItem('userToken');
    const userToken = JSON.parse(token);
    fetch(`http://117.53.47.76:8001/api/riwayat`, {
      method: 'GET',
      headers: new Headers({
        Authorization: 'Bearer ' + userToken,
      }),
    })
      .then(response => response.json())
      .then(responseJson => {
        setData(responseJson.bookmark.reverse());
        console.log('DATA TERAKHIR' + JSON.stringify(responseJson));
      })
      .catch(error => {
        console.error(error);
      });
  };

  const [notifikasi, setNotifikasi] = useState();
  const [jumlah, setJumlah] = useState();

  const getNotifikasi = async () => {
    const token = await AsyncStorage.getItem('userToken');
    const userToken = JSON.parse(token);
    fetch(`http://117.53.47.76:8001/api/notifikasi/my`, {
      method: 'GET',
      headers: new Headers({
        Authorization: 'Bearer ' + userToken,
      }),
    })
      .then(response => response.json())
      .then(responseJson => {
        console.log("Notifikasi dipanggil "+JSON.stringify(responseJson))
        setNotifikasi(responseJson.notifikasi.reverse().slice(0, 3));
        setJumlah(Object.keys(responseJson.notifikasi).length);
        console.log(Object.keys(responseJson.notifikasi).length);
        console.log("====>")
        console.log(responseJson.notifikasi)
        console.log("<====")
        console.log(responseJson.notifikasi.reverse())
      })
      .catch(error => {
        console.error(error);
      });
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getData();
      getNotifikasi();

      console.log("kepanggil dari sini")
    });

    return unsubscribe;
  }, [navigation]);

  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    try {
      getData();
      getNotifikasi()
      setRefreshing(false);
    } catch {
      console.error();
    }
  }, [refreshing]);

  return (
    <View style={styles.wrapperHome}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <FlatList
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <>
            <Notifikasi
              onPress={() => navigation.navigate('Daftar Pengumuman')}
              jumlah={jumlah}
              notifikasi={notifikasi}
            />
            <KontenFeature
              onPressArtikel={() => navigation.navigate('Daftar Artikel')}
              onPressVideo={() => navigation.navigate('Daftar Video')}
              onPressDokumen={() => navigation.navigate('Daftar E-Dokumen')}
            />
            <KontenFeature2
              onPressArtikel={() => navigation.navigate('Tambah Artikel')}
              onPressVideo={() => navigation.navigate('Tambah Video')}
              onPressDokumen={() => navigation.navigate('Tambah E-Dokumen')}
              onPressPengumuman={() => navigation.navigate('Tambah Pengumuman')}
            />
            <Text style={styles.riwayat}>Riwayat</Text>
          </>
        }
        data={data}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        renderItem={({item}) => (
          <BoxKontenRiwayat
            kategori={item.tipe}
            title={item.judul}
            isi={item.penulis.map(value => value.nama)}
            onPressKonten={() =>
              navigation.navigate(item.tipe.toString(), {id: item.konten_id})
            }
          />
        )}
        keyExtractor={item => item.id.toString()}
      />
      {/* <ActionButton
        backgroundTappable={true}
        buttonColor={colors.red}
        spacing={7}
        offsetX={15}
        offsetY={15}
        size={80}
        position="center"
        buttonText="+"
        buttonTextStyle={{fontSize: 60}}
        bgColor="rgba(0,0,0,.5)"
        useNativeFeedback={false}>
        <ActionButton.Item
          spaceBetween={10}
          textContainerStyle={{borderRadius: 5}}
          buttonColor={colors.green4}
          title="Tambah Pengumuman"
          onPress={() => navigation.navigate('Tambah Pengumuman')}
          textStyle={{fontFamily: 'Nunito'}}
          useNativeFeedback={false}>
          <Icon name="notifications" color={colors.white1} size={40} />
        </ActionButton.Item>
        <ActionButton.Item
          spaceBetween={10}
          textContainerStyle={{borderRadius: 5}}
          buttonColor={colors.orange}
          title="Tambah Artikel"
          onPress={() => navigation.navigate('Tambah Artikel')}
          textStyle={{fontFamily: 'Nunito'}}
          useNativeFeedback={false}>
          <Icon name="description" color={colors.white1} size={40} />
        </ActionButton.Item>
        <ActionButton.Item
          spaceBetween={10}
          textContainerStyle={{borderRadius: 5}}
          buttonColor={colors.green4}
          title="Tambah Video"
          onPress={() => navigation.navigate('Tambah Video')}
          textStyle={{fontFamily: 'Nunito'}}
          useNativeFeedback={false}>
          <Icon name="videocam" color={colors.white1} size={40} />
        </ActionButton.Item>
        <ActionButton.Item
          spaceBetween={10}
          textContainerStyle={{borderRadius: 5}}
          buttonColor={colors.orange}
          title="Tambah E-Dokumen"
          onPress={() => navigation.navigate('Tambah E-Dokumen')}
          textStyle={{fontFamily: 'Nunito'}}
          useNativeFeedback={false}>
          <Icon name="dvr" color={colors.white1} size={40} />
        </ActionButton.Item>
      </ActionButton> */}
    </View>
  );
};

const styles = {
  notif: {
    color: colortext.white,
    fontSize: 13.5,
    width: wp('70'),
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
  wrapperHome: {
    flex: 1,
  },
  riwayat: {
    fontFamily: 'Nunito',
    fontWeight: 'bold',
    fontSize: 15,
    lineHeight: 20,
    color: colors.red,
    marginLeft: 12,
    marginBottom: 8,
  },
};

export default Home;
