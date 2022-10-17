import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";

const FromBreakButton = ({children, ...props}) => {
    return (
        <View style={styles.delete}>
            <View style={styles.delete2}>
                <TouchableOpacity {...props}>
                    <Text style={{color: '#7a7a7a'}}>
                        {children}
                    </Text>
                </TouchableOpacity>
            </View>
        </View>

    );
};

export default FromBreakButton;

const styles = StyleSheet.create({
        delete: {
            flexDirection: 'row',
            padding: 0,
            borderRadius: 70,
            marginHorizontal: 52,
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
    }
)