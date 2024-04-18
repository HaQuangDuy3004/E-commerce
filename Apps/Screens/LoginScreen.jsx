import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import * as WebBrowser from "expo-web-browser";
import { useWarmUpBrowser } from '../../hooks/useWarmUpBrowser';
import { useOAuth } from '@clerk/clerk-expo';
import { useNavigation } from '@react-navigation/native';
// WebBrowser.maybeCompleteAuthSession();
export default function LoginScreen(props) {
    // useWarmUpBrowser();

    // const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });
    // const onPress = React.useCallback(async () => {  
    //     try {
    //         const { createdSessionId, signIn, signUp, setActive } =
    //             await startOAuthFlow();
    //         if (createdSessionId) {
    //             setActive({ session: createdSessionId });
    //         } else {
    //             // Use signIn or signUp for next steps such as MFA
    //             <SignUpScreen />
    //         }
    //     } catch (err) {
    //         console.error("OAuth error", err);
    //     }
    // }, []);
    return (
        <View>
            <Image
                source={require('./../../assets/Image/6505894.jpg')}
                className="w-full h-64 object-cover"
            />
            <View className="p-8 mt-[-20px] bg-slate-600 h-full rounded-t-3xl" >
                <Text className="text-[30px] text-slate-50 font-bold">E-commerce shop</Text>
                <Text className="text-[18px] text-slate-300 mt-6">Buy Sell Shop where you can sell old item and make real</Text>
                <TouchableOpacity onPress={() => props.navigation.navigate('Main')} className="p-4 bg-orange-700 rounded-full mt-20">
                    <Text className="text-white text-center text-[18px]">Get Started</Text>
                </TouchableOpacity>
            </View>
        </View >
    )
}