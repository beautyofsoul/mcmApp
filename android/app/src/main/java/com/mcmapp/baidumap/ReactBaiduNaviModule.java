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
    public void show(String message, int duration) {
        if (BaiduNaviManager.isNaviInited()) {
            routeplanToNavi(BNRoutePlanNode.CoordinateType.BD09LL);
        }

    }







    private void routeplanToNavi(BNRoutePlanNode.CoordinateType coType) {
        BNRoutePlanNode sNode = null;
        BNRoutePlanNode eNode = null;
        switch (coType) {
            case GCJ02: {
                sNode = new BNRoutePlanNode(116.30142, 40.05087, "百度大厦", null, coType);
                eNode = new BNRoutePlanNode(113.981718, 22.542449, "yz", null, coType);
                break;
            }
            case WGS84: {
                sNode = new BNRoutePlanNode(116.300821, 40.050969, "百度大厦", null, coType);
                eNode = new BNRoutePlanNode(113.981718, 22.542449, "yz", null, coType);
                break;
            }
            case BD09_MC: {
                sNode = new BNRoutePlanNode(12947471, 4846474, "百度大厦", null, coType);
                eNode = new BNRoutePlanNode(113.981718, 22.542449, "yz", null, coType);
                break;
            }
            case BD09LL: {
                sNode = new BNRoutePlanNode(116.30784537597782, 40.057009624099436, "百度大厦", null, coType);
                eNode = new BNRoutePlanNode(113.981718, 22.542449, "yz", null, coType);
                break;
            }
            default:
                ;
        }
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
