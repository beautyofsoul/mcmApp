/**
 * Created by qiaoyang on 3/5/17.
 */
import React, { Component } from 'react';
import {TextInput } from 'react-native';

export default  class HelpScene extends Component {
    constructor(props) {
        super(props);
        this.state = { text: 'Useless Placeholder' };
    }

    render() {
        return (
            <TextInput
                style={{height: 100, borderColor: 'gray', borderWidth: 1}}
                onChangeText={(text) => this.setState({text})}
                value={this.state.text}
            />
        );
    }
}