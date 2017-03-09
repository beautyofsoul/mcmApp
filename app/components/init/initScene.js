/**
 * Created by qiaoyang on 3/5/17.
 */
'use strict'

import React, {Component,PropTypes} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableHighlight,
    Navigator
} from 'react-native';

import GlobalMap from '../../utils/global-map';

import LoginScene from '../login/loginScene';


export default class InitScene extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    _pressButton() {
        const { navigator } = this.props;
        if(navigator) {
            navigator.push({
                name: 'Login Scene',
                component: LoginScene,
            })
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Image style={styles.backImg} source={GlobalMap.loginBackgroundImg} resizeMode='cover'>
                    <View style={styles.overlay}>
                        <View style={styles.logoImg}>
                            <Image style={styles.logo} source={GlobalMap.logoImg}></Image>
                        </View>
                        <View style={styles.logoTitleView}>
                            <Text style={styles.logoTitle}>井盖智能检测APP</Text>
                        </View>
                        <View style={styles.loginBtnView}>
                            <TouchableHighlight style={styles.loginBtn} onPress={this._pressButton.bind(this)}>
                                <View style={styles.button}>
                                    <Text style={styles.loginTxt}>登录</Text>
                                </View>
                            </TouchableHighlight>

                        </View>
                    </View>
                </Image>
            </View>
        );
    };
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center"
    },
    backImg: {
        flex: 1,
        flexDirection: 'column',

    },
    overlay: {
        flex: 1,
        flexDirection: "column",
        opacity: 1,
        alignItems: 'center',
        paddingTop: 80

    },
    logoImg: {
        flex: 2,
        paddingLeft: 60,
    },
    logoTitleView: {
        flex: 1
    },
    logoTitle: {
        fontSize: 25,
        color: "#ffffff",
        fontWeight: "700"
    },
    logo: {
        width: 180,
        height: 180,

    },
    loginBtnView: {
        flex: 3,
        flexDirection: "column",
        alignItems:"center",
    },
    loginBtn:{
        borderRadius:20
    },
    button:{
        width: 140,
        height:40,
        backgroundColor:"#0000EE",
        justifyContent:"center",
        alignItems:"center",
        borderRadius:20
    },
    loginTxt:{
        fontSize: 22,
        color:"#FFFFFF"
    }

});