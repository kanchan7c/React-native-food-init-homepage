import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const RestaurantCard = ({
  id,
  imgUrl,
  title,
  rating,
  genre,
  address,
  short_description,
  dishes,
  long,
  lat,
}) => {
  return (
    <TouchableOpacity className='bg-white mr-2 shadow rounded-lg'>
      <Image source={imgUrl} className='h-64 w-64 rounded-sm' />
      <View className='px-3 pb-4'>
        <Text className='font-bold text-lg pt-2 '>{title}</Text>
        <View className='flex-row items-center space-x-1'>
          <AntDesign name='star' size={20} color='#ffd813' />
          <Text className='text-xs text-gray-500'>
            <Text className={rating > 4 ? 'text-green-600' : 'text-black'}>
              {rating}
            </Text>
            . {genre}
          </Text>
        </View>
        <View className='flex-row items-center space-x-1'>
          <Ionicons name='location-outline' size={22} color='gray' />
          <Text className='text-xs text-gray-500'>Nearby . {address}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default RestaurantCard;
