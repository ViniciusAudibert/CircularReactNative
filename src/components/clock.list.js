import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

class ClockList extends Component {
    render() {
        return (
            <View>
                <View>
                    <Text style={styles.calmTitle}>
                        {this.props.weekKey}
                    </Text>
                </View>

                    { 
                        Object.keys(this.props.weekVal).map( (shift,index) => (
                            <View key={index} style={styles.itemDivider}>
                                <Text style={styles.titleDivider}>{shift}</Text>

                                {
                                    this.props.weekVal[shift].map( (times,index) => (
                                        <View key={index} style={styles.itemRow}>      
                                            {
                                                times.map( (time,index) => (  
                                                    <Text style={styles.itemHour} key={index}>{time}</Text>
                                                ))
                                            }
                                        </View>
                                    ))
                                }
                            </View>
                        )) 
                    }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    itemRow: {
        flex: 1,
        flexDirection: 'row'
    }, 
    itemHour: {
        flex: 2,
        justifyContent: 'center',
        paddingVertical: 20,
        textAlign: 'center',
        paddingHorizontal: 20,
        marginHorizontal: 5,
        marginTop: 10,
        borderWidth: 1,
        borderStyle: 'solid',
        fontSize: 16,
        borderColor: '#ddd',
        backgroundColor: '#eaeaea'
    },
    calmTitle: {
        color: '#11c1f3',
        paddingBottom: 20,
        fontSize: 20,
        fontWeight: '900',
        textAlign: 'center'
    }, 
    itemDivider: {
        marginHorizontal: 15
    },
    titleDivider: {
        backgroundColor: '#f5f5f5',
        paddingHorizontal: 28,
        paddingVertical: 12,
        color: '#222',
        fontWeight: '500',
        borderWidth: 1,
        borderStyle: 'solid',
        fontSize: 16,
        borderColor: '#ddd'
    }
});

export default ClockList;
