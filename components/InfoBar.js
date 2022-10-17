import React, {useState} from 'react';
import {Button, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';


const InfoBar = (props) => (
    <View style={styles.container}>
        <View style={styles.todayContainer}>
            <View></View>
            <Text style={styles.today}>{props.infos.datee}</Text>
        </View>

        <View style={styles.tableValue}>
            <View style={styles.tableFlex}><Text style={{color:'#00cce7'}}>To Office</Text></View>
            <View style={styles.tableFlex}><Text style={{color:'#0CE887'}}>To Break</Text></View>
            <View style={styles.tableFlex}><Text style={{color:'#E8A617'}}>From Break</Text></View>
            <View style={styles.tableFlexEnd}><Text style={{color:'#E83517'}}>From Office</Text></View>
        </View>
        <View style={styles.tableValue}>
            <View style={styles.tableFlex1}><Text style={{color:'#7a7a7a'}}>{props.infos.toOffice}</Text></View>
            <View style={styles.tableFlex1}><Text style={{color:'#7a7a7a'}}>{props.infos.toBreak}</Text></View>
            <View style={styles.tableFlex1}><Text style={{color:'#7a7a7a'}}>{props.infos.fromBreak}</Text></View>
            <View style={styles.tableFlex1End}><Text style={{color:'#7a7a7a'}}>{props.infos.fromOffice}</Text></View>
        </View>
    </View>
)





export default InfoBar;

const styles = StyleSheet.create({
    container: {
        margin: 7,
        borderWidth: 1,
        borderColor: '#fff',
        borderRadius: 7,
        backgroundColor: '#efeeee',
        shadowColor: "#000",
        shadowOffset: {width: 0,height: 5,},
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 10,
    },
    today: {
        color: "white",
        flex: 2,

    },
    todayContainer: {
        flexDirection: 'column',
        backgroundColor: '#8bb4b2',
        borderTopLeftRadius: 6,
        borderTopRightRadius: 6,
        padding: 5,
        shadowColor: "#000",
        shadowOffset: {width: 0,height: 5,},
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 10,
    },
    upShadow: {
        height: 2,
        width: 335,
        shadowColor: "#fff",
        shadowOffset: {width: 0,height: 5,},
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 10,
    },
    tableValue: {
        flexDirection: "row",
    },
    tableFlex: {
        flex: 1,
        padding: 5,
        borderRightWidth: 1,
        borderColor: '#ababab',
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
        borderColor: '#ababab',
        borderTopWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        color:'#00cce7',
    },
    tableFlex1End: {
        flex: 1,
        padding: 5,
        borderTopWidth: 1,
        borderColor: '#ababab',
        alignItems: 'center',
        justifyContent: 'center',
    }
})