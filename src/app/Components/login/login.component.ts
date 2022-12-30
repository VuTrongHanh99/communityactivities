import { Component, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RequestLogin } from 'src/app/Models/input.model/RequestLogin';
import { ResponseLogin } from 'src/app/Models/output.model/ResponseLogin';
import { ToastrService } from 'ngx-toastr';
import { CookieService } from 'ngx-cookie-service';
import { Account } from 'src/app/Utils/services/Account.service';
import { AppService } from 'src/app/Utils/services/app.service';
import { HttpClient } from '@angular/common/http';
import { SocialAuthService } from '@abacritt/angularx-social-login';
import { NgxSpinnerService } from 'ngx-spinner';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css','./main.css']
})
export class LoginComponent implements OnInit, OnDestroy {
  user:any
  public loginForm!: FormGroup;
  public m!: RequestLogin;
  public LoginResult!: ResponseLogin;
  constructor(
    private renderer: Renderer2,
    private toastr: ToastrService,
    private AppService: AppService,
    private http: HttpClient,
    private cookieService: CookieService,
    private Acc: Account,
    private spinner: NgxSpinnerService,
    public _socioAuthServ: SocialAuthService
  ) { }

  ngOnInit() {
    debugger;
    this.renderer.addClass(document.body, 'login-page');
    this.m = new RequestLogin()
    this.cookieService.deleteAll
    this.LoginResult = new ResponseLogin()
    this.loginForm = new FormGroup({
      UserName: new FormControl(null, Validators.required),
      Password: new FormControl(null, Validators.required)
    });
    // this.loginForm.controls.UserName.setValue('aaaaaaa')
  }

  Ridrect() {
    this.AppService.login();
  }
  logIn() {
    this.spinner.show()
    if (this.loginForm.valid) {
      this.m.UserName = this.loginForm.controls['UserName'].value;
      this.m.Password = this.loginForm.controls['Password'].value;
      let req={        
        UserName:this.m.UserName,
        Password:this.m.Password,
        UserCategory:2
      }

      this.Acc.Login(req)
      .subscribe(z => {
        this.spinner.hide()
        if (z.Status == 1) {
          localStorage.setItem('UserInfo', JSON.stringify(z));
        this.AppService.login();
        } else {
          this.toastr.error(z.Message,'Thao tác thất bại');
          localStorage.removeItem('UserInfo');
        }
      },
      errors =>{
        this.toastr.error("ERROR: " + errors.message);
      }
      )    
    } else {
      this.toastr.error('Vui lòng nhập đầy đủ thông tin', 'Thao tác thất bại');
      this.spinner.hide()
    }
  }
  // signInGoogle(platfom: string): void {
  //   platfom = GoogleLoginProvider.PROVIDER_ID;
  //   this._socioAuthServ.signIn(platfom).then((response) => {
  //     this.user = response;
  //     let req = {
  //       email: response.email,
  //       ID_ph: 4,
  //       UserCategory: 2,
  //     };
  //     this.Acc.LoginWithGoogle(req).subscribe((z) => {
  //       if (z.Status == 1) {
  //         localStorage.setItem('UserInfo', JSON.stringify(z));
  //         this.AppService.login();
  //       } else {
  //         this.toastr.error(z.Message, 'Thao tác thất bại');
  //         localStorage.removeItem('UserInfo');
  //       }
  //     });
  //   });
  // }
  // signInFacebook(platfom: string): void {
  //   platfom = FacebookLoginProvider.PROVIDER_ID;
  //   this._socioAuthServ.signIn(platfom).then((response) => {
  //     this.user = response;
  //     let req = {
  //       email: response.email,
  //       ID_ph: 4,
  //       UserCategory: 2,
  //     };
  //     this.Acc.LoginWithGoogle(req).subscribe((z) => {
  //       if (z.Status == 1) {
  //         localStorage.setItem('UserInfo', JSON.stringify(z));
  //         this.AppService.login();
  //       } else {
  //         this.toastr.error(z.Message, 'Thao tác thất bại');
  //         localStorage.removeItem('UserInfo');
  //       }
  //     });
  //   });
  // }
  ngOnDestroy() {
    // this.renderer.removeClass(document.body, 'login-page');
  }
  

}
