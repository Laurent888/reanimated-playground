package com.rnplayground;

import android.app.Activity;
import android.content.Intent;
import android.net.Uri;
import android.provider.MediaStore;
import android.util.SparseArray;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.ActivityEventListener;
import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.BaseActivityEventListener;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.WritableMap;

public class StartActivityTestModule extends ReactContextBaseJavaModule  {
    private final int REQUEST_CODE = 22;
    private final String MODULE_NAME = "StartActivityTest";
    private Promise mPromise;

    StartActivityTestModule(ReactApplicationContext context){
        super(context);
        //context.addActivityEventListener(mActivityEventListener);
    }

    @Override
    public void initialize() {
        super.initialize();
        getReactApplicationContext().addActivityEventListener(mActivityEventListener);
    }

    @Override
    public void onCatalystInstanceDestroy() {
        super.onCatalystInstanceDestroy();
        getReactApplicationContext().removeActivityEventListener(mActivityEventListener);

    }

    @NonNull
    @Override
    public String getName() {
        return MODULE_NAME;
    }

    private final ActivityEventListener mActivityEventListener = new BaseActivityEventListener() {
        @Override
        public void onActivityResult(Activity activity, int requestCode, int resultCode, Intent intent) {
               if(resultCode == Activity.RESULT_OK){
                   if(mPromise != null) {
                      // String response = intent.hasExtra("BANKING_APP_ACTIVATION_RESPONSE") ? intent.getStringExtra("BANKING_APP_ACTIVATION_RESPONSE") : "nothing";
                      String response = intent.getStringExtra("STEP_UP_AUTH_CODE");
                       mPromise.resolve(response);
                   }
               } else if (resultCode == Activity.RESULT_CANCELED){
                   mPromise.resolve("Cancelled");
               } else {
                   mPromise.resolve("other");
               }

        mPromise = null;
        }
    };




    @ReactMethod
    public void switchApplication(Promise promise) {
        mPromise = promise;
        Activity activity = getReactApplicationContext().getCurrentActivity();
        // Intent intent = getReactApplicationContext().getPackageManager().getLaunchIntentForPackage("com.rnanimations");
       Intent intent = new Intent("com.rocker.app.a2a");
        // intent.putExtra("data", "forTest");
        // intent.setFlags(0);
        activity.startActivityForResult(intent, 5 );

    }

    @ReactMethod
    public void backToGoogle() {
        Activity activity = getReactApplicationContext().getCurrentActivity();
        Intent resultIntent = new Intent();
        resultIntent.putExtra("STEP_UP_RESPONSE", "approved");
        resultIntent.putExtra("STEP_UP_AUTH_CODE", "kjakldjsal832ujoisjf283ur29u0");
        activity.setResult(Activity.RESULT_OK, resultIntent);
        activity.finish();
    }



   /* @Override
    public void onActivityResult(Activity activity, int requestCode, int resultCode, Intent data) {
            String response = data.getStringExtra("BANKING_APP_ACTIVATION_RESPONSE");
        WritableMap obj = Arguments.createMap();
        obj.putString("Result", "test");
        obj.putString("userResponse", response);
            Promise promise = mPromise.get(3);
            promise.resolve(obj);

    }*/

}
