import { products } from './../dummy_product_list';
import { Component, inject, OnInit } from '@angular/core';
import { Product } from './product';
import { ShoppingCart } from '../shopping-cart/shopping-cart';
import { ShoppingCartService } from '../shopping-cart/shopping-cart.service';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {

  products : Product[] = products;
  private shoppingSetrvice = inject(ShoppingCartService);
  shoppingCart : ShoppingCart[] = this.shoppingSetrvice.shoppingCartReadOnly();

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
