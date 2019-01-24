import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

import { RectButton } from 'react-native-gesture-handler';

export default class App extends React.PureComponent {
  render() {
    return (
        <View style={styles.container}>
          <TextInput
              style={styles.textInput}
              placeholder="Focus me!"
          />
          <RectButton style={styles.button} />
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput: {
    width: 100,
    borderWidth: 1,
    borderColor: 'black',
  },
  button: {
    width: 100,
    height: 100,
    backgroundColor: 'dodgerblue',
  },
});
