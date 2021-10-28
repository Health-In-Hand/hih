// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
import { initializeApp } from "firebase/app";

export const environment = {
  production:false,
  firebase:{
    apiKey: "AIzaSyDGEQCAIksb4_e8nCu4ZO1jOWiwRwVZxu8",
    authDomain: "helthinhend.firebaseapp.com",
    projectId: "helthinhend",
    storageBucket: "helthinhend.appspot.com",
    messagingSenderId: "217793221550",
    appId: "1:217793221550:web:cf4d61f1343811386c2e3f"
  }
};


/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
