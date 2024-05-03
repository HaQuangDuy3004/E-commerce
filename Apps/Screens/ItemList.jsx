import { View, Text, SafeAreaView, TouchableOpacity, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useRoute } from '@react-navigation/native';
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';
import { app } from '../../firebaseConfig';
import Category from '../../Data/Category';
import UserPost from '../../Data/UserPost';
import LatestItemList from '../Components/HomeScreen/LatestItemList';
import { FlatList } from 'react-native-gesture-handler';

export default function ItemList() {
    const { params } = useRoute();
    //Tìm kiếm trong data của UserPost category === vs params.category
    const data = UserPost.filter(item => item.category === params.category)

    // const db = getFirestore(app);
    // const [itemList, setItemList] = useState([]);
    // useEffect(() => {
    //     console.log(params.category)
    //     params && getItemListByCategory();
    // }, [params])

    // const getItemListByCategory = async () => {
    //     setItemList([])
    //     const q = query(collection(db, "UserPost"), where("category", "==", params.category))
    //     const querySnapshot = await getDocs(q);
    //     querySnapshot.forEach((doc) => {
    //         console.log(" => ", doc.data());
    //         setItemList(itemList => [...itemList, doc.data()])
    //     });
    // }
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
                data={data}
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