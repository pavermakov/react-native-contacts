import React from "react";
import { createStackNavigator } from 'react-navigation';
import Settings from './components/Settings';

import TabBarIcon from "@utilities/components/TabBarIcon";
import { images } from '@utilities/constants';

const SettingsStack = createStackNavigator({
  Settings: {
    screen: Settings,
    navigationOptions: {
      title: 'Settings',
    },
  },
});

SettingsStack.navigationOptions = () => ({
  tabBarIcon: <TabBarIcon source={images.icons.settings} size={25} />,
});

export default SettingsStack;
