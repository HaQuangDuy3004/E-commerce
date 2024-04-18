import { View, Text, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import Header from '../../components/HomeScreen/Header'
import Slider from '../../components/HomeScreen/Slider'
import { Firestore, collection, getDocs, getFirestore } from 'firebase/firestore'
import { app } from '../../firebaseConfig'

export default function HomeScreen() {
    const db = getFirestore(app);
    const [sliderList, setSliderList] = useState([]);
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

    return (
        <View className="py-8 px-6 bg-white flex-1">
            <Header />
            {/* slider */}
            <Slider sliderList={sliderList} />

        </View>
    )
}

//2:13:54 qua phaanf category list ( home screen )