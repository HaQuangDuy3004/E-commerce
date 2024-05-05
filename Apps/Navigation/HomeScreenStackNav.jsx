import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../Screens/HomeScreen';
import ItemList from '../Screens/ItemList';
import ProductDetail from '../Screens/ProductDetail';

const Stack = createStackNavigator();

export default function HomeScreenStackNav() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="home" component={HomeScreen}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen name="ItemList" component={ItemList}
                options={({ route }) => ({
                    title: route.params.category,
                    headerStyle: {
                        backgroundColor: '#f9fafd'
                    },
                    headerTintColor: '#333'
                })}
            />
            <Stack.Screen name="product-detail" component={ProductDetail}
                options={{
                    headerStyle: {
                        backgroundColor: '#f9fafd'
                    },
                    headerTintColor: '#333',
                    headerTitle: 'Product Detail'

                }}
            />
        </Stack.Navigator>
    )
}