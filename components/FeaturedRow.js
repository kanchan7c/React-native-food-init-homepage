import { View, Text, ScrollView } from 'react-native';
import React from 'react';

const FeaturedRow = () => {
  return (
    <ScrollView className='px-4 pt-5 bg-gray-100'>
      <Text className='text-xl font-bold'>Today's Hot Menu</Text>
    </ScrollView>
  );
};

export default FeaturedRow;
