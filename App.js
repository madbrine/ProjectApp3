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
    let turnButton = 1
    let variable = 0
    const date = new Date();
    const nowDate = date.getDate() + '.' + date.getMonth() + '.' + date.getFullYear();
    const addVariable = () => {variable++}
    const addNewTable = () => {
        let min = date.getMinutes()
        if (min<10) {min = '0'+min}
        const newDate ={
            id: Date.now(),
            datee: nowDate,
            toOffice: date.getHours() + ':' + min,
            toBreak: '',
            fromBreak: '',
            fromOffice: ''
        }
        //'21-05-2022'
        //for inside if arr[i].datee == chosenDay.datee {arr[i].toBreak = let nowDate}
        setInfoTable([newDate, ...infoTable])
        setToBr()
    }
    const addToBreak = () => {
        var arr = infoTable
        var newToBreak = addToBreakInArray(arr,0)
        setInfoTable(newToBreak)
    }
    const addToBreakInArray = (arr, ind) => {
        var newArr = []
        for (let i = 0; i<arr.length;i++){
            if(i =! ind) {
                newArr.push(arr[i])
            } else {
                newArr[i] ={id: arr[i].id,
                    datee: nowDate,
                    toOffice: arr[i].toOffice,
                    toBreak: date.getHours() + '.' + date.getMinutes(),
                    fromBreak: '',
                    fromOffice: ''}
            }
        }
    }
    const addToBreakInTable = () => {
        var arr = infoTable
        var newArr
        newArr = addToBreakInArray(arr, 0)
        setInfoTable(newArr)
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
    const AlertToOffice = () => {
        Alert.alert("Are you sure?","Confirm action",
            [{text: "Cancel", style: "cancel"},
                    {text: "Yes", onPress: ()=> addNewTable()},])
    }
    const AlertToBreak = () => {
        Alert.alert("Are you sure?","Confirm action",
            [{text: "Cancel", style: "cancel"},
                {text: "Yes", onPress: ()=> addToBreakInTable()},])
    }
    const [turn, setTurn] = useState(<ToOfficeButton onPress={AlertToOffice}>To Office</ToOfficeButton>)
    const setToBr = () => {setTurn(<ToBreakButton onPress={AlertToBreak}>To Break</ToBreakButton>)}
    const setFrBr = () => {setTurn(<ToFromButton>From Break</ToFromButton>)}
    function TurnButtons(){return turn}
    function ActiveButtons(){

    }

  return (
    <View style={styles.container}>
        <Header/>
        <BigTimer/>


        <View style={styles.buttonsContainer}>
            <TurnButtons/>
            <View style={styles.delete}>
                <View style={styles.delete2}>
                        <TouchableOpacity onPress={() => removeTable()}>
                            <Text style={{color: '#7a7a7a'}}>Delete</Text>
                        </TouchableOpacity>
                </View>
            </View>
        </View>
        <ScrollView><InfoBarList infoTable={infoTable}/></ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#efeeee',
    /*alignItems: 'center',
    justifyContent: 'center',*/
  },
  delete: {
      flexDirection: 'row',
      padding: 0,
      borderRadius: 70,
      marginHorizontal: 49,
      marginBottom: 40,
      //alignItems: 'center',
      //justifyContent: 'center',
      width: 40,
      height: 40,
      shadowColor: "#fff",
      shadowOffset: {width: 0, height: 12,},
      shadowOpacity: 0.58,
      shadowRadius: 16.00,
      elevation: 24,
  },
    delete2: {
        borderWidth: 1,
        borderRadius: 70,
        borderColor: '#fff',
        backgroundColor: '#efeeee',
        alignItems: 'center',
        justifyContent: 'center',
        width: 70,
        height: 70,
        shadowColor: "#000",
        shadowOffset: {width: 0,height: 5,},
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 10,
    },
  buttonsContainer: {
      flexDirection: 'row',
  },
  deleteFlex: {
      paddingHorizontal: 20,
      flex: 3,
  }
});
