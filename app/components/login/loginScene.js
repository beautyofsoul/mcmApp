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

import {FormLabel, FormInput, Button} from 'react-native-elements';



import HomeScene from '../home/homeScene';

const styles = {
    container: {
        flex: 1,
    },
};


const titleConfig = {
    title: '用户登录',
    tintColor: "#ffffff"
};


export default class LoginScene extends Component {

    constructor(props) {
        super(props);
        this.state = {loginName: "", loginPassWord: ""};
    }

    _getLoginName(val){
        this.setState({loginName,val});

    };
    _onPress() {
        alert(this.state.loginName+":"+this.state.loginPassWord+" 登录成功！");
        const { navigator } = this.props;
        if(navigator) {
            navigator.push({
                name: 'Home Scene',
                component: HomeScene,
            })
        }
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
                               leftButton={leftButtonConfig}
                />
                <View>
                    <FormLabel labelStyle={{fontSize:20}}>用户名</FormLabel>
                    <FormInput  onChangeText={(text) => this.setState({loginName: text})}
                               inputStyle={{fontSize:18,height:42}} placeholder='用户名'/>
                    <FormLabel labelStyle={{fontSize:20}}>密码</FormLabel>
                    <FormInput  onChangeText={(text) => this.setState({loginPassWord: text})} inputStyle={{fontSize:18,height:42}} placeholder='密码'
                               secureTextEntry={true}/>
                    <Button
                        title='登录' backgroundColor="#377bf6" onPress={this._onPress.bind(this)}/>
                </View>

            </View>
        );
    };
}


