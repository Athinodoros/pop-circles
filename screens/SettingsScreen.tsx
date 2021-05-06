import * as React from 'react';
import { StyleSheet } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

import { Text, View } from '../components/Themed';
import Navigation from '../navigation';


export default class SettingsScreen extends React.Component {
   setEmailToCurrentUser = (email: string)=>{
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    
    if (email.match(validRegex)) {
      //TODO: save email to current User 

    }
  }

  render(){
    return (
      <View style={styles.container}>
        <Text style={styles.title}>This is the settings page</Text>
        <View style={styles.separator} lightColor="#eee"  />
        <View>
          <TextInput onChange={(change)=>{
            this.setEmailToCurrentUser(change.nativeEvent.text)
          }}></TextInput>
        </View>
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
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
