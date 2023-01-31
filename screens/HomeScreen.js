import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, { useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import Categories from '../components/Categories';
import FeaturedRow from '../components/FeaturedRow';

export default function HomeScreen() {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className='bg-white pt-5'>
      {/* header  */}
      <View className='flex-row pb-3 items-center mx-4 space-x-2'>
        <Image
          source={require('../assets/app_images/avatar.jpg')}
          className='h-10 w-10 bg-yellow-300 p-4 rounded-full'
        />
        <View className='flex-1'>
          <Text className='font-bold text-gray-400 text-xs'>Deliver Now!</Text>
          <Text className='font-bold text-xl'>
            Current Location
            <Entypo name='chevron-down' size={24} color='seagreen' />
          </Text>
        </View>
        <AntDesign name='user' size={30} color='seagreen' />
      </View>
      {/* Search box and filter */}
      <View className='flex-row items-center space-x-2 pb-2 mx-4'>
        <View className='flex-row flex-1 space-x-2 bg-gray-200 p-3'>
          <FontAwesome name='search' size={20} color='gray' />
          <TextInput
            placeholder='Restraunt and cuisines'
            keyboardType='default'
          />
        </View>
        <Entypo name='sound-mix' size={20} color='seagreen' />
      </View>

      {/* app body  */}
      <ScrollView className='bg-gray-100'>
        {/* Categories  */}
        <Categories />
        {/* Featured rows  */}
        <FeaturedRow />
      </ScrollView>
    </SafeAreaView>
  );
}
