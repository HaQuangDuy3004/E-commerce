import { View, Text, Image } from 'react-native'
import React from 'react'
import Header from '../../components/HomeScreen/Header'
import Slider from '../../components/HomeScreen/Slider'
import { collection, getDocs, getFirestore } from 'firebase/firestore'
import { app } from '../../firebaseConfig'

export default function HomeScreen() {
    const db = getFirestore(app);
    //const [sliderList, setSliderList] = useState([]);
    // useEffect(() => {
    //      getSliders();
    // },[])

    //used to get slider for home screen 
    const getSliders=async() => {
        setSliderList([])
    const querySnapshot = await getDocs(collection(db, "sliders"));
    querySnapshot.forEach((doc) => {
        //doc.data() is never undefined for query doc snapshots
    setSliderList(sliderList=>[...sliderList,doc.data()])
    });
    }
    return (
        <View className="py-8 px-6 bg-white flex-1">
            <Header />
            {/* slider */}
            <Slider />
        </View>
    )
}

//Sửa nhưng ko muốn đẩy lên web
//Sửa nhưng ko muốn đẩy lên web 2 test push

//Hà Quydn gduy

//2:13:54 qua phaanf category list ( home screen )