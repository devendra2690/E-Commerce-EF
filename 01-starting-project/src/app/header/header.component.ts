import { Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ShoppingCartService } from '../shopping-cart/shopping-cart.service';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  imports: [RouterLink]
})
export class HeaderComponent {

  private shoopinCartService = inject(ShoppingCartService);
  cartItemCount = computed(()=> this.shoopinCartService.shoppingCartReadOnly().reduce((acc, item) => acc + item.quantity, 0));
}
