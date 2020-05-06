import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Splash, Login, Register, WelcomePage1, WelcomePage2, WelcomePage3, Home, DaftarNotifikasi, Tersimpan, Profil, Riwayat, Kategori, KategoriArtikel, DaftarVideo, DaftarDokumen, DaftarArtikel} from '../pages';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { colors, icons } from '../utils';
import { Icon } from 'react-native-elements';

const Tab = createBottomTabNavigator();

const NavigationBar=()=> {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: colors.gray2,
        inactiveTintColor: icons.icon
      }}
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

const Stack = createStackNavigator();

const Router = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Splash" component={Splash} options={{headerShown:false}}/>
            <Stack.Screen name="NavigationBar" component={NavigationBar} options={{headerShown:false}}/>
            <Stack.Screen name="Login" component={Login} options={{headerShown:false}}/>
            <Stack.Screen name="Register" component={Register} options={{headerShown:false}}/>
            <Stack.Screen name="WelcomePage1" component={WelcomePage1} options={{headerShown:false}}/>
            <Stack.Screen name="WelcomePage2" component={WelcomePage2} options={{headerShown:false}}/>
            <Stack.Screen name="WelcomePage3" component={WelcomePage3} options={{headerShown:false}}/>
            <Stack.Screen name="Home" component={Home} options={{headerShown:false}}/>
            <Stack.Screen name="Notifikasi" component={DaftarNotifikasi}/>
            <Stack.Screen name="Tersimpan" component={Tersimpan}/>
            <Stack.Screen name="Profil" component={Profil}/>
            <Stack.Screen name="Riwayat" component={Riwayat}/>
            <Stack.Screen name="Kategori Artikel" component={KategoriArtikel}/>
            <Stack.Screen name="Video" component={DaftarVideo}/>
            <Stack.Screen name="Dokumen" component={DaftarDokumen}/>
            <Stack.Screen name="Artikel" component={DaftarArtikel}/>
        </Stack.Navigator>
    );
};
export default Router;