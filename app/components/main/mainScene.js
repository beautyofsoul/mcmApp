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
    Alert,
    StatusBar
} from 'react-native';


import { Tabs, Tab } from 'react-native-elements';

import Icon from '../custom/iconItem';

import WarningScene from '../warning/warningScence';


import InstallScene from '../install/installScene';

import  CheckScene from '../check/checkScene';

import  PersonScene from '../person/personScene';

import ChangeScene from '../change/changeScene';

import GlobalMap from "../../utils/global-map"

const styles = {
    container: {
        flex: 1,
        backgroundColor:GlobalMap.gloableBackgroundColor
    },
    tabBarStyle:{
        backgroundColor:GlobalMap.gloableBackgroundColor,
        borderTopWidth:0.5,

        borderTopColor:GlobalMap.defaultLineColor,
        height:62

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
        color:GlobalMap.globalDeActiveColor,
        fontSize:13
    },
    selectedTitleStyle:{
        color:GlobalMap.globalActiveColor,
        fontSize:13
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
                        renderIcon={() => <Icon containerStyle={{justifyContent: 'center', alignItems: 'center', marginTop: 12}} color={GlobalMap.globalDeActiveColor} name='baojing'
                                type='mcm' size={30} />}
                        renderSelectedIcon={() => <Icon color={GlobalMap.globalActiveColor} name='baojing'
                                type='mcm' size={30} />}
                        onPress={() => this.changeTab('warning')}>
                        <WarningScene  navigator={ this.props.navigator} />
                    </Tab>
                    <Tab
                        tabStyle={styles.tabStyle}
                        titleStyle={[styles.titleStyle]}
                        selectedTitleStyle={[styles.selectedTitleStyle]}
                        selected={selectedTab === 'install'}
                        title={'安装'}
                        renderIcon={() => <Icon containerStyle={{justifyContent: 'center', alignItems: 'center', marginTop: 12}} color={GlobalMap.globalDeActiveColor} name='anzhuangfangshi'
                                type='mcm' size={30} />}
                        renderSelectedIcon={() => <Icon color={GlobalMap.globalActiveColor} name='anzhuangfangshi'
                                type='mcm' size={30} />}
                        onPress={() => this.changeTab('install')}>
                        <InstallScene navigator={ this.props.navigator}/>
                    </Tab>
                    <Tab
                        tabStyle={styles.tabStyle}
                        titleStyle={[styles.titleStyle]}
                        selectedTitleStyle={[styles.selectedTitleStyle]}
                        selected={selectedTab === 'change'}
                        title={'更换'}

                        renderIcon={() => <Icon containerStyle={{justifyContent: 'center', alignItems: 'center', marginTop: 12}} color={GlobalMap.globalDeActiveColor} name='genghuan'
                                type='mcm' size={30} />}
                        renderSelectedIcon={() => <Icon color={GlobalMap.globalActiveColor} name='genghuan'
                                type='mcm' size={30} />}
                        onPress={() => this.changeTab('change')}>
                        <ChangeScene navigator={ this.props.navigator}/>
                    </Tab>
                    <Tab
                        tabStyle={styles.tabStyle}
                        titleStyle={[styles.titleStyle]}
                        selectedTitleStyle={[styles.selectedTitleStyle]}
                        selected={selectedTab === 'check'}
                        title={'巡检'}

                        renderIcon={() => <Icon containerStyle={{justifyContent: 'center', alignItems: 'center', marginTop: 12}} color={GlobalMap.globalDeActiveColor} name='shebeixunjian'
                                type='mcm' size={30} />}
                        renderSelectedIcon={() => <Icon color={GlobalMap.globalActiveColor} name='shebeixunjian'
                                type='mcm' size={30} />}
                        onPress={() => this.changeTab('check')}>
                        <CheckScene navigator={ this.props.navigator}/>
                    </Tab>

                    <Tab
                        tabStyle={styles.tabStyle}
                        titleStyle={[styles.titleStyle]}
                        selectedTitleStyle={[styles.selectedTitleStyle]}
                        selected={selectedTab === 'person'}
                        title={'更多'}
                        renderIcon={() => <Icon containerStyle={{justifyContent: 'center', alignItems: 'center', marginTop: 12}} color={GlobalMap.globalDeActiveColor} name='gengduo'
                                type='mcm' size={30} />}
                        renderSelectedIcon={() => <Icon color={GlobalMap.globalActiveColor} name='gengduo'
                                type='mcm' size={30} />}
                        onPress={() => this.changeTab('person')}>
                        <PersonScene navigator={ this.props.navigator} />
                    </Tab>

                </Tabs>

            </View>
        );
    };
}
