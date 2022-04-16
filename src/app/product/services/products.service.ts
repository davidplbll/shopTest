import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import { PRODUCT } from "./../interfaces"
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.get<PRODUCT[]>("assets/data/products.json");
  }
}
