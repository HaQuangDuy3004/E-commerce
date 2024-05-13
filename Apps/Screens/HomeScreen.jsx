import { View, Text, Image, ScrollView, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import Header from '../Components/HomeScreen/Header'
import Slider from '../Components/HomeScreen/Slider'
import { Firestore, collection, getDocs, getFirestore } from 'firebase/firestore'
import { app } from '../../firebaseConfig'
import Categories from '../Components/HomeScreen/Categories'
import LatestItemList from '../Components/HomeScreen/LatestItemList'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default function HomeScreen() {
    const db = getFirestore(app);
    const [sliderList, setSliderList] = useState([]);
    const [categoryList, setCategoryList] = useState([]);
    const [latestItemList, setLatestItemList] = useState([]);

    useEffect(() => {
        getSliders();
        getCategoryList();
        getLatestItemList();
    }, [])

    //used to get slider for home screen 
    const getSliders = async () => {
        setSliderList([]);
        const querySnapshot = await getDocs(collection(db, "Sliders"));
        querySnapshot.forEach((doc) => {
            // console.log(doc.id, doc.data());
            setSliderList(sliderList => [...sliderList, doc.data()])
        });
    }

    const getCategoryList = async () => {
        setCategoryList([]);
        const querySnapshot = await getDocs(collection(db, 'Category'));
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            //console.log(" => ", doc.data());
            setCategoryList(categoryList => [...categoryList, doc.data()])
        })
    }

    const getLatestItemList = async () => {
        setLatestItemList([]);
        const querySnapshot = await getDocs(collection(db, 'UserPost'));
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            // console.log(" => ", doc.data());
            setLatestItemList(latestItemList => [...latestItemList, doc.data()])
        })
    }

    return (
        <View className="py-8 px-5 bg-white flex-1 ">
            <FlatList
                ListHeaderComponent={
                    <>
                        <Header />
                        <Slider sliderList={sliderList} />
                        <Categories categoryList={categoryList} />
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 10 }}>
                            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Latest Items</Text>
                            <TouchableOpacity>
                                <Text style={{ color: '#3b82f6', fontSize: 15 }}>View All</Text>
                            </TouchableOpacity>
                        </View>
                        <LatestItemList latestItemList={latestItemList} />

                    </>
                }
                showsHorizontalScrollIndicator={false} //2:13:26
                showsVerticalScrollIndicator={false}

            />
        </View>
    )
}

//2:13:54 qua phaanf category list ( home screen )
className = "m-2 p-2 bg-blue-200 text-blue-500 rounded-full px-2"