import React from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

class Home extends React.Component {
  render() {
    return (
      <View>
        <Text> Home</Text>
        <Icon name="archive" size={30} />
      </View>
    );
  }
}
export default Home;
