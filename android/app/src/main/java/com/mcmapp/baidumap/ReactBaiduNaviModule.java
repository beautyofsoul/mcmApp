package com.mcmapp.baidumap;

import android.app.Activity;
import android.content.Intent;
import android.os.Bundle;
import android.os.Handler;
import android.widget.Toast;

import com.baidu.navisdk.adapter.BNRoutePlanNode;
import com.baidu.navisdk.adapter.BaiduNaviManager;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.mcmapp.MainActivity;

import java.util.ArrayList;
import java.util.LinkedList;
import java.util.List;

/**
 * Created by qiaoyang on 3/9/17.
 */

public class ReactBaiduNaviModule extends ReactContextBaseJavaModule {


    private static final String APP_FOLDER_NAME = "BNSDKSimple";

    private String mSDCardPath = null;

    private String authinfo = null;
    private Handler ttsHandler = null;

    private BaiduNaviManager.TTSPlayStateListener ttsPlayStateListener = null;


    public static final String ROUTE_PLAN_NODE = "routePlanNode";

    public static List<Activity> activityList = new LinkedList<Activity>();

    public ReactBaiduNaviModule(ReactApplicationContext reactContext) {
        super(reactContext);


    }




    @Override
    public String getName() {
        return "BaiduNaviModule";
    }


    @ReactMethod
    public void show(double beginLng, double beginLat,String beginName,double endLng, double endLat,String endName) {
        if (BaiduNaviManager.isNaviInited()) {
            routeplanToNavi(beginLng,beginLat,beginName,endLng,endLat,endName,BNRoutePlanNode.CoordinateType.BD09LL);
        }

    }







    private void routeplanToNavi(double beginLng, double beginLat,String beginName,double endLng, double endLat,String endName,BNRoutePlanNode.CoordinateType coType) {
        BNRoutePlanNode sNode = null;
        BNRoutePlanNode eNode = null;
        sNode = new BNRoutePlanNode(beginLng, beginLat, beginName, null, coType);
        eNode = new BNRoutePlanNode(endLng, endLat, endName, null, coType);

        if (sNode != null && eNode != null) {
            List<BNRoutePlanNode> list = new ArrayList<BNRoutePlanNode>();
            list.add(sNode);
            list.add(eNode);
            BaiduNaviManager.getInstance().launchNavigator(getCurrentActivity(), list, 1, true, new DemoRoutePlanListener(sNode));
        }
    }

    public class DemoRoutePlanListener implements BaiduNaviManager.RoutePlanListener {

        private BNRoutePlanNode mBNRoutePlanNode = null;

        public DemoRoutePlanListener(BNRoutePlanNode node) {
            mBNRoutePlanNode = node;
        }

        @Override
        public void onJumpToNavigator() {
            /*
			 * 设置途径点以及resetEndNode会回调该接口
			 */

            for (Activity ac : MainActivity.activityList) {

                if (ac.getClass().getName().endsWith("BaiduNaviGuideActivity")) {

                    return;
                }
            }
            Intent intent = new Intent(getCurrentActivity(), BaiduNaviGuideActivity.class);
            Bundle bundle = new Bundle();
            bundle.putSerializable(ROUTE_PLAN_NODE, (BNRoutePlanNode) mBNRoutePlanNode);
            intent.putExtras(bundle);
            getCurrentActivity().startActivity(intent);

        }

        @Override
        public void onRoutePlanFailed() {
            // TODO Auto-generated method stub
            Toast.makeText(getReactApplicationContext(), "算路失败", Toast.LENGTH_SHORT).show();
        }
    }


}
