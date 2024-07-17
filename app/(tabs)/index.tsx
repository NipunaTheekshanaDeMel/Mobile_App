import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { Stack } from 'expo-router';
import Colors from '../constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import CategoryButtons from '@/components/CategoryButtons';


const chromecastIcon = require('../../assets/images/chromecast.png');
const notificationIcon = require('../../assets/images/notification.png');
const shortIcon = require('../../assets/images/shorts_logo.png');

const short01Image = require('../../assets/images/short_01.jpg');
const short02Image = require('../../assets/images/short_02.jpg');
const short03Image = require('../../assets/images/short_03.jpg');
const short04Image = require('../../assets/images/short_04.jpg');

const video01Image = require('../../assets/images/video_01.jpg');

const youtubeLogo = require('../../assets/images/youtube_logo.png');

const Page = () => {
  const [category, setCategory] = useState('All');
  const onCatChanged = (category: string) => {
    console.log("Category: ", category);
    setCategory(category);
  };

  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          headerTransparent: true,
          headerTitle: "",
          headerLeft: () => (
            <TouchableOpacity onPress={() => {}} style={{ marginLeft: 10 }}>
              <Image
                source={youtubeLogo}
                style={{ width: 140, height: 30 }}
              />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <TouchableOpacity onPress={() => {}} style={{ marginRight: 20 }}>
                <Image
                  source={chromecastIcon}
                  style={{ width: 24, height: 24, tintColor: Colors.white }}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => {}} style={{ marginRight: 20 }}>
                <Image
                  source={notificationIcon}
                  style={{ width: 24, height: 24, tintColor: Colors.white }}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => {}} style={{ marginRight: 30 }}>
                <Ionicons name='search' size={24} color={Colors.white}/>
              </TouchableOpacity>
            </View>
          )
        }}
      />
      
      <CategoryButtons onCategoryChanged={onCatChanged} />

      <View style={styles.shortContainer}>
        <Image
          source={shortIcon} 
          style={{ width: 30, height: 30 }}
        />
        <Text style={styles.shortTxt}>Shorts</Text>
      </View>

      <View style={styles.imageContainer}>
        <Image source={short01Image} style={styles.shortImage} />
        <Image source={short02Image} style={styles.shortImage} />
        <Image source={short03Image} style={styles.shortImage} />
        <Image source={short04Image} style={styles.shortImage} />
      </View>
      <View>
        <Text style={styles.trendingTxt}>Trending Videos</Text>
        <Image source={video01Image} style={styles.videoImage} />
      </View>
    </View>
  );
};

export default Page;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#181818',
    paddingHorizontal: 20,
    paddingTop: 60,
  },
  shortContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  shortTxt: {
    fontFamily: 'Arial',
    fontWeight: 'bold',
    fontSize: 16,
    color: Colors.white,
    marginLeft: 10,
  },
  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  shortImage: {
    width: 100,
    height: 150,
  },
  trendingTxt: {
    fontFamily: 'Arial',
    fontWeight: 'bold',
    fontSize: 16,
    color: Colors.white,
    marginLeft: 0,
    marginTop:20
  },
  videoImage: {
    width: 450,
    height: 350,
    marginTop:10,
    borderRadius: 10
  }
});
