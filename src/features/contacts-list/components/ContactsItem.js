import React, { PureComponent } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

class ContactsItem extends PureComponent {
  render() {
    return (
      <View style={_s.container}>
        <View style={_s.avatar}>
          <Image
            style={_s.image}
            source={{ uri: this.props.image }}
          />
        </View>

        <View style={_s.info}>
          <Text>{this.props.name}</Text>
          <Text>{this.props.phone}</Text>
          <Text>{this.props.email}</Text>
        </View>
      </View>
    );
  }
}

const _s = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },

  avatar: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  image: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },

  info: {
    justifyContent: 'center',
    // alignItems: 'space-between',
  },
});

export default ContactsItem;
