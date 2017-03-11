/**
 * Created by qiaoyang on 3/4/17.
 */

'use strict'

import React, {Component} from 'react';
import {
    Navigator,View,StatusBar
} from 'react-native';


import InitScene from './components/init/initScene'


export default class Root extends Component {


    render() {
        const NoBackSwipe = {
            ...Navigator.SceneConfigs.HorizontalSwipeJump,
            gestures: {
                pop: {}
            }
        };
        return (
                <Navigator
                    initialRoute={{ name: "Init Scene", component: InitScene,index: 0 }}
                    configureScene={(route) => {
                return NoBackSwipe;
                 }}
                    renderScene={(route, navigator) => {
                    let Component = route.component;
                    return <Component {...route.params}  navigator={navigator} />
                }

        }
                />
        );
    };
}


