import { Component, OnInit } from '@angular/core';
import { Product } from './interface';
import { ProductService } from './product.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  // chuyền data xuống file app.html
  // products: Product[];
  // constructor(private productData: ProductService) { }

  // getProduct() {
  //   this.products = this.productData.getDataProduct();
  //   console.log('hihi', this.products)
  // }

  // ngOnInit() {
  //   this.getProduct();
  // }
  // onHandleAdd(product : Product){
  //   this.products.push(product)
  // }
}
