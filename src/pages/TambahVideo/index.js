import React, { useState, useEffect } from 'react';
import { View, ScrollView, Alert, Text } from 'react-native';
import { ShortInput, LongInput, ActionButton, RedButton, AddButton, Dropdown} from '../../component/atoms';
import AsyncStorage from '@react-native-community/async-storage';
import {Picker} from '@react-native-community/picker';
import CardView from "react-native-cardview";
import { colors, colortext } from '../../utils';

const TambahVideo = ({navigation}) => {
    const [form, setForm] = useState({
        judul: '',
        kategori:'',
        isi:'',
        video_audio:''
    });
    const onInputChange = (value, input) => {
        setForm({
            ...form,
            [input]: value,
            kategori: selectedValue,
        })
    }
    const simpan = async (screen) => {
        const token = await AsyncStorage.getItem('userToken')
        const userToken = JSON.parse(token) 
        if (form.judul==='') {
            Alert.alert("Judul tidak boleh kosong")
        }
        if (form.isi==='') {
            Alert.alert("Isi tidak boleh kosong")
        }
        if (form.kategori==='') {
            Alert.alert("Kategori tidak boleh kosong")
        }
        if (form.video_audio==='') {
            Alert.alert("Link video youtube tidak boleh kosong")
        }
        if (form.judul!=='' && form.isi!=='' && form.kategori!=='' && form.video_audio!=='') {
        fetch(`http://117.53.47.76/kms_backend/public/api/video/draft `,
        {
            method:"POST",
            headers: new Headers ( {
                Authorization : 'Bearer ' + userToken,
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }),
            body: JSON.stringify(form)
        })
        .then((response) => response.json())
        .then((responseJson) => {
            console.log(responseJson)
            console.log(form)
            Alert.alert('Konten disimpan ke draft')
            navigation.goBack(screen)
        }
        )
        .catch((error) => {
            console.error(error);
        });
    }
    };
    const bagikan = async (screen) => {
        const token = await AsyncStorage.getItem('userToken')
        const userToken = JSON.parse(token) 
        if (form.judul==='') {
            Alert.alert("Judul tidak boleh kosong")
        }
        if (form.isi==='') {
            Alert.alert("Isi tidak boleh kosong")
        }
        if (form.kategori==='') {
            Alert.alert("Kategori tidak boleh kosong")
        }
        if (form.video_audio==='') {
            Alert.alert("Link video youtube tidak boleh kosong")
        }
        if (form.judul!=='' && form.isi!=='' && form.kategori!=='' && form.video_audio!=='') {
        fetch(`http://117.53.47.76/kms_backend/public/api/video/post`,
        {
            method:"POST",
            headers: new Headers ( {
                Authorization : 'Bearer ' + userToken,
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }),
            body: JSON.stringify(form)
        })
        .then((response) => response.json())
        .then((responseJson) => {
            console.log(responseJson)
            console.log(form)
            Alert.alert('Konten telah dibagikan')
            navigation.goBack(screen)
        }
        )
        .catch((error) => {
            console.error(error);
        });
    }
    };
    const [selectedValue, setSelectedValue] = useState("Pendahuluan terkait Kelapa Sawit");
    const [selectedValueSub, setSelectedValueSub] = useState();
    return(
        <ScrollView style={{flex:1}}>
            <ShortInput placeholder='Judul' onChangeText={value=>onInputChange(value, 'judul')}/>
            <ShortInput placeholder='ID link video*' onChangeText={value=>onInputChange(value, 'video_audio')}/>
            <Text style={{fontSize:11, marginHorizontal:20}}> * Masukkan hanya link ID video youtube. Contoh: link https://youtu.be/0GfRJZ6eu-Y , ID video : 0GfRJZ6eu-Y  </Text>
            <CardView style={styles.container} cardElevation={1} cardMaxElevation={1} cornerRadius={9}>
                <Picker
                    itemStyle={{fontSize:14, fontWeight: 'normal', fontFamily:'Nunito', colors:colortext.gray}}
                    selectedValue={selectedValue}
                    style={{ width: 320, opacity:0.6,  marginTop:-3}}
                    onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                    mode='dropdown'
                >
                    <Picker.Item label="Pendahuluan terkait Kelapa Sawit" value="Pendahuluan terkait Kelapa Sawit" />
                    <Picker.Item  label="Persiapan Lahan" value="Persiapan Lahan" />
                    <Picker.Item  label="Pembibitan" value="Pembibitan" />
                    <Picker.Item  label="Penanaman" value="Penanaman" />
                    <Picker.Item  label="Pengendalian Hama Penyakit Gulma" value="Pengendalian Hama Penyakit Gulma" />
                    <Picker.Item  label="Pemeliharaan Tanaman" value="Pemeliharaan Tanaman" />
                    <Picker.Item  label="Panen" value="Panen" />
                    <Picker.Item  label="Manajemen SDM, Keuangan, dan Pemasaran" value="Manajemen SDM, Keuangan, dan Pemasaran" />
                </Picker>
            </CardView>
            <ShortInput  placeholder='Sumber channel youtube' onChangeText={value=>onInputChange(value, 'isi')}/>
            <View>
            <AddButton  title1='Simpan pada draft' title2='Bagikan' 
                        onPress1={()=> simpan('Daftar Draft')}
                        onPress2={()=> bagikan('KMS Sawi')}

            />
            </View>
        </ScrollView>
    )
}
const styles = {
    container: {
      flex: 1,
      alignItems: "flex-start",
      backgroundColor: colors.gray4,
      opacity:0.6,
      height: 43, 
      marginHorizontal: 14, 
      marginTop: 10,
      opacity:0.6
    }
  };
export default TambahVideo;