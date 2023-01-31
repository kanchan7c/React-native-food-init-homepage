import { ScrollView, Text } from 'react-native';
import React from 'react';
import CategoryCard from './CategoryCard';

const Categories = () => {
  let url = '../assets/app_images/';

  return (
    <ScrollView
      className='px-4 pt-2.5'
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      {/* category card  */}
      <CategoryCard imageUrl={require(`${url}biryani.jpg`)} title='Biryani' />
      <CategoryCard imageUrl={require(`${url}chaat.jpg`)} title='Chaat' />
      <CategoryCard imageUrl={require(`${url}chicken.jpg`)} title='Chicken' />
      <CategoryCard imageUrl={require(`${url}noodles.jpg`)} title='Noodles' />
      <CategoryCard imageUrl={require(`${url}paratha.jpg`)} title='Paratha' />
      <CategoryCard imageUrl={require(`${url}pasta.jpg`)} title='Pasta' />
      <CategoryCard imageUrl={require(`${url}pizza.jpg`)} title='Pizza' />
      <CategoryCard imageUrl={require(`${url}sandwich.jpg`)} title='Sandwich' />
    </ScrollView>
  );
};

export default Categories;
