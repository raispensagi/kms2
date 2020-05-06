import React from 'react';
import { View , Text} from 'react-native';
import { colors, colortext } from '../../../utils';
import { ImageCircle } from '../../atoms';
import { Bell } from '../../../assets';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    listenOrientationChange as loc,
    removeOrientationListener as rol
  } from 'react-native-responsive-screen';

const Notifikasi = ({jumlah,notif, onPress, navigation}) => {
    const handleGoTo = screen => {
        navigation.navigate(screen);
    };
    return (
        <View style={styles.wrapper}>
            <ImageCircle img={Bell}/>
            <View style={{flexDirection:"column", flex:1}}>
                <View style={styles.button}>
                <View>
                    <Text style={styles.text}>{jumlah} Notifikasi baru</Text>
                </View>
                <View>
                    <Text style={styles.lihat} onPress={onPress}>Lihat</Text>
                </View>
            </View>
            <View style={{marginBottom:10}}>
                <Text style={styles.notif}>{notif.split('').slice(0, 30)}...</Text>
            </View>
            </View>
        </View>
    )
};
const styles = {
    notif: {
        color: colortext.white, 
        fontSize: hp('2'),
    },
    button: {
        flex: 1, 
        flexDirection:'row',
        justifyContent:'space-between',
    },
    text :{
        color: colortext.white,
        fontFamily: 'Nunito',
        fontWeight: '700',
        fontSize: hp('2.2'),
        marginTop: 10,
    },
    lihat :{
        marginRight:14,
        color: colortext.white,
        fontFamily: 'Nunito',
        fontWeight: '700',
        fontSize: hp('2.2'),
        marginTop: 10,
    },
    wrapper: {
        position: 'relative',
        flexDirection: 'row',
        marginHorizontal: 14,
        marginBottom:15,
        height:hp('13'),
        borderRadius: 20,
        backgroundColor: colors.orange,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.07,
        shadowRadius: 5,
        elevation: 4
    },
}
export default Notifikasi;