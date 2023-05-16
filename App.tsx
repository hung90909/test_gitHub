import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  RefreshControl,
  FlatList,
} from 'react-native';

const App = () => {
  const [Items, setItems] = useState([
    {name: 'Item 1'},
    {name: 'Item 2'},
    {name: 'Item 3'},
    {name: 'Item 4'},
    {name: 'Item 5'},
    {name: 'Item 6'},
    {name: 'Item 7'},
    {name: 'Item 8'},
    {name: 'Item 9'},
    {name: 'Item 27'},
    {name: 'Item 78'},
  ]);
  const [Refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    setItems([...Items, {name: 'Item 690000000000000'}]);
    setRefreshing(false);
  };

  return (
    <FlatList
      keyExtractor={(item, index) => index.toString()}
      data={Items}
      renderItem={({item}) => (
        <View style={styles.item}>
          <Text style={styles.text}>{item.name}</Text>
        </View>
      )}
        refreshControl={
          <RefreshControl
            refreshing={Refreshing}
            onRefresh={onRefresh}
            colors={['blue']}
          />
        }
    />
    // <ScrollView
    //   style={styles.body}
    //   refreshControl={
    //     <RefreshControl
    //       refreshing={Refreshing}
    //       onRefresh={onRefresh}
    //       colors={['blue']}
    //     />
    //   }
    //   {Items.map(helo => {
    //     return (
    //       <View style={styles.item} key={helo.key}>
    //         <Text style={styles.text}>{helo.item}</Text>
    //       </View>
    //     );
    //   })}
    // </ScrollView>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#ffffff',
  },
  item: {
    margin: 10,
    backgroundColor: '#4ae1fa',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#000000',
    fontSize: 45,
    fontStyle: 'italic',
    margin: 10,
  },
});

export default App;
