import { Ionicons } from '@expo/vector-icons';
import * as React from 'react';
import { Alert, ListViewComponent, StyleSheet } from 'react-native';
import { Card } from 'react-native-elements';
import { ListItem } from 'react-native-elements/dist/list/ListItem';
import * as Device from 'expo-device';
import * as Constants from 'expo-constants';
import * as Contacts from 'expo-contacts';

import EditScreenInfo from '../components/EditScreenInfo';
import PopCard from '../components/PopCard';
import { Text, View } from '../components/Themed';
import ExpoStatusBar from 'expo-status-bar/build/ExpoStatusBar';
import voteRoutes from '../providers/vote';
export default class FeedScreen extends React.Component {

  ignore = () => {
    voteRoutes.ignore()
  }

  upVote = async () => {
    voteRoutes.upVote();
  }
  
  skip = () => {
    voteRoutes.skip()
    
  }
  
  downVote = () => {
    voteRoutes.downVote()
    
  }
  
  requestPermitions = async () => {
    let res = await Contacts.getPermissionsAsync().then(perm => {
      if (res) {
        console.log("Permitions already granted");

        return res;
      }
    })
    let resNew = Contacts.requestPermissionsAsync()
    return resNew;
  }

  getUniqueId = () => {
    let uniqueId = "";
    uniqueId += Device.modelName;
    uniqueId += Device.brand;
    uniqueId += Device.deviceName;

      return uniqueId;
  
  }


  render() {

    return (
      <View style={styles.container}>
        <PopCard upVote={this.upVote} downVote={this.downVote} skip={this.skip} ignore={this.ignore} title={"test passed title"} content={this.getUniqueId()} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    paddingTop:40 ,
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
