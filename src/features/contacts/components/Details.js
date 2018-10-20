import React, { PureComponent } from 'react';
import { View, Image, Text, ImageBackground, StyleSheet } from 'react-native';
import { getRandomPattern } from '@utilities/helpers';

class Details extends PureComponent {
  componentDidMount() {

  }

  patternSource = getRandomPattern();

  get avatar() {
    return this.props.navigation.state.params.picture.large;
  }

  get fullName() {
    const { name } = this.props.navigation.state.params;

    return `${name.first} ${name.last}`;
  }

  get userName() {
    return `@${this.props.navigation.state.params.login.username}`;
  }

  render() {
    return (
      <View style={s.wrapper}>
        <ImageBackground
          resizeMode='repeat'
          source={this.patternSource}
          style={s.jumbotron}
        >
          <View style={s.overlay} />

          <View style={s.imageWrapper}>
            <Image
              style={s.avatar}
              source={{ uri: this.avatar }}
            />
          </View>

          <View style={s.info}>
            <Text style={[s.text, s.name]}>{this.fullName}</Text>
            <Text style={s.text}>{this.userName}</Text>
          </View>

        </ImageBackground>

      </View>
    );
  }
}

const s = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: 'blue'
  },

  jumbotron: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: 240,
    paddingTop: 25,
    backgroundColor: 'green',
  },

  overlay: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: 'grey',
    opacity: 0.45,
  },

  avatar: {
    width: 100,
    height: 100,
    overflow: 'hidden',
    borderRadius: 8,
  },

  imageWrapper: {
    borderRadius: 8,
    borderWidth: 4,
    borderColor: 'white',
    shadowColor: "black",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
    elevation: 11,
  },

  info: {
    alignItems: 'center',
    marginTop: 8,
  },

  text: {
    lineHeight: 20,
  },

  name: {
    fontSize: 26,
    lineHeight: 32,
    fontWeight: 'bold'
  },
});

export default Details;
