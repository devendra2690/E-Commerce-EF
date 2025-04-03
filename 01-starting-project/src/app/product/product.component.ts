import { products } from './../dummy_product_list';
import { Component, inject, OnInit } from '@angular/core';
import { Product } from './product';
import { ShoppingCart } from '../shopping-cart/shopping-cart';
import { ShoppingCartService } from '../shopping-cart/shopping-cart.service';
import { Observable } from 'rxjs';
import { ProductService } from './product.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit {

  products : Product[] = products;
  private shoppingSetrvice = inject(ShoppingCartService);
  private productService = inject(ProductService);
  shoppingCart : ShoppingCart[] = this.shoppingSetrvice.shoppingCartReadOnly();
  productsName : string[] = [];

  ngOnInit() {
    this.productService.getProductName().subscribe(
      (productsName) => {
        this.productsName = productsName;
        console.log(this.productsName);
      },
      (error) => {
        console.error('Error fetching product names:', error);
      }
    );
  }

  decreaseQuantity = (product : Product) => {
    this.shoppingSetrvice.removeItemFromCart(product);
    console.log(this.shoppingCart);
  }

  quantity = (id: string) => {
    return this.shoppingSetrvice.shoppingCartReadOnly()
            .find((cartItem) => cartItem.productId === id)?.quantity || 0;
  }

  increseQuantity = (product : Product) => {
    this.shoppingSetrvice.addItemToCart(product);
    console.log(this.shoppingCart);
  }
}
