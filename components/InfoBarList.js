import React from 'react';
import InfoBar from "./InfoBar";
import {ScrollView, StyleSheet, Text, View} from 'react-native';

const InfoBarList = (props) => {
    return (
        <View style={{paddingBottom: 45}}>
            {props.infoTable.map((info, key) =>
                <InfoBar infos={info} key={key}></InfoBar>
            )}
        </View>
    );
};

export default InfoBarList;