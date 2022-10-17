import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

var hours = 0
var minutes = 0
var seconds = 0
var renderHours = hours
var renderMinutes = minutes
var renderSeconds = seconds
const BigTimer = () => {
    if(hours<10) {
        renderHours = '0' + hours
    }
    if(minutes<10) {
        renderMinutes = '0' + minutes
    }
    if(seconds<10) {
        renderSeconds = '0' + seconds
    }
    return (
        <View style={{alignItems: 'center',
            justifyContent: 'center', margin: 20}}>
            <View style={styles.containerOut}>
                <View style={styles.container}>
                    <View style={styles.container2}>
                        <Text style={styles.timer}>{renderHours}:{renderMinutes}:{renderSeconds}</Text>
                    </View>
                </View>
            </View>
        </View>

    );
};

export default BigTimer;

const styles = StyleSheet.create({
    container: {
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 22,
        borderRadius: 120,
        borderColor: '#efeeee',
        width: 230,
        height: 230,

    },
    containerOut: {
        borderWidth: 1, borderRadius: 120, borderColor: '#fff',
        shadowColor: "#fff",
        shadowOffset: {width: 0, height: 12,},
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        elevation: 24,
    },
    container2: {
        backgroundColor: '#efeeee',
        width: 186,
        height: 186,
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: "#fff",
        shadowOffset: {width: 0, height: 12,},
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        elevation: 24,
    },
    timer: {
        color: "#7a7a7a",
        fontSize: 38,
        fontFamily: 'sans-serif-medium',
        fontWeight: 'bold',
    },
})