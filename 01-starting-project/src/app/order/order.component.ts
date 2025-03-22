import { Component, inject, input } from '@angular/core';
import { ActivatedRouteSnapshot, ResolveFn } from '@angular/router';
import { Order } from './order';
import { OrderService } from './order.service';

@Component({
  selector: 'app-order',
  standalone: true,
  imports: [],
  templateUrl: './order.component.html',
  styleUrl: './order.component.css'
})
export class OrderComponent {
  orders = input<Order[]>([]);
}

export const orderResolver : ResolveFn<Order[]> = (route: ActivatedRouteSnapshot): Order[] => {

  const userId = route.paramMap.get('userId');
  const orderService = inject(OrderService);
  const orders = orderService.getOrderByUserId(userId || '');
  console.log("Orders", orders);
  console.log("UserId", userId);
  return orders;
}
