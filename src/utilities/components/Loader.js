import React, { PureComponent } from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';

class Loader extends PureComponent {
  render() {
    return (
      <View style={s.wrapper}>
        <ActivityIndicator />
      </View>
    );
  }
}

const s = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Loader;
