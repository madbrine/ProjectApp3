import React from 'react';
import {View} from "react-native";
import ToOfficeButton from "./buttons/ToOfficeButton";
import ToBreakButton from "./buttons/ToBreakButton";
import FromBreakButton from "./buttons/FromBreakButton";
import FromOfficeButton from "./buttons/FromOfficeButton";

const ActiveButtnos = () => {

    return (
        <View>
            <View style={{flexDirection: 'row', marginHorizontal: 3,}}>
                <ToOfficeButton onPress={createTwoButtonAlert}>To Office</ToOfficeButton>
                <ToBreakButton>To Break</ToBreakButton>
            </View>
            <View style={{flexDirection: 'row', marginHorizontal: 3,}}>
                <FromBreakButton>From Break</FromBreakButton>
                <FromOfficeButton>From Office</FromOfficeButton>
            </View>
        </View>
    );
};

export default ActiveButtnos;