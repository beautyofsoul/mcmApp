/**
 * Created by qiaoyang on 3/11/17.
 */

'use strict';
import React, {Component} from 'react';
import {
    AppRegistry,
    Dimensions,
    StyleSheet,
    Text,
    TouchableHighlight,
    View
} from 'react-native';
import Camera from 'react-native-camera';

import GlobalMap from '../../utils/global-map';

import NavigationBar from 'react-native-navbar';
const titleConfig = {
    title: '条码扫描',
    tintColor: "#ffffff"
};

export  default  class BadInstagramCloneApp extends Component {
    constructor(props)
    {
        super(props);
    }

    _onBarCodeRead(e)
    {
        this.props.onBarCodeRead(e);
        this.props.navigator.pop();
    }

    render() {
        let scanArea = (
            <View style={styles.rectangleContainer}>
                <View style={styles.rectangle}/>
            </View>
        );

        const leftButtonConfig = {
            title: 'Back',
            handler: () => this.props.navigator.pop(),
            tintColor: "#ffffff"
        };
        return (
            <View style={{flex:1,flexDirection:"column"}}>
                <NavigationBar tintColor={GlobalMap.globalStatusBarBackColor}
                               title={titleConfig}
                               leftButton={leftButtonConfig}
                />
                <Camera
                    onBarCodeRead={this._onBarCodeRead.bind(this)}
                    barcodeScannerEnabled={true}
                    style={styles.camera}>
                    {scanArea}
                </Camera>
            </View>

        );
    }

    takePicture() {
        this.camera.capture()
            .then((data) => console.log(data))
            .catch(err => console.error(err));
    }
}

const styles = StyleSheet.create({
    camera: {
        flex: 1
    },
    rectangleContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'transparent'
    },
    rectangle: {
        height: 250,
        width: 250,
        borderWidth: 2,
        borderColor: '#00FF00',
        backgroundColor: 'transparent'
    }
})

