package com.kishanjvaghela.cardview;

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

    @ReactProp(name = "cornerOverlap")
    public void setPreventCornerOverlap(RNCardView view, boolean overlap) {
        view.setPreventCornerOverlap(overlap);
    }

    @ReactProp(name = "useCompatPadding")
    public void setUseCompatPadding(RNCardView view, boolean padding) {
        view.setUseCompatPadding(padding);
    }

    @ReactProp(name = "backgroundColor")
    public void setCardBackgroundColor(RNCardView view, int color) {
        view.setRnBackgroundColor(color);
    }

    @Override
    public View getChildAt(RNCardView parent, int index) {
        View content = parent.getChildAt(0);
        if (content != null && content instanceof ReactViewGroup) {
            return ((ReactViewGroup) content).getChildAt(index);
        }
        return null;
    }

    @Override
    public int getChildCount(RNCardView parent) {
        View content = parent.getChildAt(0);
        if (content != null && content instanceof ReactViewGroup) {
            return ((ReactViewGroup) content).getChildCount();
        }
        return 0;
    }

    @Override
    public void addView(RNCardView parent, View child, int index) {
        View content = parent.getChildAt(0);
        if (content != null && content instanceof ReactViewGroup) {
            ((ReactViewGroup) content).addView(child, index);
        }
    }

    @Override
    public void removeViewAt(RNCardView parent, int index) {
        View content = parent.getChildAt(0);
        if (content != null && content instanceof ReactViewGroup) {
            ((ReactViewGroup) content).removeViewAt(index);
        }
    }

    @Override
    public void removeAllViews(RNCardView parent) {
        View content = parent.getChildAt(0);
        if (content != null && content instanceof ReactViewGroup) {
            ((ReactViewGroup) content).removeAllViews();
        }
    }
}
