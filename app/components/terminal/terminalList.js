/**
 * Created by qiaoyang on 3/7/17.
 */
import React, { Component } from 'react';
import { AppRegistry, ListView, Text, View } from 'react-native';
import Terminal from './terminal';



export default class TermialList extends Component{
    constructor(props) {
        super(props);
        this.state = props.terminalDatas;
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows(this.state.rows)
        };
    }

    render() {
        return (
            <View style={{ paddingTop: 22}}>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={(rowData) => <Terminal rowData={rowData} navigator={this.props.navigator}></Terminal>}
                />
            </View>
        );
    }
}