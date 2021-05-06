import { TabNavigationState } from '@react-navigation/core';
import * as React from 'react';
import { Alert, StyleSheet } from 'react-native';

import { Text, View } from '../components/Themed';
import createMessage from '../providers/message';
import { Button } from 'react-native-elements/dist/buttons/Button';
import { Slider } from 'react-native-elements/dist/slider/Slider';
import { TextInput } from 'react-native-gesture-handler';

interface TabTwoScreenState {
  text: string
}

export default class PostScreen extends React.Component<any, TabTwoScreenState> {

  constructor(props: any) {
    super(props);
    this.state={text:""}
  }

  sliderChanged = (value) => {

  }

  postMessage = (aridokateuamsa:string)=>{
    if(aridokateuamsa.length<5){
      Alert.alert("Please compose a proper thought!")
    }else{
      createMessage(aridokateuamsa);
      this.setState({text:""})
    }
  }

  render() {
    return (
      <View style={styles.container}>
        {/* <Text style={styles.title}>Tab Two</Text>
        {this.state.userID ? <Text>{this.state.userID}</Text> : <Text>No UUID</Text>}
        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
        <Button onPress={() => {  }} title="test" ></Button>
        <EditScreenInfo path="/screens/TabTwoScreen.tsx" /> */}
        <View style={styles.titleHolder}>
          <Text style={styles.title}>Compose your thoughts?</Text>
        </View>
        <View style={styles.textArea}>
          <TextInput style={styles.textInput}
          multiline={true}
          onChange={(change)=>{
            this.setState({text:change.nativeEvent.text})
          }} value={this.state.text} placeholder={'Brodcast your thoughts...'}/>
        </View>
        <View style={styles.submitButton}>
          <Button title="test" onPress={()=>{this.postMessage(this.state.text)}}></Button>
        </View>
        {/* <View style={styles.slider}>
          <Slider minimumValue={0} maximumValue={4} step={1} onValueChange={this.sliderChanged} />
        </View> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width:"100%",
    alignItems: 'center',
    justifyContent: 'center',
    flexBasis: 12,
    paddingTop:40 ,
    flexDirection: "column",
  },
  titleHolder: {
    flex: 1,
    paddingTop: 16,
    alignContent: 'center'
  },
  textArea:{
    backgroundColor:"#eee",
    flex:10,
    padding:16,
    paddingBottom:40
  },
  textInput:{
    
  },
  slider: {
    flex: 1,
    padding: 32,

  },
  submitButton:{
    flex:1
  },
  title: {
    fontSize: 20,
    flex:1,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
