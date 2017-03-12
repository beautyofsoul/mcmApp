/**
 * Created by qiaoyang on 3/6/17.
 */
import React, {
    Component,
    PropTypes
} from 'react';

import {
    MapView,
    MapTypes,
    Geolocation
} from 'react-native-baidu-map';

import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableHighlight
} from 'react-native';

import NavigationBar from 'react-native-navbar';
import Dimensions from 'Dimensions';

import GlobalMap from '../../utils/global-map';

import BaiduNaviModule from '../native/baiduNaviModule';

class Buttton extends Component {
    static propTypes = {
        label: PropTypes.string,
        disabled: PropTypes.string,
        onPress: PropTypes.func
    };

    static defaultProps = {
        label: 'Buttton',
        disabled: "false",
        onPress() {

        }
    };

    render() {
        return (
            <TouchableHighlight
                style={styles.btn}
                onPress={this.props.onPress}
                disabled={"true"==this.props.disabled?true:false}>
                <Text style={{color: '#000000'}}>{this.props.label}</Text>
            </TouchableHighlight>
        );
    }
}
;

const titleConfig = {
    title: '地图详情',
    tintColor: "#ffffff"
};

export default class BaiduMap extends Component {

    constructor(props) {
        super(props);

        this.state = {
            navFlag: "false",
            mayType: MapTypes.NORMAL,
            zoom: 15,
            center: {
                longitude: props.longitude,
                latitude: props.latitude
            },
            trafficEnabled: false,
            baiduHeatMapEnabled: false,
            markers: [{
                longitude: props.longitude,
                latitude: props.latitude,
                title: props.address
            }]
        };
    }

    componentDidMount() {
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
                               leftButton={leftButtonConfig}
                />
                <MapView
                    trafficEnabled={this.state.trafficEnabled}
                    baiduHeatMapEnabled={this.state.baiduHeatMapEnabled}
                    zoom={this.state.zoom}
                    mapType={this.state.mapType}
                    center={this.state.center}
                    marker={this.state.marker}
                    markers={this.state.markers}
                    style={styles.map}

                >
                </MapView>
                <View style={styles.navStyle}>
                    <Buttton disabled={this.state.navFlag} label="开始导航" onPress={() => {
                        try
                        {
                            this.setState({navFlag:"true"});
                             Geolocation.getCurrentPosition()
            .then(data => {
                console.log(data);
                BaiduNaviModule.show(data.longitude,data.latitude,data.address,this.props.longitude,this.props.latitude,this.props.address);
                this.setState({navFlag:"false"});
            })
            .catch(e =>{
                console.warn(e, 'error');
            })

                        }
                        catch(e)
                        {
                           this.setState({navFlag:"false"});
                        }


          }}/>
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },
    btn: {
        height: 50,
        borderRadius: 4,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#cccccc',
        paddingLeft: 8,
        paddingRight: 8,
        margin: 4
    },
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
    map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height - 70,
        marginBottom: 16
    },
    navStyle: {
        position: "absolute",
        bottom: 10,
        width: 200,
        left: Dimensions.get('window').width / 2 - 100

    }
});