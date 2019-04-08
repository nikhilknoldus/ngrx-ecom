import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Store } from "@ngrx/store";
import * as Cart from "./../store/actions";


@Component({
  selector: "app-cart",
  template: `
    <div *ngFor="let product of (cart | async)">
      <div>
        <h3>{{ product.name }}</h3>
        <span>$</span>
        <span>{{ product.price }}</span>
        <div>
          Extra 5% Off. Cart value $ {{ 0.5 * product.price }}
          <a (click)="removeFromCart(product)">Remove From Cart</a>
        </div>
      </div>
    </div>
  `,
  styleUrls: ["./cart.component.css"]
})
export class CartComponent implements OnInit {
  cart: Observable<Array<any>>;
  constructor(private store: Store<any>) {
    this.cart = this.store.select("cart");
  }

  ngOnInit() {}

  removeFromCart(product) {
    this.store.dispatch(new Cart.RemoveProduct(product));
  }
}
