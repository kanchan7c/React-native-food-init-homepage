import { Image, SafeAreaView, Text, View } from 'react-native';
import React, { useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';

export default function HomeScreen() {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView>
      {/* header  */}
      <View className='flex-row pb-3 items-center mx-4 space-x-2'>
        <Image
          source={require('../assets/app_images/avatar.jpg')}
          className='h-7 w-7 bg-yellow-300 p-4 rounded-full'
        />
        <View>
          <Text className='font-bold text-gray-400 text-xs'>Deliver Now</Text>
          <Text className='font-bold text-xl'>
            Current Location
            <FontAwesome name='chevron-down' size={24} />
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
