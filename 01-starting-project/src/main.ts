import { bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { ProductComponent } from './app/product/product.component';
import { ShoppingCartComponent } from './app/shopping-cart/shopping-cart.component';


bootstrapApplication(AppComponent,{
  providers: [
    provideRouter(
      [
        {
          path:'',
          redirectTo:'products',
          pathMatch: 'full'

        },
        {
          path:'products',
          component: ProductComponent
        },
        {
          path: 'shopping-cart',
          component: ShoppingCartComponent
        }
      ]
    )
  ]
}).catch((err) => console.error(err));
