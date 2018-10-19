import { createStackNavigator } from 'react-navigation';
import { screen as ContactsListScreen } from '@features/contacts-list';

const screens = {
  ContactsListScreen,
};

const globalOptions = {
  initialRouteName: 'ContactsListScreen',
  navigationOptions: {
    headerStyle: {
      backgroundColor: 'transparent',
      borderBottomColor: 'transparent'
    },
    headerTitleStyle: {
      color: 'white',
      fontSize: 40,
    },
    headerBackTitleStyle: {
      color: 'white',
    },
    headerTintColor: 'white',
  },
  cardStyle: {
    backgroundColor: 'white',
  },
};

export default createStackNavigator(screens, globalOptions);
