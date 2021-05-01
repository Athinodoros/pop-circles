import { Ionicons } from '@expo/vector-icons';
import * as React from 'react';
import { Alert, ListViewComponent, StyleSheet } from 'react-native';
import { Card } from 'react-native-elements';
import { ListItem } from 'react-native-elements/dist/list/ListItem';
import * as Device from 'expo-device';
import * as Constants from 'expo-constants';

import EditScreenInfo from '../components/EditScreenInfo';
import PopCard from '../components/PopCard';
import { Text, View } from '../components/Themed';
import ExpoStatusBar from 'expo-status-bar/build/ExpoStatusBar';
export default class TabOneScreen extends React.Component {

  ignore = () => {
    Alert.alert("Ignored")
  }

  upVote = () => {
    Alert.alert("Up voted")

  }

  skip = () => {
    Alert.alert("skipped for now")

  }

  downVote = () => {
    Alert.alert("Down voted")

  }


  render() {

    return (
      <View style={styles.container}>
        <PopCard upVote={this.upVote} downVote={this.downVote} skip={this.skip} ignore={this.ignore} title={"test passed title"} content={""} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    marginEnd: 8,
    fontWeight: 'bold',
  },
  separator: {
    marginEnd: 8,
    height: 1,
    width: '80%',
  },
  options: {
    flex: 1,
    flexBasis: 4,
    flexDirection: 'row',
    height: 40,
    width: "100%",

    flexWrap: 'wrap',
    justifyContent: "space-around",
    alignContent: 'space-between'
  },
  option: {
    flex: 1,
    // justifyContent: 'center',
    // alignContent:'center',

  }
});
