import React from 'react';
import InfoBar from "./InfoBar";
import {ScrollView, StyleSheet, Text, View} from 'react-native';

const InfoBarList = ({infoTable}) => {
    return (
        <View>
            {infoTable.map(infos =>
                <InfoBar infos={infos} key={infos.id}/>
            )}
        </View>
    );
};

export default InfoBarList;