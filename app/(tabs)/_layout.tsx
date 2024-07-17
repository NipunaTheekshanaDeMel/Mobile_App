import { View, Text, Image } from 'react-native';
import React from 'react';
import { Tabs } from 'expo-router';
import { FontAwesome, Ionicons, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import Colors from '../constants/Colors';

export default function _layout() {
  return (
    <Tabs screenOptions={{
      tabBarStyle: {
        backgroundColor: '#212121',
        borderTopWidth: 0,
        padding: 0
      },
      tabBarActiveTintColor: Colors.white,
      tabBarInactiveTintColor: '#999'
    }}>
      <Tabs.Screen 
        name='index' 
        options={{ 
          tabBarIcon: ({ color }) => (
            <Ionicons name='home' size={26} color={color} />
          ),
          tabBarLabel: 'Home'
        }} 
      />
      <Tabs.Screen 
        name='shorts' 
        options={{ 
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name='youtube-tv' size={26} color={color} />
          ),
          tabBarLabel: 'Shorts'
        }} 
      />
      <Tabs.Screen 
        name='addnew' 
        options={{ 
          tabBarIcon: ({ color }) => (
            <View style={{ 
              borderWidth: 3, 
              borderColor: '#181818', 
              borderRadius: 100, 
              padding: 0, 
              marginBottom: 30,
              backgroundColor: '#181818' 
            }}>
              <Ionicons name='add-circle' size={60} color='#ff0000'/>
            </View>
          ),
          tabBarLabel: ''
        }} 
      />
      <Tabs.Screen 
        name='subscriptions' 
        options={{ 
          tabBarIcon: ({ color }) => (
            <MaterialIcons name='subscriptions' size={26} color={color} />
          ),
          tabBarLabel: 'Subscriptions'
        }} 
      />
      <Tabs.Screen 
        name='you' 
        options={{ 
          tabBarIcon: ({ color }) => (
            <Image
                  source={{
                    uri: 'https://xsgames.co/randomusers/avatar.php?g=male'
                  }}
                  style={{ width: 30, height: 30, borderRadius: 100 }}
                /> 
          ),
          tabBarLabel: 'You'
        }} 
      />
    </Tabs>
  );
}
