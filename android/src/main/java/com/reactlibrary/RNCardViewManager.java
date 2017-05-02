package com.reactlibrary;

import android.view.View;

import com.facebook.react.uimanager.PixelUtil;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.ViewGroupManager;
import com.facebook.react.uimanager.annotations.ReactProp;
import com.facebook.react.views.view.ReactViewGroup;

/**
 * Created by kishan on 26/4/17.
 */

public class RNCardViewManager extends ViewGroupManager<RNCardView> {

    @Override
    public String getName() {
        return "RNCardView";
    }

    @Override
    public RNCardView createViewInstance(ThemedReactContext reactContext) {
        RNCardView cardView = new RNCardView(reactContext);
        cardView.setUseCompatPadding(true);
        ReactViewGroup reactViewGroup = new ReactViewGroup(reactContext);
        cardView.addView(reactViewGroup);
        return cardView;
    }

    @ReactProp(name = "cornerRadius", defaultFloat = 0f)
    public void setCornerRadius(RNCardView view, float cornerRadius) {
        view.setRnCornerRadius(PixelUtil.toPixelFromDIP(cornerRadius));
    }

    @ReactProp(name = "cardElevation", defaultFloat = 0f)
    public void setCardElevation(RNCardView view, float elevation) {
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

    @Override
    public void addView(RNCardView parent, View child, int index) {
        View view = parent.getChildAt(0);
        if (view != null && view instanceof ReactViewGroup) {
            ((ReactViewGroup) view).addView(child, index);
        }
    }
}
