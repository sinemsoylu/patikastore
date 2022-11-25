import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  FlatList
} from 'react-native';
import store_data from './store_data';
import StoreCard from './components/StoreCard';
import SearchBar from './components/SearchBar';


function App() {

  const handleSearch = text => console.warn(text);

  return (
    <SafeAreaView>
      <SearchBar onSearch={handleSearch} />
      <FlatList 
      data={store_data}
      renderItem={({item}) => <StoreCard product={item} />}
      numColumns={2}
      />
    </SafeAreaView>
  );
}


export default App;
