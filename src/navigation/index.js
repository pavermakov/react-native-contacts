import { createStackNavigator } from 'react-navigation';
import { screen as ContactsScreen } from '@features/contacts';

const screens = {
  ContactsScreen,
};

const globalOptions = {
  initialRouteName: 'ContactsScreen',
};

export default createStackNavigator(screens, globalOptions);
