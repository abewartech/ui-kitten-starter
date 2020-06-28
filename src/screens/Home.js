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