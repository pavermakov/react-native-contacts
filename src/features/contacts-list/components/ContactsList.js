import React, { PureComponent } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class ContactsList extends PureComponent {
  componentDidMount() {
    this.props.fetchUsers();
  }

  render() {
    return (
      <View style={s.container}>
        <Text>{this.props.users.length}</Text>
      </View>
    );
  }
}

const s = StyleSheet.create({
  constainer: {
    flex: 1,
  },
});

export default ContactsList;
