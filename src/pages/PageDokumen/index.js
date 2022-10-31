import React, { useState, useEffect } from 'react';
import { View, Image, Text, ActivityIndicator, SafeAreaView} from 'react-native';
import DownloadLButton from '../../component/atoms/DownloadButton';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    listenOrientationChange as loc,
    removeOrientationListener as rol
  } from 'react-native-responsive-screen';
import { Kelapa } from '../../assets';
import { ScrollView, FlatList } from 'react-native-gesture-handler';
import { colors } from '../../utils';
import AsyncStorage from '@react-native-community/async-storage';
import { DokumenPage } from '../../template';
const PageDokumen = ({route}) => {
const {id} = route.params;
const [data, setData] = useState();
const [loading,setLoading]= useState(true)
const getData = async () => {
const token = await AsyncStorage.getItem('userToken')
const userToken = JSON.parse(token)          
    fetch(`http://117.53.47.76:8001/api/konten/show/${id}`,
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
        console.log(responseJson.konten)
    }
    )
    .catch((error) => {
        console.error(error);
    });
}
useEffect(()=> {
    getData()
}, [])
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
          <SafeAreaView>
              <FlatList
                  showsVerticalScrollIndicator={false}
                  data={data}
                  renderItem={({item}) => 
                  <DokumenPage
                    judul={item.judul}
                    penulis= {item.konten.map(value => value.penulis)}
                    tahun= {item.konten.map(value => value.tahun)}
                    penerbit= {item.konten.map(value => value.penerbit)}
                    bahasa= {item.konten.map(value => value.bahasa)}
                    halaman= {item.konten.map(value => value.halaman)}
                    deskripsi= {item.konten.map(value => value.deskripsi)}
                    file={item.konten.map(value => value.file)}
                  />
                  }
                  keyExtractor={item => item.id.toString()}
              />
          </SafeAreaView>
      )
}
const styles = {
    wrapper :{
        marginTop:7,
        marginBottom:5,
        flexDirection: 'row',
        marginHorizontal: 7,
        borderRadius: 10,
        backgroundColor: colors.white1,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.07,
        shadowRadius: 10,
        elevation: 5
    },
    image : {
        height:hp('24'),
        width:wp('29'),
        margin: 15,
    },
    isi : {
        fontFamily: 'Nunito',
        fontWeight:'300',
        fontSize: 14,
        width:wp('43'),
        textAlign: 'justify'
    },
    ringkasanisi : {
        fontFamily: 'Nunito',
        fontWeight:'300',
        fontSize: 14,
        textAlign: 'justify',
        marginHorizontal: 10,
        marginBottom:10
    },
    Ringkasan : {
        marginTop: 10,
        fontFamily: 'Nunito',
        fontWeight:'500',
        fontSize: 16,
        textAlign: 'justify',
        marginLeft : 10
    }
}
export default PageDokumen;