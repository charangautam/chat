import React, { useState } from 'react'
import { StyleSheet, View, ImageBackground, Text, TextInput, Button, TouchableOpacity } from 'react-native';
import AppLoading from 'expo-app-loading';

// google fonts | font awesome | bg img
import {
    useFonts,
    Poppins_300Light,
    Poppins_400Regular,
    Poppins_600SemiBold,
    Poppins_700Bold,
} from '@expo-google-fonts/poppins'
import { FontAwesome5 } from '@expo/vector-icons';
import image from '../assets/backgroundImg.png'

export default function Start(props) {
    const [user, setUser] = useState('')
    const [color, setColor] = useState('#064635')

    // load google fonts 
    let [fontsLoaded] = useFonts({
        Poppins_300Light,
        Poppins_400Regular,
        Poppins_600SemiBold,
        Poppins_700Bold,
    });

    if (!fontsLoaded) {
        return <AppLoading />
    } else {
        return (
            <View style={{ flex: 1 }}>
                <ImageBackground source={image} resizeMode="cover" style={styles.image}>
                    <View style={styles.startDiv}>
                        <Text style={styles.title}>Chatter</Text>
                        <View style={[styles.goChatDiv, { backgroundColor: color }]}>
                            <View style={styles.searchContainer} >
                                <FontAwesome5 name={'user-astronaut'} size={24} />
                                <TextInput
                                    style={styles.userInput}
                                    onChangeText={setUser}
                                    value={user}
                                    placeholder='Your name'
                                    opacity={0.5}
                                />
                            </View>
                            <View style={{ width: "88%" }}>
                                <Text style={styles.chooseColor}>Choose a background color</Text>
                                <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-around" }}>
                                    <View style={[styles.colorButtons, { backgroundColor: '#8E0505' }]}>
                                        <Button title='' onPress={() => setColor('#8E0505')} />
                                    </View>
                                    <View style={[styles.colorButtons, { backgroundColor: '#22577A' }]}>
                                        <Button title='' onPress={() => setColor('#22577A')} />
                                    </View>
                                    <View style={[styles.colorButtons, { backgroundColor: '#AE431E' }]}>
                                        <Button title='' onPress={() => setColor('#AE431E')} />
                                    </View>
                                    <View style={[styles.colorButtons, { backgroundColor: '#064635' }]}>
                                        <Button title='' onPress={() => setColor('#064635')} />
                                    </View>
                                </View>
                            </View>
                            <View style={styles.goChatButton}>
                                <Button
                                    title='Go to chat'
                                    color="#FFFFFF"
                                    // pass in user and color state to Chat.js
                                    onPress={() => {
                                        props.navigation.navigate("Chat", { user: user, color: color })
                                    }}
                                />
                            </View>
                        </View>
                    </View>
                </ImageBackground>
            </View>
        )
    }
}

const styles = {
    image: {
        flex: 1,
        justifyContent: 'center'
    },
    startDiv: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    goChatDiv: {
        height: '39%',
        width: '88%',
        borderRadius: 20,
        display: "flex",
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    title: {
        fontFamily: 'Poppins_700Bold',
        fontSize: 46,
        color: '#FFFFFF',
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        width: "88%",
        borderColor: "#DDDDDD",
        borderWidth: 2,
        padding: 16,
        marginTop: 24,
    },
    userInput: {
        color: '#757083',
        marginLeft: 10,
        fontSize: 19,
        width: '100%',
    },
    chooseColor: {
        fontSize: 16,
        fontFamily: "Poppins_600SemiBold",
        color: 'white',
    },
    colorButtons: {
        width: 50,
        height: 50,
        borderRadius: "50%",
        marginTop: 20
    },
    goChatButton: {
        width: "88%",
        backgroundColor: '#212121',
        marginBottom: 24,
        padding: 5,
    }
}
