import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity, TextInput, Image } from 'react-native';


import Icon from 'react-native-vector-icons/Entypo';


export default function App() {
    return (
        <View style={{backgroundColor: 'white'}}>
            <View style={[styles.top, {marginHorizontal: 10, marginVertical: 10}]}>
                <Image
                    source={require('../img/usb.png')} // Đường dẫn tới tệp hình ảnh trong thư mục img
                    style={styles.image}
                />
                <Text style={[styles.text, { fontSize: 18 }]}>
                    USB Bluetooth Music Receiver HJX-001-Biến loa thường thành loa bluetooth
                </Text>
            </View>
            <View style={[styles.center, {marginTop: 30}]}>
                <Text style={[styles.text, { fontSize: 16 }]}>Cực kỳ hài lòng</Text>
                <View style={[styles.top, {marginVertical: 15}]}>
                    <Icon
                        name="star"
                        type="material"
                        color="yellow"
                        size={45}
                    />
                    <Icon
                        name="star"
                        type="material"
                        color="yellow"
                        size={45}
                    />
                    <Icon
                        name="star"
                        type="material"
                        color="yellow"
                        size={45}
                    />
                    <Icon
                        name="star"
                        type="material"
                        color="yellow"
                        size={45}
                    />
                    <Icon
                        name="star"
                        type="material"
                        color="yellow"
                        size={45}
                    />
                </View >
                <View style={[styles.btn, styles.center, {borderRadius: 10}]}>

                    <View>
                        <TouchableOpacity
                            style={[{ justifyContent: 'center', flexDirection: 'row', height: 60, alignItems: 'center' }]}
                            onPress={() => Alert.alert('Simple Button pressed')}
                        >
                            <Icon
                                name="camera"
                                type="material"
                                color="black"
                                size={35}
                                style={{ paddingHorizontal: 12 }}
                            />
                            <Text style={[styles.text, { fontSize: 18 }]}>Thêm hình ảnh</Text>
                        </TouchableOpacity>
                    </View>

                </View>
                <View style={{marginVertical: 15}}>
                    <View style={{borderkColor: "gray", borderWidth: 1, borderRadius: 10}}>
                        <TextInput
                            placeholder="Hãy chia sẽ những điều mà bạn thích về sản phẩm"
                            autoCapitalize="none"
                            numberOfLines={9}
                            multiline={true}
                            style={{
                                width: 350,
                                paddingHorizontal: 20,
                                paddingVertical: 10,
                                fontSize: 16,
                                fontWeight: 'bold',
                                color: 'gray'
                            }}
                        />
                        <View style={styles.text2}>
                            <Text style={[styles.text, {fontSize: 12, marginRight: 10}]}>
                                https://meet.google.com/nsj-ojwi-xpp
                            </Text>
                        </View>

                    </View>
                </View>
                <View>
                    <TouchableOpacity
                        style={[{ backgroundColor: '#0D5DB6' }, { width: 350, height: 45, justifyContent: 'center', alignItems: 'center', borderRadius: 10 }]}
                        onPress={() => Alert.alert('Simple Button pressed')}
                    >
                        <Text style={[styles.text, { fontSize: 18 }, { color: 'white' }]}>Gửi</Text>
                    </TouchableOpacity>
                </View>

            </View>


        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        width: 70,
        height: 70,
    },
    top: {
        flexDirection: 'row'
    },
    btn: {
        flexDirection: 'row',
        alignItems: 'center',
        width: 350,
        height: 45,
        borderWidth: 1,
        borderColor: 'blue',

    },
    text: {
        fontWeight: 'bold'
    },
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'

    },
    text2: {
        flex:1,
        justifyContent: 'flex-end', 
        alignItems: 'flex-end', 
    }
})