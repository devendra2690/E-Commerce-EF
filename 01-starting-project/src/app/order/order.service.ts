import { Injectable, signal } from "@angular/core";
import { Order } from "./order";
import { orders } from "./order_dummy";

@Injectable({
    providedIn: 'root'
}) 
export class OrderService {

    orders = signal<Order[]>([]);
    orderReadOnly = this.orders.asReadonly();

    placeOrder(order: any) {
        console.log("Order placed", order);
    }

    getOrderByUserId(userId: string) {
        return orders.filter(order => order.userId === userId);
    }
}