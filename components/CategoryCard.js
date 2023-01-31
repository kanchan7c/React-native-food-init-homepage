import { Image, Text, TouchableOpacity } from 'react-native';
import React from 'react';

const CategoryCard = ({ imageUrl, title }) => {
  return (
    <TouchableOpacity className='mr-2 relative border-gray-50 '>
      <Image source={imageUrl} className='h-20 w-20 rounded' />
      <Text className='text-center absolute bottom-1 left-1 font-bold text-white'>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CategoryCard;
