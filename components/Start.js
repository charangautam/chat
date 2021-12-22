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
    const [color, setColor] = useState('#B9C6AE')

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
                                    <View style={[styles.colorButtons, { backgroundColor: '#A45D5D' }]}>
                                        <Button title='' onPress={() => setColor('#A45D5D')} />
                                    </View>
                                    <View style={[styles.colorButtons, { backgroundColor: '#125D98' }]}>
                                        <Button title='' onPress={() => setColor('#125D98')} />
                                    </View>
                                    <View style={[styles.colorButtons, { backgroundColor: '#716F81' }]}>
                                        <Button title='' onPress={() => setColor('#716F81')} />
                                    </View>
                                    <View style={[styles.colorButtons, { backgroundColor: '#116530' }]}>
                                        <Button title='' onPress={() => setColor('#116530')} />
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
                                    color='black'
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
        color: 'black',
    },
    colorButtons: {
        width: 50,
        height: 50,
        borderRadius: "50%",
        marginTop: 20
    },
    goChatButton: {
        width: "88%",
        backgroundColor: '#B4C6A6',
        marginBottom: 24,
        padding: 5,
    }
}
