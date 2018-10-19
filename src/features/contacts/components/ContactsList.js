import React, { PureComponent } from 'react';
import { FlatList } from 'react-native';
import ContactsListItem from './ContactsListItem';

class ContactsList extends PureComponent {
  render() {
    return (
      <FlatList
        data={this.props.items}
        renderItem={({ item }) => (
          <ContactsListItem
            name={`${item.name.first} ${item.name.last}`}
            email={item.email}
            phone={item.phone}
            avatar={item.picture.medium}
          />
        )}
        keyExtractor={(item) => item.email}
        refreshing={this.props.isRefreshing}
        onRefresh={this.props.onRefresh}
      />
    );
  }
}

export default ContactsList;
