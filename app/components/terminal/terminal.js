/**
 * Created by qiaoyang on 3/7/17.
 */

import React, {Component} from 'react';
import {AppRegistry, ListView, Text, View, StyleSheet} from 'react-native';
import {Icon} from 'react-native-elements';
import BaiduMap from '../baidumap/BaiduMap'

export default class Termial extends Component {
    constructor(props) {
        super(props);

        this.state = props.rowData;
    }

    _doLocation()
    {
        this.props.navigator.push({
            name: 'Map Scene',
            component: BaiduMap,
            params:{
                ...this.state
            }
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.infoContainer}>
                    <Text style={[styles.txtTitle]}>imei号:</Text><Text
                    style={styles.txtContent}>{this.state.imeiNo}</Text>
                </View>
                <View style={[styles.infoContainer,styles.bottomLine]}>
                    <Text style={[styles.txtTitle]}>地址:</Text><Text style={styles.txtContent}>{this.state.address}</Text>
                </View>
                <View style={[styles.infoContainer,{justifyContent:"flex-end"}]}>
                    <Icon
                        size={15}
                        iconStyle={styles.iconStyle}
                        name='location'
                        type='entypo'
                        color='#517fa4'
                        onPress={this._doLocation.bind(this)}
                    /><Text style={styles.actionText}>去处理</Text><Icon
                    size={15}
                    name='chevron-right'
                    type='entypo'
                    color='#517fa4'
                />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        borderWidth: 1,
        borderColor: "#808080",
        marginLeft: 5,
        marginRight: 5,
        borderRadius: 5,
        marginBottom: 20

    },
    txtTitle: {
        fontSize: 15
    },
    txtContent: {
        fontSize: 15
    },
    infoContainer: {
        flexDirection: "row",

        height: 30,
        alignItems:"center",
        paddingLeft:10
    },
    bottomLine: {
        borderBottomWidth: 1,
        borderBottomColor: "#808080"

    },
    iconStyle:{
        marginRight:20
    },
    actionText:{
        fontSize: 16,
        color:"#517fa4",
        fontWeight:"600"

    }

});
