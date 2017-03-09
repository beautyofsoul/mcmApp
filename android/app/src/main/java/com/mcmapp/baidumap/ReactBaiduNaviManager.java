package com.mcmapp.baidumap;

import android.app.Activity;
import android.content.Intent;
import android.os.Bundle;
import android.os.Environment;
import android.os.Handler;
import android.os.Message;
import android.support.annotation.Nullable;
import android.view.View;
import android.widget.Button;
import android.widget.Toast;

import com.baidu.navisdk.adapter.BNOuterTTSPlayerCallback;
import com.baidu.navisdk.adapter.BNRouteGuideManager;
import com.baidu.navisdk.adapter.BNRoutePlanNode;
import com.baidu.navisdk.adapter.BNaviSettingManager;
import com.baidu.navisdk.adapter.BaiduNaviManager;
import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.mcmapp.R;

import java.io.File;
import java.util.ArrayList;
import java.util.LinkedList;
import java.util.List;

import static com.baidu.location.h.j.R;

/**
 * Created by qiaoyang on 3/8/17.
 */

public class ReactBaiduNaviManager extends SimpleViewManager<Button> {

    private final String TAG = ReactBaiduNaviManager.class.getName();

    private static final String REACT_CLASS = "RCTBaiduNaviView";




    @Override
    public String getName() {
        return REACT_CLASS;
    }





    @Override
    protected Button createViewInstance(final ThemedReactContext reactContext) {


        Button btn = new Button(reactContext);


        return btn;

    }



}
