import React, { PureComponent } from "react";
import { Image, StyleSheet } from "react-native";

class TabBarIcon extends PureComponent {
  get customStyles() {
    if (this.props.size !== undefined) {
      return { width: this.props.size, height: this.props.size };
    }

    return {};
  }

  render() {
    return (
      <Image
        source={this.props.source}
        style={[s.icon, this.customStyles]}
        resizeMode="contain"
      />
    );
  }
}

const s = StyleSheet.create({
  icon: {
    width: 35,
    height: 35,
  },
});

export default TabBarIcon;
