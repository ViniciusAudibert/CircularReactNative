import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

class HeaderHome extends Component {
    /*<Image style={styles.headHome} source={backgroundUrl}>
                <Text style={styles.titleHome}>{this.props.title}</Text>
            </Image>*/
    render() {
        return (
            <View style={styles.headHome}>
                <Text style={styles.titleHome}>{this.props.title}</Text>
            </View>
        );
    }
}

const backgroundUrl = require('./../assets/images/background.png');

const styles = StyleSheet.create({
    headHome: {
        height: 55,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#166D8F'
    },
    titleHome: {
        color: '#fff',
        fontSize: 25,
        fontWeight: '900'
    }
});

export default HeaderHome;
