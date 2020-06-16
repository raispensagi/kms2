import React, { useReducer, useEffect, useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Splash, Login, Register, WelcomePage1, WelcomePage2, WelcomePage3, Home, DaftarNotifikasi, Tersimpan, Profil, Riwayat, Kategori, KategoriArtikel, DaftarVideo, DaftarDokumen, DaftarArtikel, Draft, Screen, DaftarDraft} from '..';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { colors, icons } from '../../utils';
import { Icon } from 'react-native-elements';
import AsyncStorage from '@react-native-community/async-storage';
import { AddButton } from '../../component/atoms';
const Tab = createBottomTabNavigator();

const NavigationBar=()=> {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: colors.gray2,
        inactiveTintColor: icons.icon,
        keyboardHidesTabBar:true
      }}
      backBehavior='none'
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Beranda',
          tabBarIcon: ({color}) => (
            <Icon iconStyle={styles.icon} name="home" size={28} color={color}/>
          ),
        }}
      />
      <Tab.Screen
        name="Tersimpan"
        component={Tersimpan}
        options={{
          tabBarLabel: 'Tersimpan',
          tabBarIcon: ({color}) => (
            <Icon iconStyle={styles.icon} name="bookmark" size={28} color={color}/>
          ),
        }}
      />
      <Tab.Screen
        name="Draft"
        component={DaftarDraft}
        options={{
          tabBarLabel: 'Draft',
          tabBarIcon: ({color}) => (
            <Icon iconStyle={styles.icon} name="description" size={28} color={color}/>
          ),
        }}
      />
      <Tab.Screen
        name="Profil"
        component={Profil}
        options={{
          tabBarLabel: 'Profil',
          tabBarIcon: ({color}) => (
            <Icon iconStyle={styles.icon} name="person" size={28} color={color}/>
          ),
        }}
      />
    </Tab.Navigator>
  );
}
const styles = {
  icon : {
      marginTop: 2,
      marginBottom: -5,
  },
  text : {
      fontFamily: 'Nunito',
      fontWeight: '600',
      fontSize: 11,
      textAlign: 'center',
      color: icons.icon,
  },
}
export default NavigationBar;
