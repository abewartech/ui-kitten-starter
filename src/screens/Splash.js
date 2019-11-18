import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import {Text} from 'react-native-ui-kitten';
import Spinner from 'react-native-spinkit';

class Splash extends Component {
  static navigationOptions = ({navigation}) => {
    const {params = {}} = navigation.state;
    return {
      title: 'SplashScreen',
      header: null,
    };
  };

  render() {
    return (
      <View style={styles.container}>
        <Spinner
          isVisible={true}
          size={65}
          type="ChasingDots"
          color="#FAF3E3"
        />
        <Text category="h3" appearance="alternative" style={styles.LoadingText}>
          UI KITTEN
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#30BCC9',
  },
  LoadingText: {
    color: '#FAF3E3',
    marginTop: 20,
  },
});

export default Splash;
