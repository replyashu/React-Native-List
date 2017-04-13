/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  TouchableHighlight,
  Text,
  ListView,
  View,
  Image
} from 'react-native';

var productArray = [];


export default class AwesomeProject extends Component {

  constructor(props) {
      console.warn("constructor");
      super(props);
      var dataSource = new ListView.DataSource({rowHasChanged:(r1,r2) => r1.guid != r2.guid});
     this.state = {
        dataSource: dataSource.cloneWithRows(productArray),
       isLoading:true
     }
}

  componentDidMount() {
    console.warn("componentDidMount");
        this.getTheData(function(json){
         productArray = json;
          console.warn(productArray);
         this.setState({
           dataSource:this.state.dataSource.cloneWithRows(productArray),
           isLoading:false
         })
        }.bind(this));
         console.warn("component ->  " + this.state.isLoading);
  }

  getTheData(callback) {
    console.warn("callback");
        var url = "https://raw.githubusercontent.com/darkarmyIN/React-Native-DynamicListView/master/appledata.json";

    fetch(url)
         .then(response => response.json())
         .then(json => callback(json))
         .catch(error => console.warn("error"));
   }

renderRow(rowData, sectionID, rowID) {
   console.warn("renderRow");
       return (
           <TouchableHighlight underlayColor='#dddddd' style={{height:44}}>
            <View>
            <Text style={{fontSize: 20, color: '#000000'}} numberOfLines={1}>{rowData.display_string}</Text>
            <Text style={{fontSize: 20, color: '#000000'}} numberOfLines={1}>test</Text>
            <View style={{height: 1, backgroundColor: '#dddddd'}}/>
           </View>
       </TouchableHighlight>
   );
}

   render() {
      console.warn("render" + this.state.isLoading);
      var currentView = (this.state.isLoading) ? <View style={{height: 110, backgroundColor: '#dddddd'}} /> : <ListView dataSource={this.state.dataSource} renderRow={this.renderRow.bind(this)} enableEmptySections={true}/>
      return(
        <View>
          {currentView}
        </View>
      );
     }
}

//fetch('http://merchant.licious.in/api/grabapp/search?key=7UUT86&lat=13.082715&lng=80.27079999997',
//        {
//            'method': 'GET',
//            'headers': {
//                'Accept': 'text/plain',
//            }
//        }
//    )
//.then((response) => response.text())
//.then((responseText) => {
//    console.log(responseText);
//})
//.catch((error) => {
//    console.warn(error);
//});
//
//const styles = StyleSheet.create({
//  container: {
//    flex: 1,
//    justifyContent: 'center',
//    alignItems: 'center',
//    backgroundColor: '#AAAAAA',
//  },
//  welcome: {
//    fontSize: 30,
//    textAlign: 'center',
//    margin: 5,
//  },
//  instructions: {
//    textAlign: 'center',
//    color: '#993939',
//    marginBottom: 4,
//  },
//});


AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
