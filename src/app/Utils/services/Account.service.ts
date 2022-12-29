import { Injectable, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';
import { ResponseLogin } from 'src/app/Models/output.model/ResponseLogin';
import { AppConfiguration, AppConfig } from 'src/configuration';
@Injectable({
  providedIn: 'root'
})
export class Account {

  public cookieService!: CookieService;
  constructor(@Inject(AppConfig) private readonly appConfig: AppConfiguration,
    private router: Router, private http: HttpClient) { }
  Login(req: any) {
    return this.http.post<any>(this.appConfig.UtilsUrl + 'Account/Login', req, {
    }).pipe(map(z => { return z }))
  }
  ChangePass(req: any, token: string): Observable<any> {

    return this.http.post<any>(this.appConfig.UtilsUrl + 'Account/ChangePassword', req, {
      headers: new HttpHeaders()
        .set('Authorization', `Bearer ${token}`)
    }).pipe(map(z => { return z }))
  }
  LoginWithGoogle(req: any) {
    return this.http
      .get<any>(
        this.appConfig.UtilsUrl +
        'Account/LoginWithGoogle?email=' +
        req.email +
        '&ID_ph=' +
        req.ID_ph +
        '&UserCategory=' +
        req.UserCategory,
        {}
      )
      .pipe(
        map((z) => {
          return z;
        })
      );
  }
}
