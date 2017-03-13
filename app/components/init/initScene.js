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
    BackAndroid,
    ToastAndroid,
    AsyncStorage
} from 'react-native';

import GlobalMap from '../../utils/global-map';

import LoginScene from '../login/loginScene';

import MainScene from  '../main/mainScene';


export default class InitScene extends Component {

    constructor(props) {
        super(props);

        this.state = {}
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
            var popRouter = routers[routers.length-1];
            if("MainScene"!=popRouter.name&&"LoginScene"!=popRouter.name)
            {
                navigator.pop();
                return true;//接管默认行为
            }

        }

        if (this.lastBackPressed && this.lastBackPressed + 2000 >= Date.now()) {

            //最近2秒内按过back键，可以退出应用。

            return false;

        }
        this.lastBackPressed = Date.now();

        ToastAndroid.show('再按一次退出应用', ToastAndroid.SHORT);

        return true;

    };

    _pressButton() {
        const { navigator } = this.props;
        if(navigator) {
            navigator.push({
                name: 'LoginScene',
                component: LoginScene,
            })
        }
    }

    _genFirstScene()
    {
        var that = this;
        try {
            AsyncStorage.getItem("loginFlag").then((value) => {
                alert(value);
                if("1"==value)
                {

                    that.setState( {
                        renderScene:(<MainScene navigator={that.props.navigator} selectedTab="warning"/>)
                    })
                }
            })

        } catch (e) {

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