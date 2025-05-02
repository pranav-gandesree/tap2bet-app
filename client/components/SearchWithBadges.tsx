import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity, ScrollView } from 'react-native';

const categories = ['Sports', 'Politics', 'Crypto', 'Tech', 'Movies', 'Trending'];

const SearchWithBadges = () => {
  const [query, setQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('');

  return (
    <View className="p-4 bg-white">
      <TextInput
        className="mt-6 mb-4 rounded-full px-4 py-2 text-black border-2 border-red-500"
        placeholder="Search..."
        placeholderTextColor="#999"
        value={query}
        onChangeText={setQuery}
      />

      <ScrollView horizontal showsHorizontalScrollIndicator={false} className="flex-row">
        {categories.map((category) => (
          <TouchableOpacity
            key={category}
            onPress={() => setActiveCategory(category)}
            className={`px-4 py-2 mr-3 rounded-full border ${
              activeCategory === category
                ? 'bg-blue-600 border-blue-600'
                : 'bg-gray-100 border-gray-300'
            }`}
          >
            <Text
              className={`${
                activeCategory === category ? 'text-white font-semibold' : 'text-gray-700'
              }`}
            >
              {category}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default SearchWithBadges;
