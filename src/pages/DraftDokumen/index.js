import React, { useState, useEffect } from 'react';
import { View, ScrollView, Alert, SafeAreaView, ActivityIndicator } from 'react-native';
import { ShortInput, LongInput, ActionButton, RedButton, AddButton } from '../../component/atoms';
import AsyncStorage from '@react-native-community/async-storage';
import {Picker} from '@react-native-community/picker';
import CardView from "react-native-cardview";
import { colors, colortext } from '../../utils';
import { FlatList } from 'react-native-gesture-handler';
const DraftDokumen = ({route, navigation}) => {
    const {id} = route.params;
    const [form, setForm] = useState({
        judul: '',
        penulis:'',
        tahun:'',
        penerbit:'',
        halaman:'',
        bahasa:'',
        deskripsi:'',
        file:'',
        kategori:'',
    });
    const [loading,setLoading]= useState(true)
    const postdraft = async (screen) => {
        const token = await AsyncStorage.getItem('userToken')
        const userToken = JSON.parse(token) 
        if (form.judul==='') {
            Alert.alert("Judul tidak boleh kosong")
        }
        if (form.penulis==='') {
            Alert.alert("Penulis tidak boleh kosong")
        }
        if (form.tahun==='') {
            Alert.alert("Tahun tidak boleh kosong")
        }
        if (form.penerbit==='') {
            Alert.alert("Penerbit tidak boleh kosong")
        }
        if (form.file==='') {
            Alert.alert("Link unduh tidak boleh kosong")
        }
        if (form.judul!=='' && form.penulis!=='' && form.tahun!=='' && form.penerbit!=='' && form.file!=='') {
        fetch(`http://117.53.47.76/kms_backend/public/api/draft/post/${id}`,
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
        if (form.judul==='') {
            Alert.alert("Judul tidak boleh kosong")
        }
        if (form.penulis==='') {
            Alert.alert("Penulis tidak boleh kosong")
        }
        if (form.tahun==='') {
            Alert.alert("Tahun tidak boleh kosong")
        }
        if (form.penerbit==='') {
            Alert.alert("Penerbit tidak boleh kosong")
        }
        if (form.file==='') {
            Alert.alert("Link unduh tidak boleh kosong")
        }
        if (form.judul!=='' && form.penulis!=='' && form.tahun!=='' && form.penerbit!=='' && form.file!=='') {
        fetch(`http://117.53.47.76/kms_backend/public/api/draft/edit/${id}`,
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
            console.log(formsend)
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
    const [penulis, setPenulis]=useState()
    const [tahun, setTahun]=useState()
    const [penerbit, setPenerbit]=useState()
    const [halaman, setHalaman]=useState()
    const [bahasa, setBahasa]=useState()
    const [deskripsi, setDeskripsi]=useState()
    const [file, setFile]=useState()
    const onInputChange = (value, input) => {
        setFormSend({
            'judul':judul,
            'penulis':penulis,
            'tahun':tahun,
            'penerbit':penerbit,
            'halaman':halaman,
            'bahasa':bahasa,
            'deskripsi':deskripsi,
            'file':file,
            [input]: value,
            kategori:selectedValue,
        })
    }
    const onInputChangeKategori = (value, input) => {
        setSelectedValue(value)
        setFormSend({
            'judul':judul,
            'penulis':penulis,
            'tahun':tahun,
            'penerbit':penerbit,
            'halaman':halaman,
            'bahasa':bahasa,
            'deskripsi':deskripsi,
            'file':file,
            [input]: value,
        })
    }
    const [formsend, setFormSend]= useState({})
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
                setLoading(false),
                console.log(responseJson.konten.map(value=> value.kategori))
                setForm(responseJson.konten),
                setJudul(responseJson.konten.map(value=> value.judul).toString()),
                setBahasa(responseJson.konten.map(value => value.konten.map(val=> val.bahasa)).toString()),
                setDeskripsi(responseJson.konten.map(value => value.konten.map(val=> val.deskripsi)).toString()),
                setFile(responseJson.konten.map(value => value.konten.map(val=> val.file)).toString()),
                setHalaman(responseJson.konten.map(value => value.konten.map(val=> val.halaman)).toString()),
                setSelectedValue(responseJson.konten.map(value=> value.kategori).toString()),
                setPenerbit(responseJson.konten.map(value => value.konten.map(val=> val.penerbit)).toString()),
                setPenulis(responseJson.konten.map(value => value.konten.map(val=> val.penulis)).toString()),
                setTahun(responseJson.konten.map(value => value.konten.map(val=> val.tahun)).toString()) 
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
                <ShortInput value={penulis} placeholder='Penulis' onChangeText={value=>onInputChange(value, 'peulis')}/>
                <ShortInput value={tahun} placeholder='Tahun' onChangeText={value=>onInputChange(value, 'tahun')}/>
                <ShortInput value={penerbit} placeholder='Penerbit' onChangeText={value=>onInputChange(value, 'penerbit')}/>
                <ShortInput value={halaman} placeholder='Halaman' onChangeText={value=>onInputChange(value, 'halaman')}/>
                <ShortInput value={bahasa} placeholder='Bahasa' onChangeText={value=>onInputChange(value, 'bahasa')}/>
                <ShortInput value={file} placeholder='Link Unduh' onChangeText={value=>onInputChange(value, 'file')}/>
                <CardView style={styles.container} cardElevation={1} cardMaxElevation={1} cornerRadius={9}>
                            <Picker
                                itemStyle={{fontSize:14, fontWeight: 'normal', fontFamily:'Nunito', colors:colortext.gray}}
                                selectedValue={selectedValue}
                                style={{ width: 320, opacity:0.6,  marginTop:-3}}
                                onValueChange={(itemValue, itemIndex) => onInputChangeKategori(itemValue, 'kategori')}
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
                        <LongInput placeholder='Deskripsi' value={deskripsi} onChangeText={value=>onInputChange(value, 'deskripsi')}/>
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
    alignItems: "center",
    backgroundColor: colors.gray4,
    opacity:0.6,
    height: 43, 
    marginHorizontal: 14, 
    marginTop: 10,
    opacity:0.6
  }
};
export default DraftDokumen;