import React, { PureComponent } from 'react';
import { FlatList, View, ActivityIndicator, StyleSheet } from 'react-native';
import ContactsListItem from './ContactsListItem';

class ContactsList extends PureComponent {
  keyExtractor = (item) => {
    return item.email;
  };

  renderItem = ({ item }) => {
    return (
      <ContactsListItem
        name={`${item.name.first} ${item.name.last}`}
        email={item.email}
        phone={item.phone}
        avatar={item.picture.medium}
      />
    );
  };

  renderListFooter = () => {
    if (!this.props.isRefreshing) {
      return null;
    }

    return (
      <View style={s.footer}>
        <ActivityIndicator size="large" />
      </View>
    );
  };

  render() {
    return (
      <FlatList
        data={this.props.items}
        renderItem={this.renderItem}
        keyExtractor={this.keyExtractor}
        refreshing={this.props.isRefreshing}
        ListFooterComponent={this.renderListFooter}
        onRefresh={this.props.onRefresh}
        onEndReached={this.props.onEndReached}
        onEndReachedThreshold={0}
      />
    );
  }
}

const s = StyleSheet.create({
  footer: {
    padding: 10,
  },
});

export default ContactsList;
