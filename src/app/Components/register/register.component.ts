import { Component, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RequestRegister } from 'src/app/Models/input.model/RequestRegister';
import { ToastrService } from 'ngx-toastr';
import { Register } from 'src/app/Utils/services/Register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit, OnDestroy {
  public registerForm!: FormGroup;
  public m!: RequestRegister;
  constructor(private renderer: Renderer2,
    private toastr: ToastrService,
    private RGT: Register,
    ) {}

  ngOnInit() {
    this.renderer.addClass(document.body, 'register-page');
    this.m = new RequestRegister()
    this.registerForm = new FormGroup({
      UserName: new FormControl(null, Validators.required),
      Email: new FormControl(null, Validators.required)
    });
  }
  GetPassWord() {
    if (this.registerForm.valid) {
      this.m.UserName = this.registerForm.controls['UserName'].value;
      this.m.Email = this.registerForm.controls['Email'].value;
      if(this.ValidateEmail(this.m.Email)){
      let req={   
        UserName:this.m.UserName,
        Email:this.m.Email,
        UserCategory:2
      }
      this.RGT.GetPassWord(req)
      .subscribe(z => {
        if (z.Status == 1) {
          this.toastr.success('Lấy lại mật khẩu thành công kiểm tra email của bạn','Thao tác thành công');
        } else {
          this.toastr.error(z.Message,'Thao tác thất bại');
        }
      })}else{ this.toastr.warning('Địa chỉ email không đúng định dạng', 'Thao tác thất bại');}
    } else {
      this.toastr.error('Vui lòng nhập đầy đủ thông tin', 'Thao tác thất bại');
    }
  }

  ValidateEmail(mail: string) 
  {
   if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
    {
      return true
    }
      return false
  }

  ngOnDestroy() {
    this.renderer.removeClass(document.body, 'register-page');
  }
}
