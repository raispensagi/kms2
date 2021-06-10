import React, { useState, useEffect } from 'react';
import {View, Text, Alert, StatusBar} from 'react-native';
import { LoginInput, ActionButton, PasswordInput } from '../../component/atoms';
import { LoginTemplate } from '../../template';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { validasiLogin } from '../../utils';
import AsyncStorage from '@react-native-community/async-storage';

const Loginmenu = ({navigation}) => {
    const handleGoTo = screen => {
        navigation.replace(screen);
    };
    return (
        <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
        <View>
        <StatusBar barStyle="dark-content" backgroundColor='#f5f5f5' />
            <LoginTemplate/>
        </View>
        <View style={styles.wrapper}>
            <Text style={styles.textbutton}>Sudah memiliki akun?</Text>
        </View>
        <ActionButton title="Masuk" onPress={() => handleGoTo('Login')}/>
        <View style={styles.wrapper1}>
            <Text style={styles.textbutton}>Belum memiliki akun?</Text>
        </View>
        <ActionButton title="Daftar" onPress={() => handleGoTo('Register')}/>
    </KeyboardAwareScrollView>
    );
};
const styles = {
    wrapper : {
        marginTop: 30,
        flexDirection:"row",
        justifyContent: 'center',
    },
    wrapper1 : {
        marginTop: 10,
        flexDirection:"row",
        justifyContent: 'center',
    },
    textbutton : {
        fontFamily: 'Nunito',
        fontSize: 16,
    }
}

export default Loginmenu;