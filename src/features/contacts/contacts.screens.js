import { createStackNavigator } from 'react-navigation';
import Contacts from './containers/Contacts.connect';
import Details from './components/Details';

const screens = {
  Contacts: {
    screen: Contacts,
    navigationOptions: {
      title: 'Contacts',
    },
  },

  Details: {
    screen: Details,
    navigationOptions: ({ navigation }) => ({
      title: `${navigation.state.params.name.first} ${navigation.state.params.name.last}`
    }),
  },
};

export default createStackNavigator(screens);
