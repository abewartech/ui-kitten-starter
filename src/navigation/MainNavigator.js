import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import Splash from '../screens/Splash';
import Home from '../screens/Home';
import DaftarRS from '../screens/DaftarRS';

const MainNavigator = createSwitchNavigator({
  Splash: Splash,
  Home: Home,
  DaftarRS: DaftarRS,
});

export default createAppContainer(MainNavigator);
