import React, { Component } from 'react';
import {
    SafeAreaView,
    View,
    Text,
    TextInput,
    StyleSheet
} from 'react-native';
import {
    Button,
    Icon,
    List,
    ListItem
} from 'react-native-ui-kitten';

const SAMPLE_DATA = [{
    title: 'Title for Item',
    description: 'Description for Item',
},
{
    title: 'dfgfdgdfg',
    description: 'Description for Item',
}];

class MenusOrder extends Component {

    data = SAMPLE_DATA;

    renderItemAccessory = (style) => (
        <Button style={style}>FOLLOW</Button>
    );

    renderItemIcon = (style) => (
        <Icon {...style} name='person' />
    );

    renderItem = ({ item, index }) => (
        <ListItem
            title={`${item.title}`}
            description={`${item.description}`}
            icon={this.renderItemIcon}
            accessory={this.renderItemAccessory}
        />
    );
    render() {
        return (
            <List
                style={styles.list}
                data={this.data}
                renderItem={this.renderItem}
            />
        );
    };
}


const styles = StyleSheet.create({
    list: {
        height: 150,
    },
});



export default MenusOrder;