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
    ToastAndroid,
    AsyncStorage
} from 'react-native';

import NavigationBar from 'react-native-navbar';



import GlobalMap from '../../utils/global-map';

import AboutScene from './aboutScene';

import LoginScene from '../login/loginScene';

const styles = {
    container: {
        flex: 1,
    },
    accountView:{

        borderBottomWidth:1,
        borderTopWidth:1,
        borderColor:GlobalMap.defaultLineColor,
        marginTop:10,
        paddingLeft:20,
        paddingTop:10,
        paddingBottom:10,
        marginLeft:10,
        marginRight:10
    },
    nameText:{
        fontSize:18,
        color:"#333333"
    },
    versionView:{
        borderBottomWidth:1,
        borderTopWidth:1,
        borderColor:GlobalMap.defaultLineColor,
        marginTop:10,
        paddingLeft:20,
        paddingTop:10,
        paddingBottom:10,
        marginLeft:10,
        marginRight:10
    },
    versionTitle:{
        fontSize:18,
        color:"#333333"
    },
    aboutView:{
        borderBottomWidth:1,
        borderColor:GlobalMap.defaultLineColor,
        paddingLeft:20,
        paddingTop:10,
        paddingBottom:10,
        marginLeft:10,
        marginRight:10
    },
    aboutTitle:{
        fontSize:18,
        color:"#333333"
    },
    logOutView:{
        borderBottomWidth:1,
        borderColor:GlobalMap.defaultLineColor,
        paddingTop:10,
        paddingBottom:10,
        marginLeft:10,
        marginRight:10,
        justifyContent:"center",
        flexDirection:"row"
    },
    logOutTitle:{
        fontSize:18,
        color:"red"
    }
};


const titleConfig = {
    title: '更多',
    tintColor: "#ffffff",
    style:GlobalMap.navTxtStyle
};


export default  class PersonScene extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name:"Admin",
            accountName:"Admin",
            currentVersion:"1.0"

        }
    }

    doSearch(text) {

    }

    _showVersionInfo()
    {
        ToastAndroid.show('您的应用为最新版本!', ToastAndroid.SHORT)
    }

    _showAbout()
    {
        this.props.navigator.push({
            name: 'About Scene',
            component: AboutScene,
            params:{
                selectedTab:"warning"
            }
        });
    }

    _logOut(){
        AsyncStorage.removeItem("loginFlag").then(() => {
            this.props.navigator.push({
                name: 'LoginScene',
                component: LoginScene,
                params:{
                    selectedTab:"warning"
                }
            });
        }).catch(() => {

        })

    }


    render() {
        const leftButtonConfig = {
            title: 'Back',
            handler: () => this.props.navigator.pop(),
            tintColor: "#ffffff"
        };
        return (
            <View style={styles.container}>
                <NavigationBar tintColor={GlobalMap.globalStatusBarBackColor}
                               title={titleConfig}
                />
                <View style={styles.accountView}>

                    <Text style={styles.nameText}>{this.state.name}</Text>
                    <Text style={styles.accountText}>账号:{this.state.accountName}</Text>

                </View>
                <View  style={styles.versionView}>
                   <TouchableOpacity onPress={this._showVersionInfo.bind(this)}>
                    <Text style={styles.versionTitle}>检测更新</Text>
                    <Text style={styles.versionText}>当前版本 {this.state.currentVersion}</Text>
                   </TouchableOpacity>
                </View>
                <View style={styles.aboutView}>
                    <TouchableOpacity onPress={this._showAbout.bind(this)}>
                    <Text style={styles.aboutTitle}>关于我们</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.logOutView}>
                    <TouchableOpacity onPress={this._logOut.bind(this)}>
                        <Text style={styles.logOutTitle}>退出登陆</Text>
                    </TouchableOpacity>
                </View>

            </View>
        );
    }
}