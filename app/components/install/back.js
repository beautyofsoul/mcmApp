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
    ScrollView,
    Platform
} from 'react-native';

import NavigationBar from 'react-native-navbar';


import ScrollableTabView, {DefaultTabBar,} from 'react-native-scrollable-tab-view';

import BarcodeScanner from 'react-native-barcode-scanner-universal';


import DropDown, {
    Select,
    Option,
    OptionList,
} from 'react-native-selectme';

const styles = {
    container: {
        flex: 1,
    },
    camera: {
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
};


const titleConfig = {
    title: '安装',
    tintColor: "#ffffff"
};


export default  class InstallScene extends Component {
    constructor(props) {
        super(props);
        this.state = {
            canada: ''
        };
    }

    _getOptionList() {
        return this.refs['OPTIONLIST'];
    }


    _canada(province) {

        this.setState({
            ...this.state,
            canada: province
        });
    }

    render() {
        const leftButtonConfig = {
            title: 'Back',
            handler: () => this.props.navigator.pop(),
            tintColor: "#ffffff"
        };
        let scanArea = null
        if (Platform.OS === 'ios') {
            scanArea = (
                <View style={styles.rectangleContainer}>
                    <View style={styles.rectangle}/>
                </View>
            )
        }
        return (
            <View style={styles.container}>
                <NavigationBar tintColor="#2b96f4"
                               title={titleConfig}
                               leftButton={leftButtonConfig}
                />
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Select
                        width={250}
                        ref="SELECT1"
                        optionListRef={this._getOptionList.bind(this)}
                        defaultValue="请选择井盖类型"
                        onSelect={this._canada.bind(this)}>
                        <Option value={{id : "alberta"}}>污水井</Option>
                        <Option>排水井</Option>
                    </Select>
                    <OptionList ref="OPTIONLIST"/>
                </View>
                <BarcodeScanner
                    onBarCodeRead={(code) => console.log(code)}
                    style={styles.camera}>
                    {scanArea}
                </BarcodeScanner>
            </View>
        );
    }
}
