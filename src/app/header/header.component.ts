import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import * as firebase from 'firebase/app';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  price;
  isAuth: boolean;
  constructor(private authService: AuthService,private router: Router) { }

  ngOnInit() {
    firebase.auth().onAuthStateChanged(
      (user) => {
        if(user) {
          this.isAuth = true;
        } else {
          this.isAuth = false;
        }
      }
    );
  }
  updatePrice(newNumber: number): void {
    this.price = newNumber;
  }
  onSignOut() {
    this.authService.signOutUser();
  }
  onSearch() {
    this.router.navigate(['/books/search']);
  }


}
