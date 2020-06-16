import React, { useState } from "react";
import { View,  StyleSheet } from "react-native";
import {Picker} from '@react-native-community/picker';
import { colors, colortext } from "../../../utils";
import CardView from "react-native-cardview";
const Dropdown = () => {
  const [selectedValue, setSelectedValue] = useState();
  return (
    <CardView style={styles.container} cardElevation={1} cardMaxElevation={1} cornerRadius={9}>
      <Picker
        itemStyle={{fontSize:14, fontWeight: 'normal', fontFamily:'Nunito', colors:colortext.gray}}
        selectedValue={selectedValue}
        style={{ width: 320, opacity:0.6,  marginTop:-3}}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
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
  );
}

export default Dropdown;
const styles = StyleSheet.create({
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
});