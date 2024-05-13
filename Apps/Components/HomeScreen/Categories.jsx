import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native-gesture-handler'
import Category from '../../../Data/Category'
import { useNavigation } from '@react-navigation/native';

export default function Categories({ categoryList }) {

    const navigation = useNavigation();

    return (
        <View style={{ marginTop: 12 }}>
            <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Categories</Text>
            <FlatList
                key={'a'}
                data={categoryList}
                numColumns={3}
                renderItem={({ item, index }) => (
                    <TouchableOpacity
                        onPress={() => navigation.navigate('ItemList', { category: item.name })}
                        style={{
                            flex: 1,
                            justifyContent: 'center',
                            alignItems: 'center',
                            padding: 8,
                            borderWidth: 1,
                            borderColor: '#bfdbfe',
                            backgroundColor: '#eff6ff',
                            margin: 4,
                            borderRadius: 8,
                            height: 80
                        }}>
                        <Image source={{ uri: item.icon }}
                            style={{ width: 35, height: 35 }} />
                        <Text style={{ fontSize: 12, marginTop: 4 }}>{item.name}</Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}