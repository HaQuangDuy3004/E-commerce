import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-gesture-handler'
import { Ionicons } from '@expo/vector-icons';

// 1:57:03
//import { useUser } from '@clerk/clerk-expo'


export default function Header() {
    //// 1:57:03
    //const { user } = useUser();
    return (
        <View>
            {/* User Info Section */}
            <View style={styles.header}>
                <Image
                    source={require('./../../../assets/Image/image-placeholder-icon-5.jpg')}
                    style={{ width: 48, height: 48, borderRadius: 100 }}
                />
                {/* 1:57:24
            <Image source={{ uri: user?.imageUrl }}
                className="rounded-full w-12 h-12"
            /> */}
                <View>
                    <Text style={{ fontSize: 16 }} >Welcome</Text>
                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Hà Quang Duy</Text>
                    {/* 1:58:45 */}
                    {/* {user?.fullName} */}
                </View>
            </View>

            {/* Search Bar */}
            <View style={styles.inputSearch}>
                <Ionicons name="search" size={24} color="gray" />
                <TextInput placeholder='Search'
                    style={{ marginLeft: 8, fontSize: 18 }}
                    onChangeText={(text) => {
                        console.log(text)
                    }}
                />
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        gap: 8,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    inputSearch: {
        gap: 8,
        padding: 12,
        marginTop: 21,
        borderWidth: 2,
        paddingLeft: 20,
        paddingRight: 20,
        borderRadius: 100,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: '#3b82f6',
        backgroundColor: 'white',
    }
})