
import React, {Component} from 'react';
import BarcodeScanner from 'react-native-barcodescanner';

export default  class InstallScence extends Component {
    constructor(props) {
        super(props);

        this.state = {
            torchMode: 'off',
            cameraType: 'back',
        };
    }

    barcodeReceived(e) {
        alert('Barcode: ' + e.data);
        alert('Type: ' + e.type);
    }

    render() {
        return (
            <BarcodeScanner
                onBarCodeRead={this.barcodeReceived}
                style={{ flex: 1 }}
                torchMode={this.state.torchMode}
                cameraType={this.state.cameraType}
                viewFinderBorderWidth={10}
                viewFinderBorderColor="red"
                viewFinderLaserColor="green"
                viewFinderDrawLaser={true}
            />
        );
    }
}


