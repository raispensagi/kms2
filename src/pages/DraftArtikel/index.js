import React, { useState, useEffect } from 'react';
import { View, ScrollView, Alert, SafeAreaView, ActivityIndicator } from 'react-native';
import { ShortInput, LongInput, ActionButton, RedButton, AddButton } from '../../component/atoms';
import AsyncStorage from '@react-native-community/async-storage';
import {Picker} from '@react-native-community/picker';
import CardView from "react-native-cardview";
import { colors, colortext } from '../../utils';
const DraftArtikel = ({route, navigation}) => {
    const {id} = route.params;
    const [loading,setLoading]= useState(true)
    const postdraft = async (screen) => {
        const token = await AsyncStorage.getItem('userToken')
        const userToken = JSON.parse(token) 
        if (formsend.judul==='') {
            Alert.alert("Judul tidak boleh kosong")
        }
        else if (formsend.isi==='') {
            Alert.alert("Isi tidak boleh kosong")
        }
        else if (formsend.kategori==='') {
            Alert.alert("Kategori tidak boleh kosong")
        }
        if (formsend.judul!=='' && formsend.isi!=='' && formsend.kategori!=='') {
        fetch(`http://117.53.47.76:8001/api/draft/edit/${id}`,
            {
                method:"POST",
                headers: new Headers ( {
                    Authorization : 'Bearer ' + userToken,
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                }),
                body: JSON.stringify(formsend)
            })
        fetch(`http://117.53.47.76:8001/api/draft/post/${id}`,
        {
            method:"POST",
            headers: new Headers ( {
                Authorization : 'Bearer ' + userToken,
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }),
            body: JSON.stringify(formsend)
        })
        .then((response) => response.json())
        .then((responseJson) => {
            console.log(responseJson)
            Alert.alert('Konten telah dibagikan')
            navigation.goBack(screen)
        }
        )
        .catch((error) => {
            console.error(error);
        });
    }
    };
    const editdraft = async (screen) => {
        const token = await AsyncStorage.getItem('userToken')
        const userToken = JSON.parse(token) 
        if (formsend.judul==='') {
            Alert.alert("Judul tidak boleh kosong")
        }
        else if (formsend.isi==='') {
            Alert.alert("Isi tidak boleh kosong")
        }
        else if (formsend.kategori==='') {
            Alert.alert("Kategori tidak boleh kosong")
        }
        if (formsend.judul!=='' && formsend.isi!=='' && formsend.kategori!=='') {
        fetch(`http://117.53.47.76:8001/api/draft/edit/${id}`,
        {
            method:"POST",
            headers: new Headers ( {
                Authorization : 'Bearer ' + userToken,
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }),
            body: JSON.stringify(formsend)
        })
        .then((response) => response.json())
        .then((responseJson) => {
            console.log("TULISAN")
            console.log(formsend)
            console.log(responseJson)
            Alert.alert('Konten telah diperbaharui')
            navigation.goBack(screen)
        }
        )
        .catch((error) => {
            console.error(error);
        });
    }
    };
    const [selectedValue, setSelectedValue] = useState([]);
    const [judul, setJudul]=useState()
    const [isi, setIsi]=useState()
    const onInputChange = (value, input) => {
        if (input === "judul") {
            setJudul(value)
            setFormSend({
                'judul': value,
                'kategori':selectedValue,
                'isi':isi,
            })
        }
        else if (input === "kategori") {
            setSelectedValue(value)
            setFormSend({
                'judul': judul,
                'kategori':value,
                'isi':isi,
            })
        }
        else if (input === "isi") {
            setIsi(value)
            setFormSend({
                'judul': judul,
                'kategori':selectedValue,
                'isi':value,
            })
        }
        // setFormSend({
        //     'judul': judul,
        //     'kategori':selectedValue,
        //     "video_audio":video_audio,
        //     'isi':isi,
        //     [input]: value,
        //     kategori:selectedValue,
        // })
    }
    const onInputChangeKategori = (value, input) => {
        setSelectedValue(value)
        setFormSend({
            'judul': judul,
            'kategori':selectedValue,
            'isi':isi,
            [input]: value,
        })
        
    }
    const [formsend, setFormSend]= useState({})
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
                setLoading(false),
                console.log("===>"+JSON.stringify(responseJson)),
                console.log(responseJson.konten.map(value=> value.kategori))
                setJudul(responseJson.konten.map(value=> value.judul).toString()),
                setIsi(responseJson.konten.map(value => value.konten.map(val=> val.isi)).toString()),
                setSelectedValue(responseJson.konten.map(value=> value.kategori).toString())
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
            <ScrollView showsVerticalScrollIndicator={false}>
                 <ShortInput value={judul} placeholder='Judul' onChangeText={value=>onInputChange(value, 'judul')}/>
            <CardView style={styles.container} cardElevation={1} cardMaxElevation={1} cornerRadius={9}>
                <Picker
                    itemStyle={{fontSize:14, fontWeight: 'normal', fontFamily:'Nunito', colors:colortext.gray,}}
                    selectedValue={selectedValue}
                    style={{ width: 320, opacity:0.6,  marginTop:-3,marginLeft:7}}
                    onValueChange={(itemValue, itemIndex) => onInputChange(itemValue, 'kategori')}
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
            <LongInput placeholder='Deskripsi' value={isi} onChangeText={value=>onInputChange(value, 'isi')}/>
                <AddButton  title1='Simpan' title2='Bagikan' 
                        onPress1={()=> editdraft('KMS Sawit')}
                        onPress2={()=> postdraft('KMS Sawit')}
                        />
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
export default DraftArtikel;