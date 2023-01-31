import { Image, Text, TouchableOpacity } from 'react-native';
import React from 'react';

const CategoryCard = ({ imageUrl, title }) => {
  return (
    <TouchableOpacity className='flex-1 items-center'>
      <Image source={imageUrl} className='h-20 w-20 rounded mr-1' />
      <Text className='text-center'>{title}</Text>
    </TouchableOpacity>
  );
};

export default CategoryCard;
