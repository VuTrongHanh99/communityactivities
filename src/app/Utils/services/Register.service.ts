import { Injectable, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { environment } from 'src/environments/environment';
import { ToastrService } from 'ngx-toastr';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';
import { AppConfiguration, AppConfig } from 'src/configuration';
@Injectable({
  providedIn: 'root'
})
export class Register {
  public cookieService!: CookieService;
  constructor(@Inject(AppConfig) private readonly appConfig: AppConfiguration,
    private router: Router,
    private toastr: ToastrService,
    private http : HttpClient,
    ) { }

  GetPassWord(req:any) {
      return this.http.post<any>(this.appConfig.UtilsUrl + 'Account/GetPassword',req,{      
      } ).pipe(map(z=> {return z})) 
  }
}
