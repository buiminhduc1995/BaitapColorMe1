/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,Image,TextInput,TouchableOpacity,Dimensions
} from 'react-native';

var {height, width} = Dimensions.get('window')
export default class App extends Component{
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
        <Image style={styles.header} source={{uri: 'https://d2v9y0dukr6mq2.cloudfront.net/video/thumbnail/BZtHBT_Xioszoosv/videoblocks-bitcoin-mining-flat-animation-alpha-channel-4k_rv2oek38g_thumbnail-full05.png'}}/>
        </View>
        <View style={styles.content}>
        <View style={{flexDirection: 'row',}}>
        <TextInput style={{width: width/2,color:'yellow'}}placeholderTextColor="yellow" underlineColorAndroid={'transparent'} placeholder='First Name'/>
        <TextInput style={{width: width-20/2,color:'yellow',}}placeholderTextColor="yellow" underlineColorAndroid={'transparent'} placeholder='Last Name'/>
        </View>
        <TextInput style={{width: width/2,color:'yellow'}} placeholderTextColor="yellow"underlineColorAndroid={'transparent'} placeholder='Email'/>
        <TextInput style={{width: width/2,color:'yellow'}}placeholderTextColor="yellow" underlineColorAndroid={'transparent'} placeholder='Password'/>
        <TextInput style={{width: width/2,color:'yellow'}} placeholderTextColor="yellow"underlineColorAndroid={'transparent'}  placeholder='Mobile'/>
        <TouchableOpacity 
        style={{marginTop:30,
        backgroundColor:'yellow',
        width: width-40,
        height: 30,
        alignSelf:'center',
        borderRadius:15,
        justifyContent:'center'}}>
        <Text style={{alignSelf:'center',fontSize:18,color:'black'}}>SIGN UP</Text>
        </TouchableOpacity>
        </View>
        <View style={styles.footer}>
        <TouchableOpacity><Text style={{color:'yellow'}}>Don't have an account?</Text></TouchableOpacity>
        <TouchableOpacity><Text  style={{color:'yellow'}}>Sign In</Text></TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000',
  },
  Image:{
    width:width,
    height: 300,
    marginBottom: 10,
  },
  header:{
    flex:3,
    width:width,
    height: 100,
 
  },
  content:{
    flex:5,
    width:width-20,
  },
  footer:{
    flex:2,
    width: width,
    alignItems:'center'
  }
});
