import { createTabNavigator } from 'react-navigation';
import { screens as ContactsScreens } from '@features/contacts';

const screens = {
  ContactsScreens,
};

const globalOptions = {
  initialRouteName: 'ContactsScreens',
};

export default createTabNavigator(screens, globalOptions);
