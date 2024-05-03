import { View, Text, FlatList, TouchableOpacity, Image, SafeAreaView } from 'react-native'
import React from 'react'
import UserPost from '../../../Data/UserPost'

export default function LatestItemList({ }) {

    return (
        <SafeAreaView style={{ marginTop: 12, marginBottom: 40 }}>
            <FlatList
                ListHeaderComponent={
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 10 }}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Latest Items</Text>
                        <TouchableOpacity>
                            <Text style={{ color: '#3b82f6', fontSize: 15 }}>View All</Text>
                        </TouchableOpacity>
                    </View>
                }
                key={'#'}
                numColumns={2}
                data={UserPost}
                renderItem={({ item, index }) => (
                    <TouchableOpacity style={{ flex: 1, margin: 6, padding: 8, borderRadius: 8, borderWidth: 1, borderColor: '#e2e8f0' }}>
                        <Image source={{ uri: item.image }}
                            style={{ width: '100%', height: 140, borderWidth: 1, borderRadius: 8 }} />
                        <View>
                            <Text style={{ fontSize: 15, fontWeight: 'bold', marginTop: 8 }}>{item.title}</Text>
                            <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#3b82f6', marginTop: 2, borderRadius: 100, paddingLeft: 2, paddingRight: 2, }}>${item.price}</Text>
                            <Text style={{ backgroundColor: '#bfdbfe', color: '#3b82f6', padding: 2, borderRadius: 100, paddingLeft: 4, paddingRight: 4, fontSize: 10, width: 70, textAlign: 'center', marginTop: 4 }}>{item.category}</Text>
                        </View>
                    </TouchableOpacity>
                )}
            />
        </SafeAreaView>
    )
}