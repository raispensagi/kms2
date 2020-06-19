import React, { useState, useEffect } from 'react';
import { View, Alert } from 'react-native';
import { ShortInput, RedButton } from '../../component/atoms';
import AsyncStorage from '@react-native-community/async-storage';

const EditProfil = ({navigation}) => {
    const [form, setForm] = useState({
    });
    const onInputChange = (value, input) => {
        setForm({
            ...form,
            'nama':nama,
            'email':email,
            [input]: value,
        })
    }
    const [email, setEmail]= useState()
    const [nama, setNama]= useState()
    const [loading, setLoading]=useState();
    const profil = async (screen) => {
        const token = await AsyncStorage.getItem('userToken')
        const userToken = JSON.parse(token)          
        fetch(`http://117.53.47.76/kms_backend/public/api/profil`,
        {
            method:"GET",
            headers: new Headers ( {
                Authorization : 'Bearer ' + userToken
            })
        })
        .then((response) => response.json())
        .then((responseJson) => {
            setLoading(false)
            setEmail(responseJson.data.map(value=> value.email).toString())
            setNama(responseJson.data.map(value=> value.nama).toString())
            console.log(responseJson.data)
        }
        )
        .catch((error) => {
            console.error(error);
        });
    };
    useEffect(()=> {
        profil()
    },[])
    const sendData = async (screen) => {
        const token = await AsyncStorage.getItem('userToken')
        const userToken = JSON.parse(token)        
        if (form.nama==='') {
            Alert.alert("Nama tidak boleh kosong")
        }
        if (form.email==='') {
            Alert.alert("Email tidak boleh kosong")
        }
        if (form.password==='') {
            Alert.alert("Password tidak boleh kosong")
        }
        if (form.password!=='' && form.email!=='') {
        fetch(`http://117.53.47.76/kms_backend/public/api/profil/update`,
        {
            method:"POST",
            headers: {
                Authorization : 'Bearer ' + userToken,
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(form)
        })
        .then((response) => response.json())
        .then((responseJson) => {
            console.log(responseJson)
            console.log(form)
            Alert.alert('Profil sudah diperbaharui')
            navigation.goBack(screen)
        }
        )
        .catch((error) => {
            console.error(error);
        });
    }
    };
    return(
        <View>
            <ShortInput placeholder="Nama" value={nama}  onChangeText={value=>onInputChange(value, 'nama')}/>
            <ShortInput placeholder="Email" value={email}  onChangeText={value=>onInputChange(value, 'email')}/>
            <View style={{marginRight:15, marginTop:10}}>
                <RedButton title='Simpan' onPress={()=> sendData('KMS Sawit')} />
            </View>
        </View>
    )
}
export default EditProfil;