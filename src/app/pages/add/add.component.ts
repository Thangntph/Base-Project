import { Component } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';
import {FormBuilder, Validators}from '@angular/forms';
import { Router } from '@angular/router';
import { IProduct } from 'src/app/interfaces/product';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {
products: IProduct={

}
constructor(private productService: ProductService, private fb: FormBuilder, private router: Router){}
form = this.fb.group({
  name: ["", [Validators.required, Validators.minLength(4)]],
  image: ["", Validators.required],
  quality: ["", Validators.nullValidator],
  price: ["", [Validators.required, Validators.min(0)]],
  description: ["", Validators.nullValidator],

})

onAdd(){
  if(this.form.invalid){
    return;
  }
  this.productService.addProduct(this.products).subscribe(()=>{
    alert("Thêm thành công!")
    this.router.navigate(["/"]);
  })
}
}
