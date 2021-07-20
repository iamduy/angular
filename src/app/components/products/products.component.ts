import { Component, Input, OnInit } from '@angular/core'
import { ProductService } from 'src/app/product.service'
import { Product } from '../../interface'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],

})

export class ProductsComponent implements OnInit {

  products: Product[]
  
  constructor(private productService: ProductService) { }

  onRemove(id: number) {
    this.productService.remove(id).subscribe(res => {
      this.products = this.products.filter(product => product.id != res.id)
    })
  }
  
  ngOnInit() {
    this.productService.getAll().subscribe(data =>  this.products = data)
  }

}
