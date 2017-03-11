
import React, {Component} from 'react';
import BaiduMapDemo from '../baidumap/BaiduMapDemo';
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

export default  class InstallScence extends Component {
    constructor(props) {
        super(props);

        this.state = {
            torchMode: 'off',
            cameraType: 'back',
            language:""
        };
    }



    barcodeReceived(e) {
        alert('Barcode: ' + e.data);
        alert('Type: ' + e.type);
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
                <Picker
                    selectedValue={this.state.language}
                    onValueChange={(lang) => this.setState({language: lang})}>
                    <Picker.Item label="Java" value="java" />
                    <Picker.Item label="JavaScript" value="js" />
                </Picker>
                <BaiduMapDemo/>
            </View>

        );
    }
}


