<<<<<<< HEAD
import React, { Component } from 'react';
import {
    SafeAreaView,
    Button,
    View,
    Text,
    TextInput, StyleSheet, Dimensions,
    ImageBackground
} from 'react-native';

import {
    List, Card
} from 'react-native-ui-kitten';

const products = [{ title: 'test', category: 'cat1', image: 'test.jpg', price: 5000, amount: 1000 }]

class Home extends Component {
    state = { value: '' };
    onClick = () => {
        this.props.navigation.navigate('MenusOrder');
    }
    onChangeText = (text) => {
        this.setState({ value: text })
    }

    render() {
        const displayProducts = products;
        const onItemPress = () => {
            navigation && navigation.navigate('ProductDetails3');
        };

        const onItemCartPress = () => {
            navigation && navigation.navigate('ShoppingCart');
        };

        const renderItemFooter = () => (
            <View style={styles.itemFooter}>
                <Text category='s1'>
                    {info.item.formattedPrice}
                </Text>
                <Button
                    style={styles.iconButton}
                    size='small'
                    icon={CartIcon}
                    onPress={() => onItemCartPress(info.index)}
                />
            </View>
        );

        const renderItemHeader = () => (
            <ImageBackground
                style={styles.itemHeader}
                source={info.item.image}
            />
        );
        const renderProductItem = () => (
            <Card
                // style={styles.productItem}
                header={() => renderItemHeader()}
                footer={() => renderItemFooter()}
                onPress={() => onItemPress()}>
                <Text category='s1'>
                    test
                </Text>
                <Text
                    appearance='hint'
                    category='c1'>
                    cat2
                </Text>
            </Card>
        );
        return (
            <SafeAreaView>
                <List
                    // contentContainerStyle={styles.productList}
                    data={displayProducts.length && displayProducts || products}
                    numColumns={2}
                    renderItem={renderProductItem}
                />
            </SafeAreaView>
        );
    }
}

const themedStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'green',
    },
    productList: {
        paddingHorizontal: 8,
        paddingVertical: 16,
    },
    productItem: {
        flex: 1,
        margin: 8,
        maxWidth: Dimensions.get('window').width / 2 - 24,
        backgroundColor: 'blue',
    },
    itemHeader: {
        height: 140,
    },
    itemFooter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    iconButton: {
        paddingHorizontal: 0,
    },
});

export default Home;
=======
import React, {Component} from 'react';
import {
  StyleSheet,
  KeyboardAvoidingView,
  View,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {Text, Input, Button} from 'react-native-ui-kitten';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
  }

  static navigationOptions = ({navigation}) => {
    const {params = {}} = navigation.state;
    return {
      title: 'Login',
      header: null,
    };
  };

  onClick = () => {
    this.props.navigation.navigate('DaftarRS');
  };

  render() {
    return (
      <KeyboardAvoidingView style={styles.container}>
        <ImageBackground
          source={require('../../assets/logo.jpg')}
          style={{width: 360, height: 290}}></ImageBackground>
        <View style={styles.headerContainer}>
          <Input
            style={styles.input}
            value={this.state.value}
            onChangeText={this.onChangeText}
            placeholder="searching"
          />
          <View style={{alignItems: 'flex-end'}}>
            <Button style={{marginVertical: 10, width: 100}}>Cari</Button>
          </View>
        </View>
        <View>
          <View style={{flexDirection: 'row', marginHorizontal: 10}}>
            <ImageBackground
              style={styles.image}
              source={require('../../assets/rs_1.jpg')}
            />
            <View style={styles.infoContainer}>
              <TouchableOpacity
                style={styles.closeButton}
                activeOpacity={0.9}
                onPress={this.onRemoveProduct}></TouchableOpacity>
              <Text
                style={[styles.nameLabel, styles.labelMargin]}
                category="s1">
                Rumah Sakit Simpangan Depok
              </Text>
              <Text
                style={[styles.typeLabel, styles.labelMargin]}
                category="s1">
                02187428764
              </Text>
              <Text style={styles.nameLabel}>Jalan Raya Bogor KM.40</Text>
              <TouchableOpacity
                onPress={() => {
                  this.onClick();
                }}>
                <Text style={{color: '#2980b9'}}>Info Lengkap..</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View></View>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1abc9c',
  },
  headerContainer: {
    marginHorizontal: 20,
    marginVertical: 20,
  },
  image: {
    width: 144,
    height: 180,
  },
  infoContainer: {
    flex: 1,
    padding: 16,
  },
});

export default Home;
>>>>>>> 80f1d51190be256f79a6e69d879f3bb353942876
