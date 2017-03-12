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
    Navigator,
    StatusBar,
    Platform,
    BackAndroid
} from 'react-native';

import GlobalMap from '../../utils/global-map';

import LoginScene from '../login/loginScene';


export default class InitScene extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentWillMount() {
        if (Platform.OS === 'android') {
            BackAndroid.addEventListener('hardwareBackPress', this.onBackAndroid);
        }
    }
    componentWillUnmount() {
        if (Platform.OS === 'android') {
            BackAndroid.removeEventListener('hardwareBackPress', this.onBackAndroid);
        }
    }

    onBackAndroid = () => {
        const { navigator } = this.props;
        const routers = navigator.getCurrentRoutes();
        console.log('当前路由长度：'+routers.length);
        if (routers.length > 1) {
            navigator.pop();
            return true;//接管默认行为
        }
        return false;//默认行为

    };

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
                <StatusBar
                    backgroundColor={GlobalMap.globalStatusBarBackColor}
                    barStyle="light-content"
                />
                <LoginScene navigator={this.props.navigator}/>
            </View>
        );
    };
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center"
    },

});