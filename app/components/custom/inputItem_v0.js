/**
 * Created by qiaoyang on 3/10/17.
 */

import React, {Component} from 'react';
import {Icon} from 'react-native-elements';

import {
    StyleSheet,
    Text,
    View,
    Image,
    Alert,
    TextInput
} from 'react-native';


const styles = {
    container: {
        flexDirection: "row",
        height: 50,
        width: 250
    },

    inputStyle: {
        flex: 1,
        margin: 0,
        paddingLeft: 30,
        borderBottomColor: "#ffffff",
        fontSize: 20
    },
    iconContainer: {
        position: "absolute",
        top: 10,
        left: 3
    }
};

export default class InputItem extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const {
            iconName,
            iconType,
            iconColor,
            underlineColorAndroid,
            placeholder,
            placeholderTextColor,
            secureTextEntry,
            rightIcon,
            iconSize,
            containerStyle
        } = this.props;


        let iconContainerStyle = styles.iconContainer;
        let v_inputStyle = styles.inputStyle;
        if(rightIcon)
        {
            iconContainerStyle = {
                position: "absolute",
                top: 10,
                right: 3
            };

            v_inputStyle = {
                flex: 1,
                margin: 0,
                paddingRight: 30,
                borderBottomColor: "#ffffff",
                fontSize: 20
            };
        }

        const icon = (<Icon containerStyle={iconContainerStyle}
                            name={iconName}
                            type={iconType}
                            color={iconColor||"#ffffff"} size={iconSize||25}
        />);
        return (<View style={[styles.container,containerStyle]}>{!rightIcon ? icon : null}
            <TextInput underlineColorAndroid={underlineColorAndroid||"#ffffff"}
                         placeholderTextColor={placeholderTextColor||"#ffffff"} style={v_inputStyle}
                         placeholder={placeholder}
                         secureTextEntry={secureTextEntry||false}></TextInput>{rightIcon ? icon : null}</View>);
    }
}
