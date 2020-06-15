import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import ActionButton from 'react-native-action-button';
import { colors } from '../../../utils';
import { Icon } from 'react-native-elements';
const AddButton = () => {
    return(
        <View style={{flex:1}}>
            {/* Rest of the app comes ABOVE the action button component !*/}
            <ActionButton   backgroundTappable={true} 
                            buttonColor={colors.red} 
                            spacing={7} 
                            active={true}
                            offsetX={20}
                            offsetY={20}
                            buttonTextStyle={{fontSize:30}}>
                <ActionButton.Item  spaceBetween={10} 
                                    textContainerStyle={{borderRadius:5}} 
                                    buttonColor={colors.red} title="Artikel" 
                                    onPress={ ()=>console.log('lala')}
                                    textStyle={{fontFamily:'Nunito'}}>
                    <Icon name="description" color={colors.white1} size={21} />
                </ActionButton.Item>
                <ActionButton.Item  spaceBetween={10} 
                                    textContainerStyle={{borderRadius:5}} 
                                    buttonColor={colors.orange} 
                                    title="Video" 
                                    onPress={() => console.log("notes tapped!")}
                                    textStyle={{fontFamily:'Nunito'}}
                                    >
                    <Icon name="videocam" color={colors.white1} size={23} />
                </ActionButton.Item>
                <ActionButton.Item  spaceBetween={10} 
                                    textContainerStyle={{borderRadius:5}} 
                                    buttonColor={colors.green4} 
                                    title="E-Dokumen" 
                                    onPress={() => console.log("notes tapped!")}
                                    textStyle={{fontFamily:'Nunito'}}>
                    <Icon name="dvr" color={colors.white1} size={21} />
                </ActionButton.Item>
            </ActionButton>
        </View>
    )
}
export default AddButton;
const styles = StyleSheet.create({
    actionButtonIcon: {
      fontSize: 20,
      height: 22,
      color: 'white',
    },
  });