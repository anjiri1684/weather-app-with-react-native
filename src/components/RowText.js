
import React from "react";
import { Text, View,  } from "react-native";

const RowText = (props) => {
    const {containerStyles, messageOnestyles, messageTwoStyles, messageOne, messageTwo} = props
    return(
        <View style={containerStyles}>
            <Text style={messageOnestyles}>{messageOne}</Text>
            <Text style={messageTwoStyles}>{messageTwo}</Text>
        </View>
    )
}

export default RowText