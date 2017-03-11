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


import {Button} from 'react-native-elements';


import InputItem from '../custom/inputItem';

import GlobalMap from "../../utils/global-map";

import MainScene from '../main/mainScene';

const styles = {
    container: {
        flex: 1,
        backgroundColor: GlobalMap.gloableBackgroundColor,
        flexDirection: "row"
    },
    loginFrom: {
        flex: 1,
        flexDirection: "column",
        alignItems: "center"
    },
    inputContainerStyle:{
      width:250,
    },
    loginIcon: {}
};


const titleConfig = {
    title: '用户登录',
    tintColor: "#ffffff"
};


export default class LoginScene extends Component {

    constructor(props) {
        super(props);
        this.state = {loginName: "", loginPassWord: "", rememberFlag: true};
    }

    _getLoginName(val) {
        this.setState({loginName:val});

    };


    _getPassword(val) {
        this.setState({loginPassWord:val});

    };

    _onPress() {
        //alert(this.state.loginName + ":" + this.state.loginPassWord + " 登录成功！");
        const {navigator} = this.props;
        if (navigator) {


            this.props.navigator.push({
                name: 'Main Scene',
                component: MainScene,
                params:{
                    selectedTab:"warning"
                }
            });
        }
    };

    _changeRemenberFlag(){

        this.setState({rememberFlag:!this.state.rememberFlag})
    };

    render() {
        const leftButtonConfig = {
            title: 'Back',
            handler: () => this.props.navigator.pop(),
            tintColor: "#ffffff"
        };
        return (
            <View style={styles.container}>

                <View style={styles.loginFrom}>
                    <View style={{marginBottom:50,marginTop:80}}>
                        <Image style={styles.loginIcon} source={GlobalMap.loginIcon}></Image>
                    </View>

                    <InputItem value={this.state.loginName} onChangeText={this._getLoginName.bind(this)}  containerStyle={styles.inputContainerStyle} iconName="cf-c02" iconType="mcm" placeholder="请输入用户名"></InputItem>
                    <InputItem  containerStyle={styles.inputContainerStyle} iconName="mima" iconType="mcm" placeholder="请输入密码"
                                onChangeText={this._getPassword.bind(this)} value={this.state.loginPassWord}  secureTextEntry={true}></InputItem>
                    <Button
                        title='登录' buttonStyle={{width:250,marginTop:40,padding:8,borderRadius:5}} fontSize={18}
                        backgroundColor="#377bf6" onPress={this._onPress.bind(this)}/>

                </View>

            </View>
        );
    };
}


