import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Product } from "./interface";

@Injectable()
export class ProductService {
    api = 'https://60ebb1d0e9647b0017cdddbb.mockapi.io/products';

    constructor(private http: HttpClient) { }

    getAll(): Observable<Product[]> {
        return this.http.get<Product[]>(this.api);
    }
    read(id: number): Observable<Product> {
        return this.http.get<Product>(`${this.api}/${id}`);
    }
    remove(id: number): Observable<Product> {
        return this.http.delete<Product>(`${this.api}/${id}`);
    }
    add(product: Product): Observable<Product> {
        return this.http.post<Product>(`${this.api}`, product);
    }
    edit(product: Product): Observable<Product> {
        return this.http.put<Product>(`${this.api}/${product.id}`, product);
    }

}