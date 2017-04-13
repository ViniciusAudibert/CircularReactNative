import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, ScrollView} from 'react-native';

import HeaderHome from './src/components/header.home';
import ClockBar from './src/components/clock.bar';
import ClockList from './src/components/clock.list';
import CircularCtrl from './src/controllers/circular.info.controller';

export default class CircularReactNative extends Component {
  constructor(props) {
    super(props);

    this.state = {
      clockList: {}
    };
  }

  componentWillMount() {
    this.setState({ clockList: CircularCtrl.getCircularInfoByHour(2,null,null)});
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <HeaderHome title="Circular Unisinos"/>
        <ClockBar/> 
        { 
          Object.keys(this.state.clockList).map( (week,index) => (<ClockList key={index} weekKey={week} weekVal={this.state.clockList[week]} />)) 
        }

      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

AppRegistry.registerComponent('CircularReactNative', () => CircularReactNative);
