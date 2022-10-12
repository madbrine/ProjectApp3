import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Header = () => {
    return (
        <View>
            <Text style={styles.logo}>Arbeiten Clocker</Text>
        </View>
    );
};

export default Header;

const styles = StyleSheet.create({
    logo: {
        paddingTop: 35,
        paddingBottom: 15,
        paddingLeft: 15,
        fontSize: 25,
        alignItems: 'center',
        backgroundColor: '#0a6249',
        color: 'white',
        fontFamily: 'serif',
        fontWeight: 'bold'
    }
})