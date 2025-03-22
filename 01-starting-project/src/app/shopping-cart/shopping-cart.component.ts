import { Component, computed, inject } from '@angular/core';
import { ShoppingCartService } from './shopping-cart.service';
import { ShoppingCart } from './shopping-cart';
import { Product } from '../product/product';

@Component({
  selector: 'app-shopping-cart',
  standalone: true,
  imports: [],
  templateUrl: './shopping-cart.component.html',
  styleUrl: './shopping-cart.component.css'
})
export class ShoppingCartComponent {

  private shoppingCartService = inject(ShoppingCartService);
  shoppingCart = this.shoppingCartService.shoppingCartReadOnly();
  totalItems = computed(() => this.shoppingCart.reduce((acc, item) => acc + item.quantity, 0));
  totalPrice = computed(() => this.getTotalPrice());

  decreaseQuantity: (product: ShoppingCart) => void = (cartItem) => {
    const product : Product = {
      id: cartItem.productId,
      name: cartItem.name,
      price: cartItem.price,
      imageUrl: cartItem.imageUrl,
      description: cartItem.name 
    }
    this.shoppingCartService.removeItemFromCart(product);
  }

  increaseQuantity: (product: ShoppingCart) => void = (cartItem) => {
    const product : Product = {
      id: cartItem.productId,
      name: cartItem.name,
      price: cartItem.price,
      imageUrl: cartItem.imageUrl,
      description: cartItem.name 
    }
    this.shoppingCartService.addItemToCart(product);
  } 

  getTotalPrice: () => number = () => {
    return this.shoppingCartService.shoppingCartReadOnly().reduce((acc, item) => acc + item.price * item.quantity, 0);
  }   

  quantity: (id: string) => number = (id) => {
    return this.shoppingCartService.shoppingCartReadOnly().find((cartItem) => cartItem.productId === id)?.quantity || 0;    
  }

  removeItem: (product: ShoppingCart) => void = (cartItem) => {
    const product : Product = {
      id: cartItem.productId,
      name: cartItem.name,
      price: cartItem.price,
      imageUrl: cartItem.imageUrl,
      description: cartItem.name 
    }
    this.shoppingCartService.deleteItemFromCart(product);
  }
}
