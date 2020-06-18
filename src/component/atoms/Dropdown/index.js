import { colors, colortext } from "../../../utils";
import CardView from "react-native-cardview";
import React, { Component } from 'react';
import {
  View, Text
} from 'react-native';
import SectionedMultiSelect from 'react-native-sectioned-multi-select';

const items = [
  {  
    name: "Pendahuluan terkait Kelapa Sawit",
    id: 0,
    children: [{
        name: "Persyaratan Tumbuhan Tanaman Kelapa Sawit",
        id: 11,
      },{
        name: "Morfologi Tanaman Kelapa Sawit",
        id: 12,
      },{
        name: "Pengelolaan Lingkungan",
        id: 13,
      },{
        name: "Klasifikasi/Jenis Kelapa Sawit",
        id: 14,
      }]
  },
  {
    name: "Persiapan Lahan",
    id: 1,
    children: [{
        name: "Jenis Lahan dan Cara Pembukaan Lahan Kelapa Sawit",
        id: 20,
      },{
        name: "Pengolahan dan Pengawetan Tanah",
        id: 21,
      },{
        name: "Rancangan Kebun dan Pengembangan Infrastruktur Perkebunan",
        id: 22,
      }]
  },
  {
    name: "Pembibitan",
    id: 2,
    children: [{
        name: "Jenis Bibit dan Pengadaan Bibit",
        id: 30,
      },{
        name: "Tahapan Pembibitan",
        id: 31,
      },{
        name: "Perawatan dan Pengawasan Bibit",
        id: 32,
      }]
  },
  {
    name: "Penanaman",
    id: 3,
    children: [{
        name: "Penanaman Kelapa Sawit",
        id: 40,
      },{
        name: "Persiapan Lahan dan Penanaman Tanaman Pendukung",
        id: 41,
      }]
  },
  {
    name: "Pengendalian Hama Penyakit Gulma",
    id: 4,
    children: [{
        name: "Pengendalian Hama",
        id: 50,
      },{
        name: "Pengendalian Penyakit",
        id: 51,
      },{
        name: "Pengendalian Gulma",
        id: 52,
      },{
        name: "Gangguan Lainnya",
        id: 53,
      }]
  },
  {
    name: "Pemeliharaan Tanaman",
    id: 5,
    children: [{
        name: "Tanaman Belum Menghasilkan",
        id: 60,
      },{
        name: "Tanaman Menghasilkan",
        id: 61,
      }]
  },
  {
    name: "Panen",
    id: 6,
    children: [{
        name: "Pra-Panen",
        id: 70,
      },{
        name: "Proses Panen",
        id: 71,
      },{
        name: "Pasca Panen",
        id: 72,
      }]
  },
  {
    name: "Manajemen SDM, Keuangan, dan Pemasaran",
    id: 7,
    children: [{
        name: "Sumber Daya Manusia",
        id: 80,
      },{
        name: "Manajemen Keuangan",
        id: 81,
      },{
        name: "Manajemen Pemasaran",
        id: 82,
      }]
  },
]
class Dropdown extends Component {
  constructor(){
    super()
    this.state = {
      selectedItems: [],
    }
  }
  onSelectedItemsChange = (selectedItems) => {
    this.setState({ selectedItems });
  }

  render() {
    return (
      <View >
      
        <SectionedMultiSelect
          items={items} 
          uniqueKey='id'
          subKey='children'
          selectText='Pilih kategori'
          showDropDowns={true}
          readOnlyHeadings={false}
          onSelectedItemsChange={this.onSelectedItemsChange}
          selectedItems={this.state.selectedItems}
          single={true}
          searchPlaceholderText='Cari kategori..'
          noResultsComponent={
            <View style={{flex:1, marginTop:20, justifyContent:'center', alignItems:'center'}}>
            <Text>Kategori tidak ada</Text>
            </View>
            
          }
        />

      </View>
    );
  }
}

export default Dropdown;
const styles = {
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: colors.gray4,
    opacity:0.6,
    height: 43, 
    marginHorizontal: 14, 
    opacity:0.6
  }
};