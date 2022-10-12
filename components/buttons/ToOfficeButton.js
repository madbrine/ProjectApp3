import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from "react-native";

const ToOfficeButton = ({children, ...props}) => {
    return (
        <TouchableOpacity {...props} style={styles.atOffice.container}>
            <Text style={styles.atOffice.text} >
                {children}
            </Text>
        </TouchableOpacity>
    );
};

export default ToOfficeButton;

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