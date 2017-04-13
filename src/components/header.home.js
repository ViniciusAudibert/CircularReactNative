import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

class HeaderHome extends Component {
    /*<Image style={styles.headHome} source={backgroundUrl}>
                <Text style={styles.titleHome}>{this.props.title}</Text>
            </Image>*/
    render() {
        return (
        /*    <View style={styles.headHome}>
                <Text style={styles.titleHome}>{this.props.title}</Text>
            </View>*/
            <View style={styles.headHome}>
            <Image style={styles.imgBackgroud} source={require('./../assets/images/background.png')}>
                 <Text style={styles.titleHome}>{this.props.title}</Text>
            </Image>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    headHome: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#000000',
        height: 55,
        
    },
    titleHome: {
        fontSize: 25,
        fontWeight: '900',
        backgroundColor: 'rgba(0,0,0,0)',
        color: 'white',
        marginTop: -40
    },
    imgBackgroud:{
        paddingTop: 60,
        alignItems: 'center',
        height: 55
    }
});

export default HeaderHome;
