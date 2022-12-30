import { ResponseLogin } from 'src/app/Models/output.model/ResponseLogin';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

export class common {
    public LoginResult!: ResponseLogin;
    public cookieService!: CookieService;
    public CheckLogin() {
        this.LoginResult = new ResponseLogin();
        this.LoginResult = this.getUserinfo();
        if (this.LoginResult == null) {
            this.router.navigate(['/login']);
        }
    }
    constructor(private router: Router) {}
    public getUserinfo() {
        this.LoginResult = JSON.parse(localStorage.getItem('UserInfo')|| '{}');
        return this.LoginResult;
    }
    login() {
        this.router.navigate(['/']);
    }

    logout() {
        localStorage.removeItem('UserInfo');
        this.router.navigate(['/login']);
    }
}