import React from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

class DzikirPagi extends React.Component {
  render() {
    return (
      <View>
        <Text> Dzikir Pagi</Text>
        <Icon name="archive" size={30} />
      </View>
    );
  }
}
export default DzikirPagi;
