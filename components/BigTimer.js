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
        <View style={styles.container}>
            <Text style={styles.timer}>{renderHours}:{renderMinutes}:{renderSeconds}</Text>
            <View style={styles.means}>
                <Text style={styles.mean}>hours</Text>
                <Text style={styles.mean}>minutes</Text>
                <Text style={styles.mean}>seconds</Text>
            </View>
        </View>
    );
};

export default BigTimer;

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    timer: {
        fontSize: 50,
        fontFamily: 'sans-serif-thin'
    },
    means: {
        flexDirection: 'row',
        paddingLeft: 8,
    },
    mean: {
        flexDirection: 'row',
        paddingRight: 20,
    }
})