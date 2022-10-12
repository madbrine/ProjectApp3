import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from "react-native";

const FromOfficeButton = ({children, ...props}) => {
    return (
        <TouchableOpacity {...props} style={styles.toBreak.container}>
            <Text style={styles.toBreak.text}>
                {children}
            </Text>
        </TouchableOpacity>
    );
};

export default FromOfficeButton;

const styles = StyleSheet.create({
        atOffice: {
            container: {
                padding: 10,
                margin: 4,
                justifyContent: 'center',
                flex: 1,
                borderRadius: 7,
                borderWidth: 2,
                borderColor: '#0a6249',
                alignItems: 'center',
            },
            text: {
                fontSize: 25,
            }
        },
        toBreak: {
            container: {
                padding: 10,
                margin: 4,
                justifyContent: 'center',
                flex: 1,
                borderRadius: 7,
                borderWidth: 2,
                borderColor: '#0a6249',
                alignItems: 'center',
            },
            text: {
                fontSize: 25,
            }
        }
    }
)