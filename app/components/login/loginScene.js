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
    StatusBar,
    ToastAndroid,
    AsyncStorage
} from 'react-native';


import {Button} from 'react-native-elements';


import InputItem from '../custom/inputItem';

import GlobalMap from "../../utils/global-map";

import MainScene from '../main/mainScene';

const styles = {
    container: {
        flex: 1,
        backgroundColor: GlobalMap.globalStatusBarBackColor,
        flexDirection: "row"
    },
    loginFrom: {
        flex: 1,
        flexDirection: "column",
        alignItems: "center"
    },
    inputContainerStyle:{
      width:280,

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
        this.state = {loginName: "",
            loginPassWord: "",
            rememberFlag: true,
            statusBarBKColor:GlobalMap.writeBackground,
            statusBarContentStyle:"dark-content",
            loginFlag:"-1"
        };
        this._autoLogin();

    }

    _getLoginName(val) {
        this.setState({loginName:val});

    };


    _getPassword(val) {
        this.setState({loginPassWord:val});

    };

    _autoLogin(){
        AsyncStorage.getItem("loginFlag").then((value) => {


            if("1"==value)
            {
                this.setState({loginFlag:"1"});
                this.props.navigator.push({
                    name: 'MainScene',
                    component: MainScene,
                    params:{
                        selectedTab:"warning"
                    }
                });
            }
            else
            {
                this.setState({loginFlag:"0"});
            }
        }).catch(()=>{
            this.setState({loginFlag:"0"});
        })
    }

    _onPress() {
        //alert(this.state.loginName + ":" + this.state.loginPassWord + " 登录成功！");
        if(this.state.loginName!="admin"||this.state.loginPassWord!="admin")
        {
            ToastAndroid.show('用户名或密码错误,登陆失败!', ToastAndroid.SHORT);
            return;
        }


            AsyncStorage.setItem("loginFlag","1").then(()=>{
                const {navigator} = this.props;
                if (navigator) {
                    this.setState({
                        statusBarBKColor:GlobalMap.globalStatusBarBackColor,
                        statusBarContentStyle:"dark-content"
                    });
                    this.props.navigator.push({
                        name: 'MainScene',
                        component: MainScene,
                        params:{
                            selectedTab:"warning"
                        }
                    });
                }
            }).catch(() => {
                ToastAndroid.show('登陆失败!', ToastAndroid.SHORT);
            });




    };

    _changeRemenberFlag(){

        this.setState({rememberFlag:!this.state.rememberFlag})
    };

    _render(){
        const leftButtonConfig = {
            title: 'Back',
            handler: () => this.props.navigator.pop(),
            tintColor: "#ffffff"
        };
        return (


                <View style={styles.loginFrom}>
                    <View style={{marginBottom:80,marginTop:80}}>
                        <Image style={styles.loginIcon} source={GlobalMap.loginIcon}></Image>
                    </View>
                    <View style={{borderWidth:1.5,borderColor:GlobalMap.loginDedaultColor,borderRadius:5}}>
                        <InputItem inputStyle={{color:GlobalMap.loginDedaultColor}}
                                   placeholderTextColor={GlobalMap.loginDedaultColor} iconColor={GlobalMap.loginDedaultColor}
                                   value={this.state.loginName}
                                   onChangeText={this._getLoginName.bind(this)}
                                   containerStyle={[styles.inputContainerStyle,{borderBottomColor:GlobalMap.loginDedaultColor,borderBottomWidth:1.5}]}
                                   iconName="yonghuming"
                                   iconType="mcm"
                                   underlineColorAndroid="transparent"
                                   placeholder="请输入用户名">
                        </InputItem>
                        <InputItem inputStyle={{color:GlobalMap.loginDedaultColor}}
                                   placeholderTextColor={GlobalMap.loginDedaultColor}
                                   iconColor={GlobalMap.loginDedaultColor}
                                   containerStyle={styles.inputContainerStyle}
                                   iconName="mima1"
                                   iconType="mcm"
                                   placeholder="请输入密码"
                                   underlineColorAndroid="transparent"
                                   onChangeText={this._getPassword.bind(this)}
                                   value={this.state.loginPassWord}
                                   secureTextEntry={true}>

                        </InputItem>
                    </View>
                    <Button
                        title='登录' buttonStyle={{width:280,marginTop:40,padding:8,borderRadius:5}} fontSize={18}
                        backgroundColor="#377bf6" onPress={this._onPress.bind(this)}/>

                </View>

        );
    };
    render() {

        return (<View style={styles.container}>{this.state.loginFlag=="0"?this._render():null}</View>
        );
    };
}


