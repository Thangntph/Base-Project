import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import {FormBuilder, Validators}from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
  constructor(private productService: AuthService, private fb: FormBuilder, private router: Router){}
  form = this.fb.group({
    email: ["", [Validators.required, Validators.email]],
   password: ["", [Validators.required, Validators.minLength(6)]]
  
  })
  
  onAdd(){
    if(this.form.invalid){
      return;
    }
    this.productService.signin(this.form.value).subscribe(()=>{
      alert("Đăng nhập thành công!")
      this.router.navigate(["/"]);
    })
  }
}
