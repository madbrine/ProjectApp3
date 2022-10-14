import { StatusBar } from 'expo-status-bar';
import {Alert, Button, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
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
    var variable = 0
    const date = new Date();
    const nowDate = date.getDate() + '.' + date.getMonth() + '.' + date.getFullYear();
    const addVariable = () => {variable++}
    const addNewTable = () => {
        const newDate ={
            id: Date.now(),
            datee: nowDate,
            toOffice: date.getHours() + '.' + date.getMinutes(),
            toBreak: '',
            fromBreak: '',
            fromOffice: ''
        }
        setInfoTable([newDate, ...infoTable])
    }

    const removeFromArr = (arr, ind) => {
        var newArr = []
        for (let i = 0; i< arr.length; i++) {
            if (i !== ind) {
                 newArr.push(arr[i])
            }
        }

        return newArr
    }

    const removeTable = () => {
        var arr = infoTable
        var newArr
        newArr = removeFromArr(arr, 0)
        setInfoTable(newArr)
    }
    const createTwoButtonAlert = () =>
        Alert.alert(
            "Alert Title",
            "My Alert Msg",
            [
                {text: "Cancel", onPress: () => console.log("Cancel Pressed"), style: "cancel"},
                {text: "OK", onPress: ()=> addNewTable() }
            ]);

  return (
    <View style={styles.container}>
        <Header/>
        <BigTimer/>
        <View style={{flexDirection: 'row', marginHorizontal: 3,}}>
            <ToOfficeButton onPress={createTwoButtonAlert}>To Office</ToOfficeButton>
            <ToBreakButton>To Break</ToBreakButton>
        </View>
        <View style={{flexDirection: 'row', marginHorizontal: 3,}}>
            <FromBreakButton>From Break</FromBreakButton>
            <FromOfficeButton>From Office</FromOfficeButton>
        </View>
        <View style={styles.deleteContainer}>
            <View style={styles.deleteFlex}></View>
            <TouchableOpacity style={styles.delete} onPress={() => removeTable()}>
                <Text style={{color: 'red'}}>Delete</Text>
            </TouchableOpacity>
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
  delete: {
      flexDirection: 'row-reverse',
      padding: 3,
      borderWidth: 2,
      borderRadius: 7,
      marginHorizontal: 6,
      borderColor: '#0a6249',
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1,
  },
  deleteContainer: {
      flexDirection: 'row'
  },
  deleteFlex: {
      paddingHorizontal: 20,
      flex: 3,
  }
});
