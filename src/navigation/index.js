import { createBottomTabNavigator } from 'react-navigation';
import { screens as Contacts } from '@features/contacts';
import { screens as Settings } from '@features/settings';

const screens = {
  Contacts,
  Settings,
};

const globalOptions = {
  initialRouteName: 'Contacts',
};

export default createBottomTabNavigator(screens, globalOptions);
