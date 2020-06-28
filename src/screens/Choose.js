import React, { Component } from 'react';
import {
    StyleSheet,
    Text
} from 'react-native';
import {
    SafeAreaView,
    CreateDrawer
} from 'react-navigation';
import {
    Drawer,
    DrawerHeaderFooter,
    Icon,
    Layout,
    TopNavigation,
    TopNavigationAction,
} from 'react-native-ui-kitten';

const BackIcon = (style) => (
    <Icon {...style} name='menu-outline' />
);

const EditIcon = (style) => (
    <Icon {...style} name='edit' />
);

const MenuIcon = (style) => (
    <Icon {...style} name='more-vertical' />
);

const BackAction = (props) => (
    <TopNavigationAction {...props} icon={BackIcon} />
);

const EditAction = (props) => (
    <TopNavigationAction {...props} icon={EditIcon} />
);

const MenuAction = (props) => (
    <TopNavigationAction {...props} icon={MenuIcon} />
);

const PersonIcon = (style) => (
    <Icon {...style} name='person' />
);

class Choose extends Component {
    renderLeftControl = () => (
        <BackAction onPress={
            this.props.navigation.toggleDrawer} />
    );

    renderRightControls = () => [
        <EditAction />,
        <MenuAction />,
    ];

    drawerData = [
        { title: 'Dashboard' },
        { title: 'Messages' },
        { title: 'Settings' },
        { title: 'Articles' },
        { title: 'Ecommerce' },
        { title: 'Chat' },
    ];

    onRouteSelect = (index) => {
        // const { [index]: route } = this.drawerData;
        // navigate with React Navigation
        // this.props.navigation.navigate(route.title);
    };

    renderProfileHeader = () => (
        <DrawerHeaderFooter
            title='John Doe'
            description='React Native Developer'
            icon={PersonIcon}
        />
    );

    render() {
        return (
            <Layout>
                <TopNavigation
                    leftControl={this.renderLeftControl()}
                />
                <SafeAreaView style={styles.container}>
                    <Drawer
                        data={this.drawerData}
                        header={this.renderProfileHeader}
                        onSelect={this.onRouteSelect}
                    />
                </SafeAreaView>
            </Layout>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 16,
    },
});

export default Choose;