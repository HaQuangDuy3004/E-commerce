import { View, Text, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import Header from '../Components/HomeScreen/Header'
import Slider from '../Components/HomeScreen/Slider'
import { Firestore, collection, getDocs, getFirestore } from 'firebase/firestore'
import { app } from '../../firebaseConfig'
import Categories from '../Components/HomeScreen/Categories'

export default function HomeScreen() {
    const db = getFirestore(app);
    const [sliderList, setSliderList] = useState([]);
    const [categoryList, setCategoryList] = useState([]);

    useEffect(() => {
        getSliders();
    }, [])

    //used to get slider for home screen 
    const getSliders = async () => {
        setSliderList([]);
        const querySnapshot = await getDocs(collection(db, "Sliders"));
        querySnapshot.forEach((doc) => {
            console.log(doc.id, doc.data());
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

    return (
        <View className="py-8 px-6 bg-white flex-1">
            <Header />
            {/* slider */}
            <Slider sliderList={sliderList} />

            {/* Category List */}
            <Categories />

        </View>
    )
}

//2:13:54 qua phaanf category list ( home screen )