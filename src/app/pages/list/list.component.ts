import { Component } from '@angular/core';
import { IProduct } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  products!: IProduct[]
constructor(private productService: ProductService){
  this.productService.getAllProduct().subscribe({
    next:(data)=>{
      this.products = data
    },error:(err)=>{
      console.log(err);
      
    }
  })
}
removeItem(id: any){
  if(confirm("Bạn có muốn xóa sản phẩm này không?")){
    this.productService.deleteProduct(id).subscribe(()=>{
      this.products = this.products.filter(pr => pr.id != id)
      alert("Xóa thành công")
    })
  }
  }
}
