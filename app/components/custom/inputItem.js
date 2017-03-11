/**
 * Created by qiaoyang on 3/10/17.
 */

import React, {Component} from 'react';
import Icon from './iconItem';

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

import Option from "./option"


const styles = {
    container: {
        flexDirection: "row",

    },

    inputStyle: {
        flex: 1,
        margin: 0,
        paddingLeft: 35,
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
        super(props);
        this.state = {
            modalVisible: false
        };

    }


    setModalVisible(visible) {
        this.setState({modalVisible: visible});
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
            containerStyle,
            inputStyle,
            iconOnpress,
            textValue,
            onChangeText,
            isSelect,
            options,
            selectOnpress
        } = this.props;


        let iconContainerStyle = styles.iconContainer;
        let v_inputStyle = styles.inputStyle;
        if (rightIcon) {
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

        let iconPressEvent = null;
        let tempOpthion = options || [];
        let modalView = null;
        let maxIndex = tempOpthion.length -1;
        if (isSelect||tempOpthion.length>0) {
            let _optionOnpress = (data) => {
                if(selectOnpress)
                {
                    selectOnpress(data)
                }
                this.setState({modalVisible: false});
            }
            modalView = (
                <Modal
                    animationType={"slide"}
                    transparent={true}
                    visible={this.state.modalVisible}
                    onRequestClose={() => {alert("Modal has been closed.")}}
                >
                    <View style={{alignItems:"center",flexDirection:"row",justifyContent:"center"}}>
                        <View style={{marginTop: 200,width:250,backgroundColor:"#ffffff",borderWidth:0.5,borderColor:"#606060",borderRadius:5}}>
                            {tempOpthion.map((ele, i) => {
                                return (<View key={ele.value}><Option onPress={_optionOnpress} maxIndex={maxIndex} index={i} data={ele}/></View>);

                            })}

                        </View>
                    </View>
                </Modal>
            );
            iconPressEvent = () => {
                this.setState({modalVisible: true});

            };
        }


        const icon = (<Icon containerStyle={iconContainerStyle}
                            name={iconName}
                            type={iconType}
                            onPress={isSelect?iconPressEvent:iconOnpress}
                            color={iconColor||"#ffffff"} size={iconSize||25}
        />);
        return (<View style={[styles.container,containerStyle]}>{modalView}{!rightIcon ? icon : null}
            <TextInput underlineColorAndroid={underlineColorAndroid||"#ffffff"}
                       placeholderTextColor={placeholderTextColor||"#ffffff"} style={[v_inputStyle,inputStyle]}
                       placeholder={placeholder}
                       value={textValue}
                       editable={!isSelect}
                       onChangeText={onChangeText}
                       secureTextEntry={secureTextEntry||false}></TextInput>{rightIcon ? icon : null}</View>);
    }
}
