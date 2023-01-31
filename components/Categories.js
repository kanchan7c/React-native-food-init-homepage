import { ScrollView, Text } from 'react-native';
import React from 'react';
import CategoryCard from './CategoryCard';

const Categories = () => {
  return (
    <ScrollView
      className='px-4 pt-2.5'
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      {/* category card  */}
      <CategoryCard
        imageUrl={require('../assets/app_images/avatar.jpg')}
        title='Dish 1'
      />
      <CategoryCard
        imageUrl={require('../assets/app_images/avatar.jpg')}
        title='Dish 1'
      />
      <CategoryCard
        imageUrl={require('../assets/app_images/avatar.jpg')}
        title='Dish 1'
      />
      <CategoryCard
        imageUrl={require('../assets/app_images/avatar.jpg')}
        title='Dish 1'
      />
      <CategoryCard
        imageUrl={require('../assets/app_images/avatar.jpg')}
        title='Dish 1'
      />
      <CategoryCard
        imageUrl={require('../assets/app_images/avatar.jpg')}
        title='Dish 1'
      />
      <CategoryCard
        imageUrl={require('../assets/app_images/avatar.jpg')}
        title='Dish 1'
      />
    </ScrollView>
  );
};

export default Categories;
