import { Injectable } from '@angular/core';
import { catchError, map, Observable, of, retry } from 'rxjs';
import { products } from '../dummy_product_list';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  productName$ : Observable<string[] | never[]> = of([]); // Initialize with an empty observable

  constructor() {
    this.productName$ = of(products).pipe(
      retry(3),
      map((products) => products.map((product) => product.name)),
      catchError((error) => {
        console.error('Error fetching product names:', error);
        return of([]);
      }
    ));
  }

  getProductName(): Observable<string[]> {
    return this.productName$;
  }
}
