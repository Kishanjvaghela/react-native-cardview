package com.cardview;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;

/**
 * Created by kishan on 26/4/17.
 */

public class CardViewModule extends ReactContextBaseJavaModule {
    public CardViewModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return "RNCardView";
    }
}
