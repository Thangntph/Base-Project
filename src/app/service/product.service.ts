import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }
  getAllProduct(): Observable<IProduct[]>{
    return this.http.get<IProduct[]>(`http://localhost:3000/products`);
  }
  getOneProduct(id: any): Observable<IProduct>{
    return this.http.get<IProduct>(`http://localhost:3000/products/${id}`);
  }
  editProduct(product: IProduct): Observable<IProduct>{
    return this.http.put<IProduct>(`http://localhost:3000/products/${product.id}`, product);
  }
  addProduct(product: IProduct): Observable<IProduct>{
    return this.http.post<IProduct>(`http://localhost:3000/products`, product);
  }
  deleteProduct(id: any): Observable<IProduct>{
    return this.http.delete<IProduct>(`http://localhost:3000/products/${id}`);
  }
}
