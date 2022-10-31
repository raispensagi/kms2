import React, { Component, useState, useEffect } from 'react';
import { View, Text, StyleSheet, Alert, SafeAreaView, ActivityIndicator } from 'react-native';
import YouTube from 'react-native-youtube';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  listenOrientationChange as loc,
  removeOrientationListener as rol,
  widthPercentageToDP
} from 'react-native-responsive-screen';
import { Icon } from 'react-native-elements';
import { colors, icons, colortext } from '../../utils';
import { TouchableHighlight, FlatList } from 'react-native-gesture-handler';
import { BookmarkButton } from '../../component/atoms';
import AsyncStorage from '@react-native-community/async-storage';
import { VideoPlayer } from '../../template';

function PageVideo  ({videoId, title, route})  {
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
                  <VideoPlayer
                    id={item.id}
                    videoId={item.konten.map(value => value.video_audio).toString()}
                    judul={item.judul}
                    sumber={item.konten.map(value => value.isi)}
                  />  }
                keyExtractor={item => item.id.toString()}
        />
      </SafeAreaView>      
    );
  }

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    youtube: {
    alignSelf: 'stretch',
    height: hp('31.25') 
    },
    title : {
      fontFamily: 'Nunito',
      fontWeight: '600',
      fontSize: 16,
      textAlign: 'justify',
      textTransform: 'capitalize',
      marginLeft: 10,
      marginTop: 10,
      width:wp(85)
    },
    sumber : {
      fontFamily: 'Nunito',
      fontWeight: '400',
      fontSize: 14,
      textAlign: 'justify',
      marginHorizontal: 10,
      color:colortext.gray
    }
});
export default PageVideo;