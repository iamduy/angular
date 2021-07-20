import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { Product } from 'src/app/interface'
import { ProductService } from 'src/app/product.service'

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  product: Product
  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  getProduct() {
    this.route.params.subscribe(params => {
      this.productService.read(params.id).subscribe(data => this.product = data)
    })
  }

  EditProduct() {
    this.productService.edit(this.product).subscribe(() => {
      alert('Cập nhật thành công !')
      this.router.navigateByUrl('/shop')
    })
  }

  ngOnInit() {
    this.getProduct()
  }

}
