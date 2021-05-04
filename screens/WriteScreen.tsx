import { TabNavigationState } from '@react-navigation/core';
import * as React from 'react';
import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { getValueFor, USER_ID } from '../Store/secureStore';
import createMessage from '../providers/message';
import { Button } from 'react-native-elements/dist/buttons/Button';

interface TabTwoScreenState{
  userID:string
}

export default class  TabTwoScreen extends React.Component<any,TabTwoScreenState> {
 
  constructor(props:any){
    super(props);
    this.state={userID:""};

    getValueFor(USER_ID).then(value=>{
      this.setState({userID:value})
    })
  }

  render(){
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Tab Two</Text>
       {this.state.userID? <Text>{this.state.userID}</Text>: <Text>No UUID</Text>}
        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
        <Button onPress={()=>{createMessage("I hope the world can be connected in a meaningfull way too!")}} title="test" ></Button>
        <EditScreenInfo path="/screens/TabTwoScreen.tsx" />
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
