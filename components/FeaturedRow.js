import { View, Text, ScrollView } from 'react-native';
import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import RestaurantCard from './RestaurantCard';

const FeaturedRow = ({ title, description, id }) => {
  let url = '../assets/app_images/';

  return (
    <View className='bg-gray-100'>
      <View className='px-4 mt-4 text-center flex-row items-center justify-between'>
        <Text className='text-lg font-bold'>{title}</Text>
        <AntDesign name='arrowright' size={24} color='seagreen' />
      </View>
      <Text className='text-xs text-gray-500 px-4'>{description}</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator='false'
        className='px-4 pt-4'
      >
        {/* Restaurant cards  */}
        <RestaurantCard
          id={123}
          imgUrl={require(`${url}biryani.jpg`)}
          title='Biryani House'
          rating={4.8}
          genre='Indian'
          address='XYZ lane'
          short_description='This is a dummy description for the food item.'
          dishes={[]}
          long={20}
          lat={0}
        />
        <RestaurantCard
          id={123}
          imgUrl={require(`${url}biryani.jpg`)}
          title='Biryani House'
          rating={3.8}
          genre='Indian'
          address='XYZ lane'
          short_description='This is a dummy description for the food item.'
          dishes={[]}
          long={20}
          lat={0}
        />
        <RestaurantCard
          id={123}
          imgUrl={require(`${url}biryani.jpg`)}
          title='Biryani House'
          rating={4.8}
          genre='Indian'
          address='XYZ lane'
          short_description='This is a dummy description for the food item.'
          dishes={[]}
          long={20}
          lat={0}
        />
        <RestaurantCard
          id={123}
          imgUrl={require(`${url}biryani.jpg`)}
          title='Biryani House'
          rating={5}
          genre='Indian'
          address='XYZ lane'
          short_description='This is a dummy description for the food item.'
          dishes={[]}
          long={20}
          lat={0}
        />
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
