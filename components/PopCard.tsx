import React, { Component } from "react";
import { View } from "react-native";
import { Card } from "react-native-elements";
import { Text } from "./Themed";
import { Alert, ListViewComponent, StyleSheet } from 'react-native';
import { Ionicons } from "@expo/vector-icons";

export interface PopCardProps{
    upVote:()=>void,
    downVote:()=>void,
    ignore:()=>void,
    skip:()=>void,
    title:string,
    content:any
} 

export default class PopCard extends Component<PopCardProps> {


    render() {
        return (
            <View style={styles.container}>
                <Card containerStyle={{ padding: 40, flex: 1, flexBasis: 13, marginBottom: 40, flexDirection: 'row' }} >
                    <Card.Title style={{ flex: 1 }} >{this.props.title}</Card.Title>
                    <Card.Divider />
                    <Text style={{ flex: 11, marginEnd: 8 }}>
                        {this.props.content}
                     </Text>
                    <View style={styles.options}>
                        <View style={styles.option}>
                            <Ionicons name="chevron-up-outline" size={40} onPress={this.props.upVote} />
                        </View>
                        <View style={styles.option}>
                            <Ionicons name="stop-outline" size={40} onPress={this.props.ignore} />
                        </View>
                        <View style={styles.option}>
                            <Ionicons name="play-forward-outline" size={40} onPress={this.props.skip} />
                        </View>
                        <View style={styles.option}>
                            <Ionicons name="chevron-down-outline" size={40} onPress={this.props.downVote} />
                        </View>
                    </View>
                </Card>
            </View>
        )
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