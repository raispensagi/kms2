import React, { useReducer, useEffect, useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Splash, Login, Register, WelcomePage1, WelcomePage2, WelcomePage3, Home, DaftarNotifikasi, Tersimpan, Profil,  Kategori, KategoriArtikel, DaftarVideo, DaftarDokumen, DaftarArtikel, NavigationBar, PageVideo, PageDokumen, PageArtikel, TambahArtikel, TambahDokumen, TambahVideo, Screen, Draft, TambahNotifikasi, DaftarDraft, DraftDokumen, DraftArtikel, DraftVideo, EditProfil, Loginmenu} from '../pages';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { colors, icons } from '../utils';
import { Icon } from 'react-native-elements';
import PageNotifikasi from '../pages/PageNotifikasi';
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
            <Stack.Screen name="WelcomePage1" component={WelcomePage1} options={{headerShown:false}}/>
            <Stack.Screen name="WelcomePage2" component={WelcomePage2} options={{headerShown:false}}/>
            <Stack.Screen name="WelcomePage3" component={WelcomePage3} options={{headerShown:false}}/>
            <Stack.Screen name="KMS Sawit" component={NavigationBar}/>
            <Stack.Screen name="Login" component={Login} options={{headerShown:false}}/>
            <Stack.Screen name="Loginmenu" component={Loginmenu} options={{headerShown:false}}/>
            <Stack.Screen name="Register" component={Register} options={{headerShown:false}}/>
            <Stack.Screen name="Beranda" component={Home} options={{headerShown:false}}/>
            <Stack.Screen name="Daftar Pengumuman" component={DaftarNotifikasi}/>
            <Stack.Screen name="Tersimpan" component={Tersimpan}/>
            <Stack.Screen name="Profil" component={Profil}/>
            <Stack.Screen name="Kategori Artikel" component={KategoriArtikel}/>
            <Stack.Screen name="Daftar Video" component={DaftarVideo}/>
            <Stack.Screen name="Daftar E-Dokumen" component={DaftarDokumen}/>
            <Stack.Screen name="Daftar Artikel" component={DaftarArtikel}/>
            <Stack.Screen name="Video" component={PageVideo}/>
            <Stack.Screen name= 'EDokumen' component={PageDokumen}/>
            <Stack.Screen name= 'Artikel' component={PageArtikel}/>
            <Stack.Screen name= 'Pengumuman' component={PageNotifikasi}/>
            <Stack.Screen name= 'Tambah Artikel' component={TambahArtikel}/>
            <Stack.Screen name= 'Tambah E-Dokumen' component={TambahDokumen}/>
            <Stack.Screen name= 'Tambah Video' component={TambahVideo}/>
            <Stack.Screen name= 'Screen' component={Screen}/>
            <Stack.Screen name= 'Daftar Draft' component={DaftarDraft}/>
            <Stack.Screen name= 'Edit Draft EDokumen' component={DraftDokumen}/>
            <Stack.Screen name= 'Edit Draft Artikel' component={DraftArtikel}/>
            <Stack.Screen name= 'Edit Draft Video' component={DraftVideo}/>
            <Stack.Screen name= 'Tambah Pengumuman' component={TambahNotifikasi}/>
            <Stack.Screen name= 'Edit Profil' component={EditProfil}/>
        </Stack.Navigator>
    );
};
export default Router;