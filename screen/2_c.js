import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity, TextInput, Alert } from 'react-native';
import { Checkbox } from 'react-native-paper';

export default function App() {
    const [checked, setChecked] = React.useState(false);
    return (
        <View style={styles.container}>
            <View style={styles.container2}>
                <Text style={[styles.text, {fontSize: 25, marginTop: 40}]}>PASSWORD</Text>
                <Text style={[styles.text, {fontSize: 25, marginBottom: 40}]}>GENERATOR</Text>
                <View style={styles.bd}></View>

                <View style={{width: 300, marginVertical: 10}}>
                    <View style={styles.fl}>
                        <Text style={[styles.text, styles.textS, {alignItems: 'flex-start'}]}>Password length</Text>
                        <View style={{alignItems: 'flex-end', flex: 1 }}>  
                            <TextInput
                                style={{ backgroundColor: 'white', width: 100, height: 33}}
                            />
                        </View>
                    </View>

                    <View style={styles.fl}>
                        <Text style={[styles.text, styles.textS]}>Include lower case letters</Text>
                        <View style={{alignItems: 'flex-end', flex: 1 }}>  
                            <Checkbox
                                status={checked ? 'checked' : 'unchecked'}
                                onPress={() => {
                                    setChecked(!checked);
                                }}
                                color='white'
                                />
                        </View>
                    </View>

                    <View style={styles.fl}>
                        <Text style={[styles.text, styles.textS]}>Include upcase letters</Text>
                        <View style={{alignItems: 'flex-end', flex: 1 }}>  
                            <Checkbox
                                status={checked ? 'checked' : 'unchecked'}
                                onPress={() => {
                                    setChecked(!checked);
                                }}
                                color='white'
                                />
                        </View>
                    </View>

                    <View style={styles.fl}>
                        <Text style={[styles.text, styles.textS]}>Include number</Text>
                        <View style={{alignItems: 'flex-end', flex: 1 }}>  
                            <Checkbox
                                status={checked ? 'checked' : 'unchecked'}
                                onPress={() => {
                                    setChecked(!checked);
                                }}
                                color='white'
                                />
                        </View>
                    </View>

                    <View style={styles.fl}>
                        <Text style={[styles.text, styles.textS]}>Include special symbol</Text>
                        <View style={{alignItems: 'flex-end', flex: 1 }}>  
                            <Checkbox
                                status={checked ? 'checked' : 'unchecked'}
                                onPress={() => {
                                    setChecked(!checked);
                                }}
                                color='white'
                                />
                        </View>
                    </View>
                </View>
                <TouchableOpacity 
                    style={{height: 55, width: 270, justifyContent: 'center', alignItems: 'center', backgroundColor: '#3B3B98', fontSize: 18}}
                    onPress={() => Alert.alert('Simple Button pressed')}>
                    <Text style={styles.text}>GENERATE PASSWORD</Text>

                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#8787BB',
        justifyContent: 'center',
        alignItems: 'center'
    },
    container2: {
        flex: 1,
        backgroundColor: '#23235B',
        width: 350,
        height: 605,
        borderRadius: 15,
        marginVertical: 19,
        alignItems: 'center'
    },
    text: {
        color: 'white',
        fontWeight: 'bold'
    },
    textS: {
        fontSize: 20
    },
    bd: {
        width: 300,
        height: 55,
        backgroundColor: '#151537'
    },
    fl: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginVertical: 8
    },

})