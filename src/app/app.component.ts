import { Component } from '@angular/core';
import { ResponseLogin } from './Models/output.model/ResponseLogin';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public LoginResult!: ResponseLogin;

  title = 'UniTeacher';
  constructor(
    public cookieService: CookieService,
  ) { }
}

