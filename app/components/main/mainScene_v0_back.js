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

import { Tabs, Tab, Icon } from 'react-native-elements';

import WarningScene from '../warning/warningScence';


import InstallScene from '../install/back1';

import  CheckScene from '../check/checkScene';

import  HelpScene from '../help/helpScene';

import GlobalMap from "../../utils/global-map"

const styles = {
    container: {
        flex: 1,
        backgroundColor:GlobalMap.gloableBackgroundColor
    },
    tabBarStyle:{
        backgroundColor:GlobalMap.gloableBackgroundColor,
        borderTopWidth:1,
        borderTopColor:"#5985c0",
        height:60

    },
    tabStyle:{
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
    },
    titleStyle:{
        color:"#ffffff"
    },
    selectedTitleStyle:{
        color:"#60fdfb"
    }
};


const titleConfig = {
    title: '井盖智能检测APP',
    tintColor: "#ffffff"
};


export default class MainScene extends Component {

    constructor(props) {
        super(props);

        if(props.selectedTab)
        {
            this.state = {selectedTab: props.selectedTab};
        }
        else
        {
            this.state = {selectedTab: 'warning'};
        }


        this.changeTab = this.changeTab.bind(this)
    }


    changeTab (selectedTab) {
        this.setState({
            selectedTab
        })
    };

    _onPress() {
        alert(this.state.loginName + ":" + this.state.loginPassWord + " 登录成功！");
    };

    render() {

        const { selectedTab } = this.state;

        const leftButtonConfig = {
            title: 'Back',
            handler: () => this.props.navigator.pop(),
            tintColor: "#ffffff"
        };
        return (
            <View style={styles.container}>


                <Tabs tabBarStyle={styles.tabBarStyle}>
                    <Tab
                        tabStyle={styles.tabStyle}
                        titleStyle={[styles.titleStyle]}
                        selectedTitleStyle={[styles.selectedTitleStyle]}
                        selected={selectedTab === 'warning'}
                        title={'报警'}
                        renderIcon={() => <Icon containerStyle={{justifyContent: 'center', alignItems: 'center', marginTop: 12}} color={'#ffffff'} name='md-notifications'
                                type='ionicon' size={30} />}
                        renderSelectedIcon={() => <Icon color={'#60fdfb'} name='md-notifications'
                                type='ionicon' size={30} />}
                        onPress={() => this.changeTab('warning')}>
                        <WarningScene  navigator={ this.props.navigator} />
                    </Tab>
                    <Tab
                        tabStyle={styles.tabStyle}
                        titleStyle={[styles.titleStyle]}
                        selectedTitleStyle={[styles.selectedTitleStyle]}
                        selected={selectedTab === 'install'}
                        title={'安装'}
                        renderIcon={() => <Icon containerStyle={{justifyContent: 'center', alignItems: 'center', marginTop: 12}} color={'#ffffff'} name='md-hammer'
                                type='ionicon' size={30} />}
                        renderSelectedIcon={() => <Icon color={'#60fdfb'} name='md-hammer'
                                type='ionicon' size={30} />}
                        onPress={() => this.changeTab('install')}>
                        <InstallScene navigator={ this.props.navigator}/>
                    </Tab>
                    <Tab
                        tabStyle={styles.tabStyle}
                        titleStyle={[styles.titleStyle]}
                        selectedTitleStyle={[styles.selectedTitleStyle]}
                        selected={selectedTab === 'check'}
                        title={'巡检'}

                        renderIcon={() => <Icon containerStyle={{justifyContent: 'center', alignItems: 'center', marginTop: 12}} color={'#ffffff'} name='md-checkmark-circle'
                                type='ionicon' size={30} />}
                        renderSelectedIcon={() => <Icon color={'#60fdfb'} name='md-checkmark-circle'
                                type='ionicon' size={30} />}
                        onPress={() => this.changeTab('check')}>
                        <CheckScene navigator={ this.props.navigator}/>
                    </Tab>

                    <Tab
                        tabStyle={styles.tabStyle}
                        titleStyle={[styles.titleStyle]}
                        selectedTitleStyle={[styles.selectedTitleStyle]}
                        selected={selectedTab === 'help'}
                        title={'帮助'}
                        renderIcon={() => <Icon containerStyle={{justifyContent: 'center', alignItems: 'center', marginTop: 12}} color={'#ffffff'} name='md-help'
                                type='ionicon' size={30} />}
                        renderSelectedIcon={() => <Icon color={'#60fdfb'} name='md-help'
                                type='ionicon' size={30} />}
                        onPress={() => this.changeTab('help')}>
                        <HelpScene navigator={ this.props.navigator} />
                    </Tab>

                </Tabs>

            </View>
        );
    };
}
