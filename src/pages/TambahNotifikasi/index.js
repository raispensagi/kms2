import React, { useState, useEffect } from 'react';
import { View, ScrollView, Alert } from 'react-native';
import { ShortInput, LongInput, ActionButton, RedButton, AddButton, Dropdown} from '../../component/atoms';
import AsyncStorage from '@react-native-community/async-storage';
import {Picker} from '@react-native-community/picker';
import CardView from "react-native-cardview";
import { colors, colortext } from '../../utils';

const TambahNotifikasi = ({navigation}) => {
    const [form, setForm] = useState({
        headline:'',
        isi:'',
    });
    const onInputChange = (value, input) => {
        setForm({
            ...form,
            [input]: value,
        })
    }
    const simpan = async (screen) => {
        const token = await AsyncStorage.getItem('userToken')
        const userToken = JSON.parse(token) 
        if (form.headline==='') {
            Alert.alert("Headline tidak boleh kosong")
        }
        if (form.isi==='') {
            Alert.alert("Isi tidak boleh kosong")
        }
        if (form.judul!=='' && form.isi!=='' && form.kategori!=='') {
        fetch(`http://117.53.47.76/kms_backend/public/api/notifikasi/add`,
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
            Alert.alert('Notifikasi telah dibuat')
            navigation.replace(screen)
        }
        )
        .catch((error) => {
            console.error(error);
        });
    }
    };
    return(
        <View>
            <ShortInput placeholder='Headline notifikasi' onChangeText={value=>onInputChange(value, 'headline')}/>
            <LongInput placeholder='Isi notifikasi' onChangeText={value=>onInputChange(value, 'isi')}/>
            <View style={{marginRight:15, marginTop:10}}>
                <RedButton title='Bagikan' onPress={()=> simpan('KMS Sawit')} />
            </View>
        </View>
    )
}
export default TambahNotifikasi;