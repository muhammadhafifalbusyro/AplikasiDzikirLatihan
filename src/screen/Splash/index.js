import React from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

class Splash extends React.Component {
  render() {
    setTimeout(() => {
      this.props.navigation.replace('Home');
    }, 4000);
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{fontSize: 40, fontWeight: 'bold'}}> Splash</Text>
      </View>
    );
  }
}
export default Splash;
