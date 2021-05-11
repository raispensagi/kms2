import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, ActivityIndicator, SafeAreaView, FlatList } from 'react-native';
import { ProfilBeranda, ActionButton, BoxKontenRiwayat, AddButton } from '../../component/atoms';
import AsyncStorage from '@react-native-community/async-storage';
import { RefreshControl } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { colors, colortext } from '../../utils';

const Profil = ({navigation}) => {
    const handleGoTo = async (screen) => {
        const data = await AsyncStorage.removeItem('userToken')
        fetch(`http://117.53.47.76/kms_backend/public/api/logout`,
        {
            method:"POST",
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
        })
        .then(() => {
            navigation.replace(screen)
        })
        
    };
    const [email, setEmail]= useState()
    const [nama, setNama]= useState()
    const [peran, setPeran]=useState();
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
            setPeran(responseJson.data.map(value=> value.peran).toString())
            console.log(responseJson.data)
        }
        )
        .catch((error) => {
            console.error(error);
        });
    };
    const [konten, setKonten]= useState()
    const kontenpost = async (screen) => {
        const token = await AsyncStorage.getItem('userToken')
        const userToken = JSON.parse(token)          
        fetch(`http://117.53.47.76/kms_backend/public/api/post/my`,
        {
            method:"GET",
            headers: new Headers ( {
                Authorization : 'Bearer ' + userToken
            })
        })
        .then((response) => response.json())
        .then((responseJson) => {
            setLoading(false)
            setKonten(responseJson.konten.reverse())
        }
        )
        .catch((error) => {
            console.error(error);
        });
    };
    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            profil();
            kontenpost();
    
          console.log("kepanggil dari sini")
        });
        return unsubscribe;
    }, [navigation]);

    const [refreshing,setRefreshing]= useState(false)
      const onRefresh = useCallback( async ()=> {
        setRefreshing(true);
        try {
            kontenpost();
            profil();
            setRefreshing(false)
        }  
        catch {
            console.error();
        }             

      }, [refreshing])
    return(
        <SafeAreaView>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={konten}
                refreshControl={
                    <RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>
                }
                renderItem={({item}) => 
                    <BoxKontenRiwayat 
                            kategori={item.tipe} 
                            title={item.judul}
                            isi={item.penulis.map(value=>value.nama)}
                            onPressKonten={()=> navigation.navigate(item.tipe.toString(), {id:item.id})}
                                    />}
                keyExtractor={(item) => item.id.toString()}
                ListHeaderComponent={
                    <>
                    <ProfilBeranda fullName={nama} email={email} role={peran}/>
                    <View style={{marginHorizontal:10, marginVertical:10, flexDirection:'row', justifyContent:'space-around'}}> 
                        <TouchableOpacity activeOpacity={0.8} onPress={()=> navigation.navigate('Edit Profil')}
                            style={styles.button2}>
                            <Text style={styles.text}> Edit Profil </Text>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.8} onPress={()=> handleGoTo('WelcomePage1')}
                            style={styles.button1}>
                            <Text style={styles.text}> Keluar </Text>
                        </TouchableOpacity>
                    </View>
                    </>
                }
            />
                
        </SafeAreaView>
    )
};
const styles = {
    button1 : {
        backgroundColor: colors.red,
        borderRadius : 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 2,
        width:150
    },
    button2 : {
        backgroundColor: colors.green4,
        borderRadius : 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 2,
        width:150
    },
    text : {
        color:colortext.white, 
        fontSize:16, 
        fontFamily: 'Nunito', 
        fontWeight: 'bold', 
        paddingVertical: 10, 
        paddingHorizontal: 29,
        textTransform:'capitalize',
        textAlign: 'center'
    }
}
export default Profil;