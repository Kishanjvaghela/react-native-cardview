package com.cardview;

import android.content.Context;
import android.support.v7.widget.CardView;
import android.util.AttributeSet;

/**
 * Created by kishan on 26/4/17.
 */

public class RNCardView extends CardView {

    public RNCardView(Context context) {
        super(context);
    }

    public RNCardView(Context context, AttributeSet attrs) {
        super(context, attrs);
    }

    public RNCardView(Context context, AttributeSet attrs, int defStyleAttr) {
        super(context, attrs, defStyleAttr);
    }

    public void setRnCornerRadius(float cornerRadius) {
        setRadius(cornerRadius);
    }

    public void setRnElevation(float elevation) {
        setCardElevation(elevation);
    }
}
