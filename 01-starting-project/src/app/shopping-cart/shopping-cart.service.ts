import { Injectable, signal } from "@angular/core";
import { ShoppingCart } from "./shopping-cart";
import { Product } from "../product/product";

@Injectable({
    providedIn: 'root'
})    
export class ShoppingCartService {

    constructor() { 
        const cart = localStorage.getItem('cart');
        if (cart) {
            this.shoppingCart.set(JSON.parse(cart));
        }        
    }
    
    shoppingCart = signal<ShoppingCart[]>([]);

    shoppingCartReadOnly = this.shoppingCart.asReadonly();

    addItemToCart(product: Product) {

        const cart = this.shoppingCart(); // Get current state

        const updatedCart = cart.some(item => item.productId === product.id)
            ? cart.map(item => 
                item.productId === product.id 
                    ? { ...item, quantity: item.quantity + 1 } // Update existing item
                    : item
            )
            : [...cart, { // Add new item if not found
                productId: product.id,
                name: product.name,
                price: product.price,
                quantity: 1,
                imageUrl: product.imageUrl
            }];
        
        this.shoppingCart.set(updatedCart); // Update state
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    }

    removeItemFromCart(product: Product) {
        const cart = this.shoppingCart(); // Get current state
    
        const updatedCart = cart
            .map(item => 
                item.productId === product.id 
                    ? { ...item, quantity: item.quantity - 1 } // Reduce quantity
                    : item
            )
            .filter(item => item.quantity > 0); // Remove item if quantity is 0
    
        this.shoppingCart.set(updatedCart); // Update state
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    }

    deleteItemFromCart(product: Product) {
    
        const cart = this.shoppingCart(); // Get current state
    
        const updatedCart = cart
            .filter(item => item.productId !== product.id); // Remove item
    
        this.shoppingCart.set(updatedCart); // Update state
        localStorage.setItem('cart', JSON.stringify(updatedCart));    
    } 
    
}    