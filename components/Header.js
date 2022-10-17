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
        backgroundColor: '#efeeee',
        color: '#8bb4b2',
        fontFamily: 'serif',
        fontWeight: 'bold',
        shadowColor: "#000",
        shadowOffset: {width: 0,height: 5,},
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 10,
    }
})