import React, { useState, useEffect } from 'react';
import {View, Text, Alert, StatusBar} from 'react-native';
import { LoginInput, ActionButton, PasswordInput } from '../../component/atoms';
import { LoginTemplate } from '../../template';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { validasiLogin } from '../../utils';
import AsyncStorage from '@react-native-community/async-storage';

const Login = ({navigation}) => {
    const [form, setForm] = useState({
        email:'',
        password:''
    });
    const onInputChange = (value, input) => {
        setForm({
            ...form,
            [input]: value,
        })
    }
    const sendData = screen => {
        if (form.email==='') {
            Alert.alert("Email tidak boleh kosong")
        }
        if (form.password==='') {
            Alert.alert("Password tidak boleh kosong")
        }
        if (form.password!=='' && form.email!=='') {
        fetch(`http://117.53.47.76/kms_backend/public/api/login`,
        {
            method:"POST",
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(form)
        })
        .then((response) => response.json())
        .then(async (data)=> {
            try {
                const value = JSON.stringify(data.access_token)
                await AsyncStorage.setItem('userToken', value)
                navigation.replace(screen)
            } catch (err) {
                Alert.alert("Email atau Password salah")
            }
        })
    }
    };
    
    
    const handleGoTo = screen => {
        navigation.replace(screen);
    };
    
    return (
        <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
            <View>
            <StatusBar barStyle="dark-content" backgroundColor='#f5f5f5' />
                <LoginTemplate/>
                <LoginInput placeholder="Email                                    " icon="email"
                    onChangeText={value=>onInputChange(value, 'email')}
                />
                <PasswordInput placeholder="Password                                 " icon="lock" 
                    onChangeText={value=>onInputChange(value, 'password')}
                    />
            </View>
            <ActionButton title="Masuk" onPress={() => sendData('KMS Sawit')}/>
            <View style={styles.wrapper}>
                <Text style={styles.textbutton} >Belum memiliki akun?</Text>
                <Text style={styles.textbutton1} onPress={() => handleGoTo('Register')}> Buat akun</Text>
            </View>
        </KeyboardAwareScrollView>
    );
};
const styles = {
    wrapper : {
        marginTop: 30,
        flexDirection:"row",
        justifyContent: 'center'
    },
    textbutton : {
        fontFamily: 'Nunito',
        fontSize: 16,
    },
    textbutton1 : {
        fontFamily: 'Nunito',
        fontWeight: 'bold',
        fontSize: 16,
    }
}

export default Login;