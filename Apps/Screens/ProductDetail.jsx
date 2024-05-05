import { View, Text, SafeAreaView, FlatList, TouchableOpacity, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import UserPost from '../../Data/UserPost';
import { useNavigation, useRoute } from '@react-navigation/native';

export default function ProductDetail() {
    const [product, SetProduct] = useState([]);
    const { params } = useRoute();

    useEffect(() => {
        // console.log(params)
        params && SetProduct(params.product);
    }, [params])
    return (
        <View>
            <Image source={{ uri: product.image }}
                className="w-full h-[320px]" />
            <View className="p-3" >
                <Text className="text-[20px] font-bold">{product?.title}</Text>
                <View className="items-baseline">
                    <Text className="bg-blue-200 p-1 mt-2 px-2 rounded-full text-blue-500">{product.category}</Text>
                </View>

                <Text className="mt-3 text-[20px] font-bold">Description</Text>
                <Text className="text-[17px] text-gray-500">{product?.description}</Text>
            </View>
        </View>
    )
}