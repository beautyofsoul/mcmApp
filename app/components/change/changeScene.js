/**
 * Created by qiaoyang on 3/7/17.
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

import {SearchBar} from 'react-native-elements';
import ScrollableTabView, {DefaultTabBar,} from 'react-native-scrollable-tab-view';

import TerminalList from '../terminal/terminalList';

import GlobalMap from '../../utils/global-map';

import InputItem from '../custom/inputItem';

const styles = {
    container: {
        flex: 1,
    },
};


const titleConfig = {
    title: '更换',
    tintColor: "#ffffff",
    style:GlobalMap.navTxtStyle
};


export default  class CheckScene extends Component {
    constructor(props) {
        super(props);
        this.state = {
            terminalDatas: {
                rows: [{
                    imeiNo: "35245020925296",
                    address: "江苏省南京市雨花台区宁水路",
                    status: 1,
                    longitude: 118.75640161980023,
                    latitude: 31.96089205813655
                }, {
                    imeiNo: "35245020925296",
                    address: "江苏省南京市雨花台区安德门大街19-1号",
                    status: 1,
                    longitude: 118.76869942223183,
                    latitude: 31.993259599110157
                }]

            }
        }
    }

    doSearch(text) {

    }


    render() {
        const leftButtonConfig = {
            title: 'Back',
            handler: () => this.props.navigator.pop(),
            tintColor: "#ffffff"
        };
        return (
            <View style={styles.container}>
                <NavigationBar tintColor={GlobalMap.globalStatusBarBackColor}
                               title={titleConfig}
                />
                <InputItem iconColor={GlobalMap.activeColor} rightIcon={true} containerStyle={{marginLeft:5,marginRight:5}}
                           underlineColorAndroid={GlobalMap.defaultLineColor} iconName="sousuo" iconType="mcm"
                           placeholderTextColor={GlobalMap.activeColor}
                           placeholder="请输入井盖编号/imei号"></InputItem>
                <TerminalList navigator={this.props.navigator} terminalDatas={this.state.terminalDatas}></TerminalList>

            </View>
        );
    }
}
