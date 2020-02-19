import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule,Routes,ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot,Router } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { BookListComponent } from './book-list/book-list.component';
import { SingleBookComponent } from './book-list/single-book/single-book.component';
import { BookFormComponent } from './book-list/book-form/book-form.component';
import { HeaderComponent } from './header/header.component';
import { AuthGuardService} from './services/auth-guard.service';
import { ContactModule } from './general/contact/contact.module';
import { CustomersModule } from './customers/customers.module';
import { SearchComponent } from './book-list/search/search.component';
import { ListComponent } from './book-list/list/list.component';
import { RateComponent } from './book-list/rate/rate.component';

const appRoutes: Routes = [
  { path: 'auth/signup', component: SignupComponent },
  {
    path: 'about',
    loadChildren: () => import('./general/about/about.module')
      .then(mod => mod.AboutModule)
  },
  { path: 'auth/signin', component: SigninComponent },
  { path: 'books', canActivate: [AuthGuardService], component: BookListComponent },
  { path: 'books/new', canActivate: [AuthGuardService], component: BookFormComponent },
  // { path: 'books/search', canActivate: [AuthGuardService], component: SearchComponent },
  { path: 'books/view/:id', canActivate: [AuthGuardService], component: SingleBookComponent },
  { path: '', redirectTo: 'books', pathMatch: 'full' },
  { path: '**', redirectTo: 'books' }
];
@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SigninComponent,
    BookListComponent,
    SingleBookComponent,
    BookFormComponent,
    HeaderComponent,
    SearchComponent,
    ListComponent,
    RateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    ContactModule,
    CustomersModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
