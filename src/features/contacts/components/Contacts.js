import React, { PureComponent } from 'react';
import { View, StyleSheet } from 'react-native';

import ContactsList from './ContactsList';
import Loader from '@utilities/components/Loader';

class Contacts extends PureComponent {
  state = {
    isRefreshing: false,
  };

  refreshContacts = () => {
    this.setState({ isRefreshing: true });

    this.props.onRefresh()
      .then(() => {
        this.setState({ isRefreshing: false });
      });
  };

  render() {
    return (
      <View style={s.wrapper}>
        {this.props.isLoading
          ?
            <Loader />
          :
            <ContactsList
              isRefreshing={this.state.isRefreshing}
              items={this.props.users}
              onRefresh={this.refreshContacts}
            />
        }
      </View>
    );
  }
}

const s = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
});

export default Contacts;
