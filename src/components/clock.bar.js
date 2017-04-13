import React, {Component} from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';

class ClockBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        };
    }

    render() {
        return (<TextInput
            style={styles.clockInput}
            onChangeText={(text) => this.setState({text})}
            value={this.state.text}
            placeholder="Digite o horário da preferência"
            autoFocus={false}/>);
    }
}

const styles = StyleSheet.create({
    clockInput: {
        height: 50,
        borderColor: 'gray',
        fontSize: 18
    }
});

export default ClockBar;
