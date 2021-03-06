import * as React from 'react';
import {StatusBar} from 'react-native';
import {mapping, light as lightTheme} from '@eva-design/eva';
import {EvaIconsPack} from '@ui-kitten/eva-icons';
import {ApplicationProvider, IconRegistry} from 'react-native-ui-kitten';
import MainNavigator from './src/navigation/MainNavigator';
import {Provider} from 'mobx-react';
import {RootStore} from './src/stores/Root';
import {enableScreens} from 'react-native-screens';

console.disableYellowBox = true;

const rootStore = new RootStore();
enableScreens();
const App = () => (
  <Provider rootStore={rootStore}>
    <ApplicationProvider mapping={mapping} theme={lightTheme}>
      <StatusBar backgroundColor="#1abc9c" barStyle="light-content" />
      <IconRegistry icons={EvaIconsPack} />
      <MainNavigator />
    </ApplicationProvider>
  </Provider>
);

export default App;
