import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, ScrollView, View } from 'react-native';

import HeaderHome from './components/header.home';
import ClockBar from './components/clock.bar';
import ClockList from './components/clock.list';
import CircularCtrl from './controllers/circular.info.controller';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      clockList: {}
    };

    this.setClockList = this.setClockList.bind(this);
  }

  componentWillMount() {
    this.setClockList(CircularCtrl.getCircularInfoByHour(2, null, null));
  }

  setClockList(clockList) {
      this.setState({ clockList: clockList });
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <HeaderHome title="Circular Unisinos" />
        <ClockBar setClockList={this.setClockList}/>
        {
          Object.keys(this.state.clockList).map((week, index) => (<ClockList key={index} weekKey={week} weekVal={this.state.clockList[week]} />))
        }
        <View style={styles.bottomSpace}></View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  bottomSpace:{
    height: 15
  }
});


