/**
 * Created by qiaoyang on 3/11/17.
 */
'use strict'

import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    Alert,
    TouchableOpacity,
    ToastAndroid
} from 'react-native';

import GlobalMap from '../../utils/global-map';

import NavigationBar from 'react-native-navbar';

import Icon from '../custom/iconItem';

const styles = {
    container: {
        flex: 1,
    },
    infoText:{
        fontSize:15,
        paddingBottom:10
    }

};

const titleConfig = {
    title: '关于我们',
    tintColor: "#ffffff",
    style:GlobalMap.navTxtStyle
};

export default class AboutScene extends Component{
    constructor(props)
    {
        super(props);
    }



    render(){


        const leftButtonConfig = (<Icon
            name="arrow-left"
            type="simple-line-icon"
            onPress={() => this.props.navigator.pop()}
            color={"#ffffff"} size={25}/>);
        return (<View style={styles.container}>
                 <NavigationBar tintColor={GlobalMap.globalStatusBarBackColor}
                           title={titleConfig} leftButton={leftButtonConfig} />
                   <View style={{marginLeft:20,marginTop:30}}>
                    <Text style={styles.infoText}>北斗杭州分公司属于北斗天汇</Text>
                    <Text style={styles.infoText}>公司名称:北斗天汇（杭州）卫星应用技术有限公司</Text>
                    <Text style={styles.infoText}>地址:中国浙江杭州</Text>
                    <Text style={styles.infoText}>电话:10086</Text>
                   </View>
                </View>);
    }
}
