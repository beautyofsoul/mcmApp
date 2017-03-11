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
                        renderIcon={() => <Icon containerStyle={{justifyContent: 'center', alignItems: 'center', marginTop: 12}} color={'#ffffff'} name='baojing'
                                type='mcm' size={30} />}
                        renderSelectedIcon={() => <Icon color={'#60fdfb'} name='baojing'
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
                        renderIcon={() => <Icon containerStyle={{justifyContent: 'center', alignItems: 'center', marginTop: 12}} color={'#ffffff'} name='anzhuangfangshi'
                                type='mcm' size={30} />}
                        renderSelectedIcon={() => <Icon color={'#60fdfb'} name='anzhuangfangshi'
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

                        renderIcon={() => <Icon containerStyle={{justifyContent: 'center', alignItems: 'center', marginTop: 12}} color={'#ffffff'} name='genghuan'
                                type='mcm' size={30} />}
                        renderSelectedIcon={() => <Icon color={'#60fdfb'} name='genghuan'
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

                        renderIcon={() => <Icon containerStyle={{justifyContent: 'center', alignItems: 'center', marginTop: 12}} color={'#ffffff'} name='shebeixunjian'
                                type='mcm' size={30} />}
                        renderSelectedIcon={() => <Icon color={'#60fdfb'} name='shebeixunjian'
                                type='mcm' size={30} />}
                        onPress={() => this.changeTab('check')}>
                        <CheckScene navigator={ this.props.navigator}/>
                    </Tab>

                    <Tab
                        tabStyle={styles.tabStyle}
                        titleStyle={[styles.titleStyle]}
                        selectedTitleStyle={[styles.selectedTitleStyle]}
                        selected={selectedTab === 'person'}
                        title={'我'}
                        renderIcon={() => <Icon containerStyle={{justifyContent: 'center', alignItems: 'center', marginTop: 12}} color={'#ffffff'} name='wode'
                                type='mcm' size={30} />}
                        renderSelectedIcon={() => <Icon color={'#60fdfb'} name='wode'
                                type='mcm' size={30} />}
                        onPress={() => this.changeTab('person')}>
                        <PersonScene navigator={ this.props.navigator} />
                    </Tab>

                </Tabs>

            </View>
        );
    };
}
