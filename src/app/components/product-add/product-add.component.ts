import { Component, OnInit } from '@angular/core'
import { ProductService } from 'src/app/product.service'
import { Product } from '../../interface'
import { Router } from '@angular/router'
@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {
  product = new Product()

  constructor(private productService: ProductService, private router: Router) { }

  AddProduct() {
    this.productService.add(this.product).subscribe(() => {
      alert('Thêm sản phẩm thành công')
      this.router.navigateByUrl('/shop')
    })
  }
  ngOnInit() { }

}
