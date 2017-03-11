
import React, {Component} from 'react';
import BaiduMapDemo from '../baidumap/installMapItem';
import {
    StyleSheet,
    Text,
    View,
    Image,
    Alert,
    ScrollView,
    Picker
} from 'react-native';
import NavigationBar from 'react-native-navbar';

import GlobalMap from '../../utils/global-map';

import InputItem from '../custom/inputItem';

import ScanBarcode from './scanBarcode_back1'

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
    },
    termType:{
        flexDirection:"row",
        borderBottomWidth:1,
        borderBottomColor:"#5986c0"
    },
    imeiNoStyle:{
        flexDirection:"row"
    }
};

const titleConfig = {
    title: '安装',
    tintColor: "#ffffff",
    style:GlobalMap.navTxtStyle
};

export default  class InstallScence extends Component {
    constructor(props) {
        super(props);

        this.state = {
            torchMode: 'off',
            cameraType: 'back',
            searchType:"",
            imeiNo:"",
            termType:"",
            termTypeText:""
        };
        this._onBarCodeRead = this._onBarCodeRead.bind(this);
    }

    _onBarCodeRead(e)
    {
       this.setState({imeiNo:e.data});
    }

    barcodeReceived(e) {
        alert('Barcode: ' + e.data);
        alert('Type: ' + e.type);
    }

    _toScan()
    {
        this.props.navigator.push({
            name: 'Scan Scene',
            component: ScanBarcode,
            params:{
                onBarCodeRead:this._onBarCodeRead
            }
        });
    }

    _onSelectTermType(data){
        this.setState({termTypeText:data.text,termType:data.value})
    }

    render() {
        const leftButtonConfig = {
            title: 'Back',
            handler: () => this.props.navigator.pop(),
            tintColor: "#ffffff"
        };

        const temTypes = [{value:"1",text:"污水井"},{value:"2",text:"排水井"}];
        return (
            <View style={styles.container}>
                <NavigationBar tintColor={GlobalMap.gloableBackgroundColor}
                               title={titleConfig}
                />
                <View style={styles.termType}>
                    <Text style={{paddingTop:13,paddingLeft:6,flex:1,color:"#ffffff",fontSize:16,textAlign:"right"}}>井盖类型:</Text>
                    <InputItem rightIcon={true} containerStyle={{marginLeft:5,marginRight:5,flex:4}}
                               inputStyle={{fontSize:16,color:"#ffffff"}}  placeholderTextColor="#428ff3"
                               selectOnpress={this._onSelectTermType.bind(this)}
                               textValue={this.state.termTypeText}
                               isSelect={true}
                               options={temTypes}
                               underlineColorAndroid="transparent" iconName="xialakuang" iconType="mcm"
                               placeholder="请选择井盖类型"></InputItem>

                </View>
                <View style={styles.imeiNoStyle}>
                    <Text style={{paddingTop:13,paddingLeft:6,flex:1,color:"#ffffff",fontSize:16,textAlign:"right"}}>IMEI:</Text>
                    <InputItem rightIcon={true} containerStyle={{marginLeft:5,marginRight:5,flex:4}}
                               inputStyle={{fontSize:16,color:"#ffffff"}}  placeholderTextColor="#428ff3"
                               iconOnpress={this._toScan.bind(this)}
                               onChangeText={(text) => {this.setState({imeiNo:text})}}
                               textValue={this.state.imeiNo}
                               underlineColorAndroid="transparent" iconName="saomiaoerweima" iconType="mcm"
                               placeholder="请输入imei号"></InputItem>
                </View>

                <BaiduMapDemo/>
            </View>

        );
    }
}


