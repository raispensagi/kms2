import React, { Component, useState, useEffect } from 'react';
import { View, Text, StyleSheet, Alert, SafeAreaView } from 'react-native';
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

function VideoPlayer  ({videoId, sumber, judul, id})  {
  const [isReady, setIsReady]= useState(false);
  const [status, setStatus]= useState();
  const [quality, setQuality] = useState();
  const [error, setError] = useState();
    return (
      <View style={styles.container}>
        <YouTube
        apiKey="AIzaSyBa_gh3C-qpXu3IwK1c503-2vvFtPeKsvM"
        videoId={videoId} // The YouTube video ID
        play // control playback of video with true/false
        fullscreen={false} // video should play in fullscreen or inline
        loop={false} // control whether the video should loop when ended
        onReady={e => setIsReady(true)}
        onChangeState={e => setStatus(e.state)}
        onChangeQuality={e => setQuality(e.quality)}
        onError={e => setError(e.error)}
        style={styles.youtube}
        />
        <View style={styles.wrap}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <View style={{flexDirection:'column'}}>
                    <View style={{flexDirection: 'row'}}>
                    <Text style={styles.judul}>{judul}</Text>
                    <BookmarkButton id={id}/>
                    </View>
                    <Text style={styles.text}>Sumber : {sumber}</Text>
                </View>
            </View>
        </View>
    </View>
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
    wrap: {
      backgroundColor:colors.gray4,
      paddingHorizontal: 15,
      paddingVertical: 10, 
      borderRadius: 9,
      fontSize: 14,
      fontWeight: 'normal',
      marginTop: 15,
      marginHorizontal: 12,
  },
    sumber : {
      fontFamily: 'Nunito',
      fontWeight: '400',
      fontSize: 14,
      textAlign: 'justify',
      marginHorizontal: 10,
      color:colortext.gray
    },
    judul : {
      marginLeft: 1, 
      marginTop: 1,
      fontFamily: 'Nunito',
      fontWeight:'700',
      fontSize: 16,
      textAlign: 'justify' ,
      flex: 1,
      textTransform:'capitalize',
  },
  text : {
      fontFamily: 'Nunito',
      marginLeft: 1,
      marginTop: 3,
      fontWeight:'300',
      fontSize: 14,
      textAlign: 'justify',
      marginHorizontal: 10,
      width:wp('85'),
      textTransform: 'capitalize',
  },
  isi : {
      fontFamily: 'Nunito',
      fontWeight:'300',
      fontSize: 14,
      textAlign: 'justify',
      marginTop: 6,
      marginLeft: 1,
      width:wp('85'),
      color: 'black',
  }
});
export default VideoPlayer;