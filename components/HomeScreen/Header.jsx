import { View, Text, Image } from 'react-native'
import React from 'react'
//import { useUser } from '@clerk/clerk-expo'


export default function Header() {
    //User from Clerk => firebase
    //const { user } = useUser();
    return (
        <View className="flex flex-row items-center gap-2">
            <Image
                source={require('./../../assets/Image/image-placeholder-icon-5.jpg')}
                style={{ width: 48, height: 48 }}
            />
            {/* Use user clerk 
            <Image source={{ uri: user?.imageUrl }}
                className="rounded-full w-12 h-12"
            /> */}
            <View>
                <Text style={{ fontSize: 16 }} className="text-[160px]">Welcome</Text>
                <Text style={{ fontSize: 20, fontWeight: 'bold' }} className="text-[40px] font-bold">GamePlay</Text>
                {/* {user?.fullName} */}
            </View>
        </View>
    )
}