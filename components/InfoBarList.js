import React from 'react';
import InfoBar from "./InfoBar";
import {ScrollView, StyleSheet, Text, View} from 'react-native';

const InfoBarList = (props) => {
    return (
        <View>
            {props.infoTable.map(infos =>
                <InfoBar infos={infos} key={infos.id}></InfoBar>
            )}
        </View>
    );
};

export default InfoBarList;