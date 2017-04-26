package com.cardview;

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
        view.setRnElevation(PixelUtil.toPixelFromDIP(elevation));
    }
}
