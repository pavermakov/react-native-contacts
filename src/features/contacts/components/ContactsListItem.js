import React, { PureComponent } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

class ContactsListItem extends PureComponent {
  render() {
    return (
      <View style={s.wrapper}>
        <View style={s.avatar}>
          <Image
            style={s.image}
            source={{ uri: this.props.avatar }}
          />
        </View>

        <View style={s.info}>
          <Text style={s.name}>{this.props.name}</Text>

          <View>
            <Text style={s.text}>{this.props.phone}</Text>
            <Text style={s.text}>{this.props.email}</Text>
          </View>
        </View>
      </View>
    );
  }
}

const s = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: 'grey',
  },

  avatar: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  image: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },

  info: {
    flexGrow: 1,
    justifyContent: 'flex-start',
    paddingLeft: 10,
  },

  text: {
    fontSize: 12,
  },

  name: {
    fontWeight: 'bold',
    fontSize: 18,
    paddingBottom : 5
  },
});

export default ContactsListItem;
