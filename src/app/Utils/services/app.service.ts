import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  public user = {
    firstName: 'Alexander',
    lastName: 'Pierce',
    image: 'assets/img/user2-160x160.jpg'
  };
  public cookieService!: CookieService;
  constructor(private router: Router) {}

  login() {
    this.router.navigate(['/']);
  }

  logout() {
    localStorage.removeItem('UserInfo');
    this.router.navigate(['/login']);
  }
}
