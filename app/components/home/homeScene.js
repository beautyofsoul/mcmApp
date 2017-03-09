/**
 * Created by qiaoyang on 3/5/17.
 */

'use strict'

import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    Alert
} from 'react-native';

import NavigationBar from 'react-native-navbar';


import {Icon} from 'react-native-elements';

import  MainScene from '../main/mainScene';

const styles = {
    container: {
        flex: 1
    },
    iconMain:{
        marginTop:80
    },
    lineContainer:{
        flexDirection: "row",
        paddingLeft:20,
        paddingRight:20,
        paddingBottom:20,
    },
    iconContainer: {
        flex:1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    },
    iconText:{
        fontSize:20,
        fontWeight:"600"
    }
};


const titleConfig = {
    title: '井盖智能检测APP',
    tintColor: "#ffffff"
};


export default class HomeScene extends Component {

    constructor(props) {
        super(props);
        this.state = {loginName: "", loginPassWord: ""};
    }

    _getLoginName(val) {
        this.setState({loginName, val});

    };

    _goWaring() {
        this.props.navigator.push({
            name: 'Main Scene',
            component: MainScene,
            params:{
                selectedTab:"warning"
            }
        });
    };

    _goInstall() {
        this.props.navigator.push({
            name: 'Main Scene',
            component: MainScene,
            params:{
                selectedTab:"install"
            }
        });
    };


    _goCheck() {
        this.props.navigator.push({
            name: 'Main Scene',
            component: MainScene,
            params:{
                selectedTab:"check"
            }
        });
    };

    _goHelp() {
        this.props.navigator.push({
            name: 'Main Scene',
            component: MainScene,
            params:{
                selectedTab:"help"
            }
        });
    };
    render() {
        const leftButtonConfig = {
            title: 'Back',
            handler: () => this.props.navigator.pop(),
            tintColor: "#ffffff"
        };
        return (
            <View style={styles.container}>
                <NavigationBar tintColor="#2b96f4"
                               title={titleConfig}
                />

                <View style={styles.iconMain}>
                    <View style={styles.lineContainer}>
                        <View style={styles.iconContainer}>
                            <Icon
                                reverse
                                name='md-search'
                                type='ionicon'
                                color='#0096fb'
                                size={45}
                                containerStyle={{borderRadius:10}}
                                onPress={this._goWaring.bind(this)}
                            />
                            <Text style={styles.iconText}>查询</Text>
                        </View>
                        <View style={styles.iconContainer}>
                            <Icon
                                reverse
                                name='md-hammer'
                                type='ionicon'
                                color='#009c88'
                                size={45}
                                containerStyle={{borderRadius:10}}
                                onPress={this._goInstall.bind(this)}
                            />
                            <Text style={styles.iconText}>安装</Text>
                        </View>
                    </View>
                    <View style={styles.lineContainer}>
                        <View style={styles.iconContainer}>
                            <Icon
                                reverse
                                name='md-checkmark-circle'
                                type='ionicon'
                                color='#fe0058'
                                size={45}
                                containerStyle={{borderRadius:10}}
                                onPress={this._goCheck.bind(this)}
                            />
                            <Text style={styles.iconText}>巡检</Text>
                        </View>
                        <View style={styles.iconContainer}>
                            <Icon
                                reverse
                                name='md-help'
                                type='ionicon'
                                color='#5700b9'
                                size={45}
                                containerStyle={{borderRadius:10}}
                                onPress={this._goHelp.bind(this)}
                            />
                            <Text style={styles.iconText}>帮助</Text>
                        </View>
                    </View>
                </View>

            </View>
        );
    };
}
