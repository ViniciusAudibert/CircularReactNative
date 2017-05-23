import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { TextInputMask } from 'react-native-masked-text';

import CircularCtrl from '../controllers/circular.info.controller';

class ClockBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        };
    }

    sortList(text) {
        this.setState({
            text
        }, () => {
            this.props.setClockList(CircularCtrl.getCircularInfoByHour(2, null, this.state.text));
        });

    }

    render() {
        return (<TextInputMask style={styles.clockInput}
            onChangeText={(text) => { this.sortList(text); }}
            value={this.state.text}
            placeholder="Digite o horário da preferência"
            autoFocus={false}
            type={'datetime'}
            options={{ format: 'HH:mm' }}
        />);
    }
}

const styles = StyleSheet.create({
    clockInput: {
        height: 50,
        borderColor: 'gray',
        fontSize: 18,
        textAlign: 'center'
    }
});

export default ClockBar;