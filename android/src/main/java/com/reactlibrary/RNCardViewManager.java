package com.reactlibrary;

import android.graphics.Color;
import android.text.TextUtils;
import android.util.Log;

import com.facebook.react.uimanager.PixelUtil;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.ViewGroupManager;
import com.facebook.react.uimanager.annotations.ReactProp;

/**
 * Created by kishan on 26/4/17.
 */

public class RNCardViewManager extends ViewGroupManager<RNCardView> {
    @Override
    public String getName() {
        return "RNCardView";
    }

    @Override
    protected RNCardView createViewInstance(ThemedReactContext reactContext) {
        RNCardView cardView = new RNCardView(reactContext);
        cardView.setUseCompatPadding(true);
        return cardView;
    }

    @ReactProp(name = "cornerRadius", defaultFloat = 0f)
    public void setCornerRadius(RNCardView view, float cornerRadius) {
        view.setRnCornerRadius(PixelUtil.toPixelFromDIP(cornerRadius));
    }

    @ReactProp(name = "cardElevation", defaultFloat = 0f)
    public void setCardElevation(RNCardView view, float elevation) {
        Log.d("card", "setCardElevation() called with: view = [" + view + "], elevation = [" + elevation + "]");
        view.setRnElevation(elevation);
    }

    @ReactProp(name = "cardMaxElevation", defaultFloat = 0f)
    public void setCardMaxElevation(RNCardView view, float elevation) {
        view.setRnMaxElevation(elevation);
    }

    @ReactProp(name = "backgroundColor")
    public void setCardBackgroundColor(RNCardView view, int color) {
        view.setRnBackgroundColor(color);
    }
}
