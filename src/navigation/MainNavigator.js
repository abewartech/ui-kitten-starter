import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import Splash from '../screens/Splash';

const MainNavigator = createSwitchNavigator({
  Splash: Splash,
});

export default createAppContainer(MainNavigator);
