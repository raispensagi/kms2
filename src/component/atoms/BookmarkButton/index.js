import React, { useState, useEffect, useCallback } from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Alert,
} from 'react-native';
import { icons, colors } from '../../../utils';
import { Icon } from 'react-native-elements';
import AsyncStorage from '@react-native-community/async-storage';
import { set } from 'react-native-reanimated';


function Item({ id }) {
  
    const [selected, setSelected] = useState();
    const getData = async () => {
    const token = await AsyncStorage.getItem('userToken')
    const userToken = JSON.parse(token)          
        fetch(`http://117.53.47.76/kms_backend/public/api/konten/show/${id}`,
        {
            method:"GET",
            headers: new Headers ( {
                Authorization : 'Bearer ' + userToken
            })
        })
        .then((response) => response.json())
        .then((responseJson) => { 
          setSelected(responseJson.konten.map(value => value.bookmark).toString())
        }
        )
        .catch((error) => {
            console.error(error);
        });
    }
    useEffect(()=> {
        getData()
    }, [])
    const [bookmark, setBookmark]=useState() 
    const add = async () => {
      setBookmark({bookmark:"true"})
      const token = await AsyncStorage.getItem('userToken')
      const userToken = JSON.parse(token)          
          fetch(`http://117.53.47.76/kms_backend/public/api/bookmark/add/${id}`,
          {
              method:"POST",
              headers: new Headers ( {
                  Authorization : 'Bearer ' + userToken,
                  Accept: 'application/json',
                  'Content-Type': 'application/json'
              }),
              body : JSON.stringify(bookmark)
          })
          .then((response) => response.json()) 
          .then((responseJson) => {
              setSelected('true');
              Alert.alert("Konten berhasil disimpan ke dalam menu Tersimpan")
              
          }
          )
          .catch((error) => {
              console.error(error);
          });
      }
    const remove = async () => {
      setBookmark({bookmark:"false"})
      const token = await AsyncStorage.getItem('userToken')
      const userToken = JSON.parse(token)          
          fetch(`http://117.53.47.76/kms_backend/public/api/bookmark/delete/${id}`,
          {
              method:"DELETE",
              headers: new Headers ( {
                  Authorization : 'Bearer ' + userToken,
                  Accept: 'application/json',
                  'Content-Type': 'application/json'
              }),
              body : JSON.stringify(bookmark)
          })
          .then((response) => response.json())
          .then((responseJson) => {
              setSelected('false')
              Alert.alert("Konten berhasil dihapus dari menu Tersimpan")
          }
          )
          .catch((error) => {
              console.error(error);
          });
      }
      
    

    if (selected === 'true') { 
      return(
        <Icon
        name='bookmark'
          onPress={() => remove(id)} 
          color= {colors.gray2 }
        />
      )
    } else {
      return(
        <Icon
        name='bookmark-border'
        onPress={() => add(id)} 
          color= { colors.gray2}
        />
      )
    }
}

export default function BookmarkButton({id}) {
 return (
    <View style={{
        marginTop: 10,
        marginRight: 15
        }}>
          <Item
            id={id}
          />
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 32,
  },
});
