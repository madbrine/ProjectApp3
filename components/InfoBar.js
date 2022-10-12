import React, {useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';


const InfoBar = (props) => (
    <View style={styles.container}>
        <Text style={styles.today}>{props.infos.datee}</Text>
        <View style={styles.tableValue}>
            <View style={styles.tableFlex}><Text>To Office</Text></View>
            <View style={styles.tableFlex}><Text>To Break</Text></View>
            <View style={styles.tableFlex}><Text>From Break</Text></View>
            <View style={styles.tableFlexEnd}><Text>From Office</Text></View>
        </View>
        <View style={styles.tableValue}>
            <View style={styles.tableFlex1}><Text>{props.infos.toOffice}</Text></View>
            <View style={styles.tableFlex1}><Text>{props.infos.toBreak}</Text></View>
            <View style={styles.tableFlex1}><Text>{props.infos.fromBreak}</Text></View>
            <View style={styles.tableFlex1End}><Text>{props.infos.fromOffice}</Text></View>
        </View>
    </View>
)





export default InfoBar;

const styles = StyleSheet.create({
    container: {
        margin: 7,
        borderWidth: 1,
        borderRadius: 7,
    },
    today: {
        backgroundColor: '#0a6249',
        padding: 5,
        borderTopLeftRadius: 6,
        borderTopRightRadius: 6,
        color: "white"
    },
    tableValue: {
        flexDirection: "row",
    },
    tableFlex: {
        flex: 1,
        padding: 5,
        borderRightWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    tableFlexEnd: {
        flex: 1,
        padding: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    tableFlex1: {
        flex: 1,
        padding: 5,
        borderRightWidth: 1,
        borderTopWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    tableFlex1End: {
        flex: 1,
        padding: 5,
        borderTopWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})