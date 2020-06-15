import React, { Component, StyleSheet, View } from 'react-native';
import { colors } from "../../../utils";
import { Icon } from "react-native-elements";
import ActionButton from 'react-native-circular-action-menu';
class AddButton extends React.Component {
    mode = new Animated.Value(0);
    buttonSize = new Animated.Value(1);
     constructor(props) {
        super(props)
    }
    handlePress = () => {
        
            Animated.timing(this.buttonSize, {
                useNativeDriver: true,
            }).start();
    };

    render() {
        return (
            <View style={{flex:1}}>
                {/*Rest of App come ABOVE the action button component!*/}
                <ActionButton buttonColor={colors.red}>
                    <ActionButton.Item buttonColor={colors.red} title="New Task" onPress={() => console.log("notes tapped!")}>
                        <Icon name="description" style={styles.actionButtonIcon} />
                    </ActionButton.Item>
                    <ActionButton.Item buttonColor={colors.red} title="Notifications" >
                        <Icon name="videocam" style={styles.actionButtonIcon} />
                    </ActionButton.Item>
                    <ActionButton.Item buttonColor={colors.red} title="All Tasks">
                        <Icon name="dvr" style={styles.actionButtonIcon} />
                    </ActionButton.Item>
                </ActionButton>
            </View>
        );
    }
}

export default AddButton;
const styles = {
    actionButtonIcon: {
        fontSize: 20,
        height: 22,
        color: 'white',
      },
    button: {
        alignItems: "center",
        justifyContent: "center",
        width: 60,
        height: 60,
        borderRadius: 36,
        backgroundColor: colors.red,
        position: "absolute",
        marginTop: -45,
        shadowColor: colors.gray2,
        shadowRadius: 10,
        shadowOffset: { 
            width: 0,
            height: 10 },
        shadowOpacity: 0.4,
        borderWidth: 3,
        elevation:5,
        borderColor: "#FFFFFF",
        zIndex:1
    },
    secondaryButton: {
        position: "absolute",
        alignItems: "center",
        justifyContent: "center",
        width: 38,
        height: 38,
        borderRadius: 24,
        backgroundColor: colors.red,
    }
};