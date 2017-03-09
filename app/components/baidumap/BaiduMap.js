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

import BaiduNaviModule from '../native/baiduNaviModule';

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
};

const titleConfig = {
    title: '地图详情',
    tintColor: "#ffffff"
};

export default class BaiduMap extends Component {

    constructor(props) {
        super(props);

        this.state = {
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
                title: "Window of the world"
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
                <NavigationBar tintColor="#2b96f4"
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
                    onMapClick={(data) => {
                        this.setState({
                  zoom: 15,
                  marker: {
                    latitude: data.latitude,
                    longitude: data.longitude,
                    title: 'Your location'
                  },
                  center: {
                    latitude: data.latitude,
                    longitude: data.longitude
                  }
                });
                        Geolocation.reverseGeoCode(data.latitude,data.longitude).then((returnData) => {
                            for(var key in returnData)
                             {
                                  alert(key+"---->"+returnData[key]);
                             }
                        });
          }}
                >
                </MapView>

                <View style={styles.row}>
                    <Buttton label="Normal" onPress={() => {
            this.setState({
              mapType: MapTypes.NORMAL
            });
          }} />
                    <Buttton label="Show" onPress={() => {
               BaiduNaviModule.show("OK",0);
          }} />

                    <Buttton label="Locate" onPress={() => {
            Geolocation.getCurrentPosition()
              .then(data => {
                this.setState({
                  zoom: 15,
                  marker: {
                    latitude: data.latitude,
                    longitude: data.longitude,
                    title: 'Your location'
                  },
                  center: {
                    latitude: data.latitude,
                    longitude: data.longitude
                  }
                });
              })
              .catch(e =>{
                console.warn(e, 'error');
              })
          }} />
                </View>

                <View style={styles.row}>
                    <Buttton label="Zoom+" onPress={() => {
            this.setState({
              zoom: this.state.zoom + 1
            });
          }} />
                    <Buttton label="Zoom-" onPress={() => {
            if(this.state.zoom > 0) {
              this.setState({
                zoom: this.state.zoom - 1
              });
            }

          }} />
                </View>

                <View style={styles.row}>
                    <Buttton label="Traffic" onPress={() => {
            this.setState({
              trafficEnabled: !this.state.trafficEnabled
            });
          }} />

                    <Buttton label="Baidu HeatMap" onPress={() => {
            this.setState({
              baiduHeatMapEnabled: !this.state.baiduHeatMapEnabled
            });
          }} />


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
        backgroundColor: '#F5FCFF',
    },
    map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height - 200,
        marginBottom: 16
    }
});