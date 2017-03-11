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
            mayType: MapTypes.NORMAL,
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
                title: "Window of the world"
            }]
        };

        this._locate();
    }

    _locate(){
        Geolocation.getCurrentPosition()
            .then(data => {
                console.log(data);
                this.setState({
                    zoom: 15,
                    markers: [{
                        latitude: data.latitude,
                        longitude: data.longitude,
                        title: data.address
                    }],
                    center: {
                        latitude: data.latitude,
                        longitude: data.longitude
                    }
                });
            })
            .catch(e =>{
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
                    onMapDoubleClick={(data) => {
                         console.log(data);
                        Geolocation.reverseGeoCode(data.latitude,data.longitude).then((returnData) => {
                            console.log(returnData);
                            this.setState({
                  zoom: 15,
                  markers: [{
                    latitude: data.latitude,
                    longitude: data.longitude,
                    title: returnData.address
                  }],
                  center: {
                    latitude: data.latitude,
                    longitude: data.longitude
                  }
                });
                        });
          }}
                >
                </MapView>


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
        marginBottom: 16,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height - 100,

        flex:1
    }
});