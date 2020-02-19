import { Component } from '@angular/core';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'wallet-hub';
  constructor() {
    const config = {
      apiKey: "AIzaSyAoDQnyhe53BK2A_x1ZNmMts80qDH9A3GI",
      authDomain: "bookcatalog-1473e.firebaseapp.com",
      databaseURL: "https://bookcatalog-1473e.firebaseio.com",
      projectId: "bookcatalog-1473e",
      storageBucket: "",
      messagingSenderId: "596588004159",
      appId: "1:596588004159:web:4cab6e426b225772"
    };
    firebase.initializeApp(config);
  }
}
