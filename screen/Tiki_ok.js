import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity, TextInput, Image } from 'react-native';

export default function App() {
    return (
        <View style={[styles.container]}>
            <View style={[styles.top]}>
                <View>
                    <View style={[styles.fl, {marginHorizontal: 10, marginVertical: 10}]}>
                        <Image
                            source={require('../img/sach.png')} // Đường dẫn tới tệp hình ảnh trong thư mục img
                            style={styles.image}
                        />
                        <View style={{marginHorizontal: 20}}>
                            <Text style={[styles.fs12, styles.fwb]}>Nguyên hàm tích phân và ứng dụng</Text>
                            <Text style={[styles.fs12, styles.fwb, {marginVertical: 10}]}>Cung cấp bởi Tiki Trading</Text>
                            <Text style={[styles.fs18, styles.fwb, styles.fcr]}>141.800 đ</Text>
                            <Text style={[styles.fs12, styles.fwb, styles.fcg, {marginVertical: 10,  textDecorationLine: 'line-through'} ]}>141.800 đ</Text>

                            <View style={[styles.fl]}>
                                <TouchableOpacity
                                    style={[ styles.center,{width: 16, height: 16, backgroundColor: 'gray'}]}
                                >
                                    <Text>-</Text>
                                </TouchableOpacity>

                                <Text style={[styles.fs12, styles.fwb]}>   1   </Text>

                                <TouchableOpacity
                                    style={[ styles.center,{width: 16, height: 16, backgroundColor: 'gray'}]}
                                >
                                    <Text>+</Text>
                                </TouchableOpacity>

                                <View style={{bosition: 'absolute', right: -130}}>
                                    <Text  style={[styles.fcb]}>Mua sau</Text>
                                </View>
                            </View>
                        </View>
                    </View>



                    <View style={[styles.fl,{marginVertical: 10, marginHorizontal: 10} ]}>
                        <Text style={[styles.fs12, styles.fwb, {marginRight: 20}]}>Mã giảm giá đã lưu</Text>
                        <Text style={[styles.fcb]}>Xem tại đây</Text>
                    </View>

                </View >

                <View style={[styles.fl, {marginHorizontal: 10, marginVertical: 30}]}>
                    <View style={[styles.fl, {borderWidth: 1, borderColor: 'gray', height: 45, width: 208, alignItems: 'center'}]}>
                        <View style={{width: 32, height: 16, backgroundColor: 'yellow', marginHorizontal: 10}}>

                        </View>
                        <Text style={[styles.fs18]}>Mã giảm giá</Text>
                    </View>

                    <View style={{alignItems:'flex-end', flex: 1}}>
                        <TouchableOpacity
                            style={[styles.center,{backgroundColor: '#0A5EB7', height: 45, width: 99}]}
                        >
                            <Text style={[styles.fs20, styles.fcw]}>Áp dụng</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </View>

            <View style={[styles.fl, styles.cWL, {paddingHorizontal: 10, marginVertical: 15, paddingVertical: 20}]}>
                <Text style={[styles.fs12]}>Bạn có phiếu quà tặng Tiki/Got it/ Urbox?</Text>
                <Text style={[styles.fcb]}>Nhập tại đây?</Text>
            </View>

            <View style={[styles.fl, styles.cWL, {paddingHorizontal: 10,paddingVertical: 20}]}>
                <Text style={[styles.fs18]}>Tạm tính</Text>
                <View style={{alignItems:'flex-end', flex: 1}}>
                    <Text style={[styles.fs18, styles.fcr]}>141.800 đ</Text>
                </View>

            </View>

            <View style={[styles.cWL, styles.bottom]}>
                <View style={[styles.fl, {paddingHorizontal: 10, marginVertical:10}]}>
                    <Text style={[styles.fs18, styles.fcg]}>Thành tiền</Text>
                    <View style={{alignItems:'flex-end', flex: 1}}>
                        <Text style={[styles.fs20, styles.fcr]}>141.800 đ</Text>
                    </View>

                </View>
                <View style={styles.center}>
                    <TouchableOpacity
                        style={[styles.center,{height: 45, width: 365, backgroundColor: 'red', marginVertical:10}]}
                    >
                        <Text style={[styles.fs20, styles.fcw]}>TIẾN HÀNH ĐẶT HÀNG</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        width: 104,
        height: 127
    },
    center: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    container: {
        flex: 1,
        backgroundColor: '#C4C4C4'
    },
    top: {
        backgroundColor: 'white'
    },
    fl: {
        flexDirection: 'row'
    },
    cWL: {
        backgroundColor: 'white'
    },
    bottom: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
    },
    fcr: {
        color: 'red'
    },
    fwb: {
        fontWeight: 'bold'
    },
    fcg: {
        color: 'gray',
        fontWeight: 'bold'
    },
    fcb: {
        color: 'blue',
        fontSize: 12,
        fontWeight: 'bold'
    },
    fcw: {
        color: 'white',
        fontWeight: 'bold'
    }, 
    fs12: {
        fontSize: 12,
        fontWeight: 'bold',
    },
    fs18: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    fs20: {
        fontSize: 20,
        fontWeight: 'bold'
    },

})