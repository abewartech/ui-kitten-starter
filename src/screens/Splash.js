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

  componentDidMount = () => {
    setTimeout(() => {
      this.props.navigation.navigate('Home');
    }, 3000);
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
        <Text category="h4" appearance="alternative" style={styles.LoadingText}>
          Searching Hospital Depok
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
    backgroundColor: '#1abc9c',
  },
  LoadingText: {
    color: '#FAF3E3',
    marginTop: 20,
  },
});

export default Splash;
