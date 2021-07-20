import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Error404Component } from './components/error404/error404.component';
import { ProductAddComponent } from './components/product-add/product-add.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductEditComponent } from './components/product-edit/product-edit.component';
import { ProductsComponent } from './components/products/products.component';

const routes: Routes = [
   /** Router dành cho phần website */
  {path : '' , redirectTo : '/shop' , pathMatch : 'full'},
  {path : 'shop' , component : ProductsComponent},
 
  {path : 'product/detail/:id' , component : ProductDetailComponent},

  /** Router dành cho phần quản trị */
  {path : 'product/add' , component : ProductAddComponent},
  {path : 'product/edit/:id' , component : ProductEditComponent},
  /* Notfound 404 */
  {path : '404' , component : Error404Component},
  {path : '**' , redirectTo : '/404'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
