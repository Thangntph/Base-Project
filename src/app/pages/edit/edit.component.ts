import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/service/product.service';
import {FormBuilder, Validators}from '@angular/forms';
import { IProduct } from 'src/app/interfaces/product';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {
  products!: IProduct
  constructor(private productService: ProductService, private fb: FormBuilder, private router: Router, private param: ActivatedRoute){
    this.param.paramMap.subscribe(par=>{
      const id = (par.get('id'))
      this.productService.getOneProduct(id).subscribe(data=>{
        this.products = data
      })
    })
  }
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
    this.productService.editProduct(this.products).subscribe(()=>{
      alert("Sửa thành công!")
      this.router.navigate(["/"]);
    })
  }
}
