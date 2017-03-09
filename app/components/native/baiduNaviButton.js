/**
 * Created by qiaoyang on 3/9/17.
 */
import { PropTypes } from 'react';
import { requireNativeComponent, View } from 'react-native';

var iface = {
    name: 'BaiduNaviView',
    propTypes: {
        ...View.propTypes // 包含默认的View的属性
    },
};

module.exports = requireNativeComponent('RCTBaiduNaviView', iface);