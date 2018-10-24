import React from "react"
import { createStackNavigator } from 'react-navigation';
import Contacts from './containers/Contacts.connect';
import Details from './components/Details';

import TabBarIcon from "@utilities/components/TabBarIcon";
import { images } from '@utilities/constants';

const ContactsStack = createStackNavigator({
  Contacts: {
    screen: Contacts,
    navigationOptions: {
      title: 'Contacts',
    },
  },

  Details: {
    screen: Details,
    navigationOptions: ({ navigation }) => ({
      title: `${navigation.state.params.name.first} ${navigation.state.params.name.last}`,
    }),
  },
});

ContactsStack.navigationOptions = ({ navigation }) => ({
  tabBarVisible: navigation.state.index === 0,
  tabBarIcon: <TabBarIcon source={images.icons.contacts} />,
});

export default ContactsStack;
