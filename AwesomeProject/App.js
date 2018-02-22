import React from 'react';
import { StyleSheet, Text, TextInput, Button, View } from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.font}>Awesome Project.</Text>
        <TextInput
          style={styles.font}
          placeholder="Type here to translate!"
        />
       <Button style={styles.button} title="Press here" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    padding: 50,
    height: 40,
    backgroundColor: '#3b5998',
    alignItems: 'center',
    justifyContent: 'center',
  },
  font: {
    marginBottom: 200,
    marginLeft: 40,
    height: 50,
    justifyContent: 'space-between',
    width: 200,
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  button: {
    margin: 30,
  }
});
