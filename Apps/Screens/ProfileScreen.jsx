import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import explore from './../../assets/Image/explore.png'
import product from './../../assets/Image/product.png'
import logout from './../../assets/Image/logout.png'
import { FlatList } from 'react-native-gesture-handler'

export default function ProfileScreen() {
    const menuList = [
        {
            id: 1,
            name: "My Product",
            icon: product
        },
        {
            id: 2,
            name: "Explore",
            icon: explore
        },
        {
            id: 3,
            name: "Logout",
            icon: logout
        },
    ]

    return (
        <View className="p-5 bg-white flex-1">
            <View className="items-center mt-14">
                <Image source={require('./../../assets/Image/image-placeholder-icon-5.jpg')}
                    className="w-[100px] h-[100px] rounded-full" />
                <Text className='font-bold text-[25px] mt-2'>Admin</Text>
                <Text className='text-[18px] mt-2 text-gray-500'>admin@groupsix.com.vn</Text>
            </View>
            <FlatList

                data={menuList}
                numColumns={3}
                style={{ marginTop: 20 }}
                renderItem={({ item, index }) => (
                    <TouchableOpacity className='flex-1 p-3 border-[1px] items-center mx-2 mt-4 rounded-lg border-blue-400 bg-blue-50'>
                        {item.icon && <Image source={item.icon} className="w-[50px] h-[50px]" />}
                        <Text className="text-[12px] mt-2 text-blue-700">{item.name}</Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}