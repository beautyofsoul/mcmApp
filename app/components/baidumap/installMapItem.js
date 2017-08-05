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

import Dimensions from 'Dimensions';

import Icon from '../custom/iconItem';
import GlobalMap from '../../utils/global-map';

class Buttton extends Component {
    static propTypes = {
        label: PropTypes.string,
        onPress: PropTypes.func
    };

    static defaultProps = {
        label: 'Buttton',
        onPress() {

        }
    };

    render() {
        return (
            <TouchableHighlight
                style={styles.btn}
                onPress={this.props.onPress}>
                <Text style={{color: 'white'}}>{this.props.label}</Text>
            </TouchableHighlight>
        );
    }
}
;

export default class BaiduMapDemo extends Component {

    constructor() {
        super();

        this.state = {
            mayType: MapTypes.SATELLITE,
            zoom: 15,
            center: {
                longitude: 113.981718,
                latitude: 22.542449
            },
            trafficEnabled: false,
            baiduHeatMapEnabled: false,
            markers: [{
                longitude: 113.981718,
                latitude: 22.542449,
                title: ""
            }],
            markerTitle: ""
        };

        this._locate();
    }

    _locate() {
        Geolocation.getCurrentPosition()
            .then(data => {
                console.log(data);
                this.setState({
                    zoom: 15,
                    markers: [{
                        latitude: data.latitude,
                        longitude: data.longitude,
                        title: ""
                    }],
                    center: {
                        latitude: data.latitude,
                        longitude: data.longitude
                    },
                    markerTitle:data.address
                });
            })
            .catch(e => {
                console.warn(e, 'error');
            })
    }

    componentDidMount() {
    }

    render() {
        return (
            <View style={styles.container}>
                <MapView
                    trafficEnabled={this.state.trafficEnabled}
                    baiduHeatMapEnabled={this.state.baiduHeatMapEnabled}
                    zoom={this.state.zoom}
                    mapType={this.state.mapType}
                    center={this.state.center}
                    marker={this.state.marker}
                    markers={this.state.markers}
                    style={styles.map}
                    zoomControlsVisible={true}
                    onMapStatusChangeFinish={(data) => {

                        Geolocation.reverseGeoCode(data.target.latitude,data.target.longitude).then((returnData) => {
                            console.log(returnData);
                            this.setState({
                  markers: [{
                    latitude: data.target.latitude,
                    longitude: data.target.longitude,
                    title: ""
                  }],
                  markerTitle:returnData.address
                });
                        });
                    } }
                    onMapStatusChange={(data) => {
                        this.setState({
                  markers: [{
                    latitude: data.target.latitude,
                    longitude: data.target.longitude,
                    title: ""
                  }]
                });
                    }

                    }
                    onMapDoubleClick={(data) => {
                         console.log(data);
                        Geolocation.reverseGeoCode(data.latitude,data.longitude).then((returnData) => {
                            this.setState({
                  markers: [{
                    latitude: data.latitude,
                    longitude: data.longitude,
                    title: ""
                  }],
                  center: {
                    latitude: data.latitude,
                    longitude: data.longitude
                  },
                  markerTitle:returnData.address
                });
                        });
          }}
                >
                </MapView>
                <View style={styles.markerTitleView}>
                    <Text style={styles.markerTitle}>{this.state.markerTitle}</Text>
                    <Icon
                        size={20}
                        iconStyle={styles.iconStyle}
                        name='icon-yxj-location'
                        type='mcm'
                        color={GlobalMap.activeColor}
                        onPress={this._locate.bind(this)}
                    />
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
        height: 24,
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
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    map: {
        marginBottom: 0,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height - 100,

        flex: 7
    },
    markerTitleView: {
        flex: 1,
        height: 20,
        flexDirection: 'row',
        backgroundColor:'#FFFFFF'
    },
    markerTitle: {
        flex: 1,
        paddingTop: 10,
        paddingLeft: 10,
        fontSize:15,
        fontWeight:'bold'


    },
    iconStyle:{
        marginRight:15,
        marginBottom:5
    }
});