import React from 'react';
import { ImageBackground, StyleSheet, View, Image, Text } from 'react-native';

function WelcomeScreen(props) {
    return (
        <ImageBackground
            style={styles.background}
            source={{
                uri: "https://picsum.photos/200/300"
            }}>
            <View style={styles.wrapper}>
                <Image
                    style={styles.logo}
                    source={require("../assets/react-native-transparent-react-native-logo.png")} />
                <Text style={{ color: "white" }}>Sell What You Don't Need</Text>
            </View>
            <View style={styles.loginButton}></View>
            <View style={styles.registerButton}></View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center"
    },
    loginButton: {
        width: '100%',
        height: 70,
        borderRadius: 20,
        backgroundColor: "#fc5c65"
    },
    registerButton: {
        width: '100%',
        height: 70,
        borderRadius: 20,
        backgroundColor: "#4ecdc4"
    },
    logo: {
        width: 310,
        height: 100,
        borderRadius: 10,
    },
    wrapper: {
        position: "absolute",
        top: 50,
        alignItems: "center"
    }
})

export default WelcomeScreen;