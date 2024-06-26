import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../Screens/HomeScreen';
import ExploreScreen from '../Screens/ExploreScreen';
import AddPostScreen from '../Screens/AddPostScreen';
import ProfileScreen from '../Screens/ProfileScreen';
import { Ionicons } from '@expo/vector-icons';
import HomeScreenStackNav from './HomeScreenStackNav';
import ExploreScreenStackNav from './ExploreScreenStackNav';

const Tab = createBottomTabNavigator();

export default function Tabnavigation() {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false, tabBarActiveTintColor: '#000' }}>
            <Tab.Screen name="home-nav" component={HomeScreenStackNav}
                options={{
                    tabBarLabel: ({ color }) => (
                        <Text style={{ color: color, fontSize: 12, marginBottom: 3 }}>Home</Text>
                    ),
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="home" size={size} color={color} />
                    )
                }}
            />
            <Tab.Screen name="Explore" component={ExploreScreen}
                options={{
                    tabBarLabel: ({ color }) => (
                        <Text style={{ color: color, fontSize: 12, marginBottom: 3 }}>Explore</Text>
                    ),
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="albums" size={size} color="black" />
                    )
                }} />
            <Tab.Screen name="AddPost" component={AddPostScreen}
                options={{
                    tabBarLabel: ({ color }) => (
                        <Text style={{ color: color, fontSize: 12, marginBottom: 3 }}>Add Post</Text>
                    ),
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="camera" size={size} color={color} />
                    )
                }} />
            <Tab.Screen name="Profile" component={ProfileScreen}
                options={{
                    tabBarLabel: ({ color }) => (
                        <Text style={{ color: color, fontSize: 12, marginBottom: 3 }}>Profile</Text>
                    ),
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="person" size={size} color={color} />
                    )
                }} />
        </Tab.Navigator>
    )
}