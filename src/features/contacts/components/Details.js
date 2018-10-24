import React, { PureComponent } from 'react';
import { View, ScrollView, Image, Text, ImageBackground, StyleSheet } from 'react-native';
import { getRandomPattern } from '@utilities/helpers';

class Details extends PureComponent {
  patternSource = getRandomPattern();

  get avatar() {
    return this.props.navigation.state.params.picture.large;
  }

  get username() {
    return this.props.navigation.state.params.login.username;
  }

  get email() {
    return this.props.navigation.state.params.email;
  }

  get phone() {
    return this.props.navigation.state.params.phone;
  }

  get gender() {
    return this.props.navigation.state.params.gender;
  }

  get age() {
    return this.props.navigation.state.params.dob.age;
  }

  render() {
    return (
      <View style={s.wrapper}>
        <ScrollView>
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
              <Text style={s.handle}>@{this.username}</Text>
            </View>

          </ImageBackground>

          <View>
            <View style={s.section}>
              <View style={[s.row, s.rowBorderless]}>
                <View style={s.cell}>
                  <Text>Email</Text>
                </View>

                <View style={s.cell}>
                  <Text style={s.value}>{this.email}</Text>
                </View>
              </View>

              <View style={s.row}>
                <View style={s.cell}>
                  <Text>Phone</Text>
                </View>

                <View style={s.cell}>
                  <Text style={s.value}>{this.phone}</Text>
                </View>
              </View>
            </View>

            <View style={s.section}>
              <View style={[s.row, s.rowBorderless]}>
                <View style={s.cell}>
                  <Text>Username</Text>
                </View>

                <View style={s.cell}>
                  <Text style={s.value}>{this.username}</Text>
                </View>
              </View>
            </View>

            <View style={s.section}>
              <View style={[s.row, s.rowBorderless]}>
                <View style={s.cell}>
                  <Text>Age</Text>
                </View>

                <View style={s.cell}>
                  <Text style={s.value}>{this.age}</Text>
                </View>
              </View>

              <View style={s.row}>
                <View style={s.cell}>
                  <Text>Gender</Text>
                </View>

                <View style={s.cell}>
                  <Text style={s.value}>{this.gender}</Text>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const s = StyleSheet.create({
  wrapper: {
    flex: 1,
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
    opacity: 0.65,
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

  handle: {
    fontWeight: 'bold',
    color: 'white',
    lineHeight: 20,
  },

  section: {
    marginTop: 25,
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: 'rgba(165, 165, 165, 0.5)',
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: 'rgba(165, 165, 165, 0.5)',
  },

  rowBorderless: {
    borderTopWidth: 0,
    borderTopColor: 'transparent',
  },

  value: {
    fontSize: 14,
    color: 'grey',
  },
});

export default Details;
