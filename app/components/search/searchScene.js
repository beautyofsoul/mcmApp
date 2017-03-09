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

import {SearchBar} from 'react-native-elements';
import ScrollableTabView, {DefaultTabBar, } from 'react-native-scrollable-tab-view';


const styles = {
    container: {
        flex: 1,
    },
};


const titleConfig = {
    title: '用户登录',
    tintColor: "#ffffff"
};

export default  class SearchScene extends Component {
    constructor(props) {
        super(props);
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
                               title={<SearchBar containerStyle={{borderTopWidth:0,borderBottomWidth:0,width:200,paddingTop:20,backgroundColor:'transparent'}}
                                icon={{style:{left:0,top:27}}}
                                underlineColorAndroid="transparent" inputStyle={{padding: 0,height:30,margin:0,backgroundColor:"#ffffff",paddingLeft:16}}
                               placeholder='井盖编号/imei号'/>}
                               leftButton={leftButtonConfig}
                />
                <ScrollableTabView
                    style={{marginTop: 0, }}
                    renderTabBar={() => <DefaultTabBar />}
                >
                    <Text tabLabel='报警管理'>My</Text>
                    <Text tabLabel='安装任务'>favorite</Text>
                    <Text tabLabel='更换任务'>project</Text>
                    <Text tabLabel='巡检'>project</Text>
                </ScrollableTabView>

            </View>
        );
    }
}
