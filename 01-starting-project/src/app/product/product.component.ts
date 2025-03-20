import { products } from './../dummy_product_list';
import { Component } from '@angular/core';
import { Product } from './product';
import { ShoppingCart } from '../shopping-cart/shopping-cart';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {

  products : Product[] = products;
  shoppingCart : ShoppingCart[] = [];


  decreaseQuantity = (product : Product) => {
     this.shoppingCart = this.shoppingCart.map(
                         (cartItem) => cartItem.productId === product.id && cartItem.quantity > 0
                         ? {...cartItem, quantity: cartItem.quantity - 1} : cartItem)
                         .filter((cartItem) => cartItem.quantity > 0);

    console.log(this.shoppingCart);
  }

  quantity = (id: string) => {
    return this.shoppingCart.find((cartItem) => cartItem.productId === id)?.quantity || 0;
  }

  increseQuantity = (product : Product) => {

    let productExist = false;

    this.shoppingCart = this.shoppingCart.map(cartItem => {
        if (cartItem.productId === product.id) {
            productExist = true;
            return { ...cartItem, quantity: cartItem.quantity + 1 };
        }
        return cartItem;
    });

    if(!productExist){
      this.shoppingCart = [...this.shoppingCart, {
        productId: product.id,
        quantity: 1,
        price: product.price,
        name: product.name,
        imageUrl: product.imageUrl
      }]
    }

    console.log(this.shoppingCart);

  }
}
