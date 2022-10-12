import { StatusBar } from 'expo-status-bar';
import {Button, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Header from "./components/Header";
import BigTimer from "./components/BigTimer";
import React, {useState} from "react";
import InfoBarList from "./components/InfoBarList";
import ToOfficeButton from "./components/buttons/ToOfficeButton";
import ToBreakButton from "./components/buttons/ToBreakButton";
import FromBreakButton from "./components/buttons/FromBreakButton";
import FromOfficeButton from "./components/buttons/FromOfficeButton";

export default function App() {
    const [infoTable, setInfoTable] = useState([
        {   id: 1,
            datee: '10.10.2022',
            toOffice: '9:12',
            toBreak: '13:23',
            fromBreak: '14:05',
            fromOffice: '18:01'
        }
    ])

    const date = new Date();
    const nowDate = date.getDate() + '.' + date.getMonth() + '.' + date.getFullYear();



    const addNewTable = () => {
        const newDate ={
            id: Date.now(),
            datee: nowDate,
            toOffice: date.getHours() + '.' + date.getMinutes(),
            toBreak: 'sus',
            fromBreak: 'sus',
            fromOffice: 'sus1'
        }
        setInfoTable([newDate, ...infoTable])
    }
  return (
    <View style={styles.container}>
        <Header/>
        <BigTimer/>
        <View style={{flexDirection: 'row', marginHorizontal: 3,}}>
            <ToOfficeButton onPress={addNewTable}>To Office</ToOfficeButton>
            <ToBreakButton>To Break</ToBreakButton>
        </View>
        <View style={{flexDirection: 'row', marginHorizontal: 3,}}>
            <FromBreakButton>From Break</FromBreakButton>
            <FromOfficeButton>From Office</FromOfficeButton>
        </View>
        <ScrollView><InfoBarList infoTable={infoTable}/></ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    /*alignItems: 'center',
    justifyContent: 'center',*/
  },

});
