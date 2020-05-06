import React, { useState } from 'react';
import {View, Text} from 'react-native';
import { LoginInput, ActionButton } from '../../component/atoms';
import { LoginTemplate } from '../../template';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { validasiLogin } from '../../utils';

const Login = ({navigation}) => {
    const [form, setForm] = useState({
        email:'',
        password:''
    });
    const onInputChange = (value, input) => {
        setForm({
            ...form,
            [input]: validasiLogin(value),
        })
    }
    const sendData = screen => {
        console.log('kirim data', form);
        navigation.replace(screen);
    };
    const handleGoTo = screen => {
        navigation.navigate(screen);
    };
    return (
        <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
            <View>
                <LoginTemplate/>
                <LoginInput placeholder="Email                                    " icon="email"
                    onChangeText={value=>onInputChange(value, 'email')}
                />
                <LoginInput placeholder="Password                                 " icon="lock" 
                    onChangeText={value=>onInputChange(value, 'password')}
                    secureTextEntry={true}/>
            </View>
            <ActionButton title="Masuk" onPress={() => sendData('NavigationBar')}/>
            <View style={styles.wrapper}>
                <Text>Belum memiliki akun?</Text>
                <Text style={styles.textbutton} onPress={() => handleGoTo('Register')}> Buat akun</Text>
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
        fontWeight: 'bold',
        fontSize: 14,
    }
}

export default Login;