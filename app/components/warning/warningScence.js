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


const styles = {
    container: {
        flex: 1,
    },
};


const titleConfig = {
    title: '报警',
    tintColor: "#ffffff"
};


export default  class WarningScene extends Component {
    constructor(props) {
        super(props);
        this.state = {
            terminalDatas: {
                rows: [{
                    imeiNo: "35245020925296",
                    address: "xxxxxxx",
                    status: 1,
                    longitude: 113.981718,
                    latitude: 22.542449
                }, {
                    imeiNo: "35245020925296",
                    address: "xxxxxxx",
                    status: 1,
                    longitude: 113.981718,
                    latitude: 22.542449
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
                <NavigationBar tintColor="#2b96f4"
                               title={titleConfig}
                               leftButton={leftButtonConfig}
                />
                <SearchBar
                    lightTheme
                    onChangeText={this.doSearch.bind(this)}
                    placeholder='请输入井盖编号/imei号'/>
                <TerminalList navigator={this.props.navigator} terminalDatas={this.state.terminalDatas}></TerminalList>

            </View>
        );
    }
}
