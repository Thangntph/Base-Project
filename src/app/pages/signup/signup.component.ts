import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import {FormBuilder, Validators}from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  constructor(private productService: AuthService, private fb: FormBuilder, private router: Router){}
  form = this.fb.group({
    email: ["", [Validators.required, Validators.email]],
   password: ["", [Validators.required, Validators.minLength(6)]]
  
  })
  
  onAdd(){
    if(this.form.invalid){
      return;
    }
    this.productService.signup(this.form.value).subscribe(()=>{
      alert("Đăng kí thành công!")
      this.router.navigate(["/signin"]);
    })
  }
}
