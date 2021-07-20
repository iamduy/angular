import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { ProductService } from 'src/app/product.service'
import { Product } from '../../interface'

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  /* get detail product from folder products */
  // @Input() data: Product

  product: Product
  constructor(
    private productService: ProductService,
    private route: ActivatedRoute
  ) { }

  getProduct() {
    this.route.params.subscribe(items => {
      this.productService.read(items.id).subscribe(data => {
        this.product = data
      })
    })
  }

  ngOnInit() {
    this.getProduct()
  }
}
