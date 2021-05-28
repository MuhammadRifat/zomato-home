import React from 'react'
import { Image } from 'react-native'
import { StyleSheet, Text, View } from 'react-native'

export default function Header() {
    return (
        <View style={{ flexDirection: "row", padding: 10 }}>
            <View style={{ flex: 1 }}>
                <Text style={{fontSize:24, fontWeight: 'bold'}}>Austin</Text>
            </View>
            <View style={{ flex: 1, alignItems: 'flex-end'}}>
            <Image source={{ uri: "https://lh3.googleusercontent.com/ogw/ADGmqu8TdfdOiJqnAk7Ttfa104oDbzx-nQbzVquqq8f2Ew=s83-c-mo" }} style={{ width: 50, height: 50, borderRadius:50 }} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({})
