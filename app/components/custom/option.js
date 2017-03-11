/**
 * Created by qiaoyang on 3/12/17.
 */

import React, {Component} from 'react';

import {
    StyleSheet,
    Text,
    View,
    Image,
    Alert,
    TextInput,
    Modal,
    TouchableHighlight
} from 'react-native';

const styles = {
    container: {
        paddingTop: 10,
        paddingBottom: 10,

        borderBottomWidth: 0.5,
        borderBottomColor: "#606060",
        width: 250
    },
    text: {
        fontSize: 18,
        paddingLeft: 10,
        fontWeight: "400"
    }
}


export  default class Option extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: props.data ? "" : props.data.value,
            text: props.text ? "" : props.data.text,
            maxIndex: props.maxIndex,
            index: props.index,
            isLast: (props.index == props.maxIndex),
            _onPressButton: props.onPress
        }
    }

    _onPress() {
        if (this.state._onPressButton) {
            this.state._onPressButton({value: this.state.value, text: this.state.text});
        }
    }

    render() {
        let extStyle = null;
        if (this.state.isLast) {
            extStyle = {
                borderBottomWidth: 0
            }
        }

        return (<TouchableHighlight style={[styles.container,extStyle]} onPress={this._onPress.bind(this)}>
            <Text style={styles.text}>{this.state.text}</Text>
        </TouchableHighlight>);
    }
}
