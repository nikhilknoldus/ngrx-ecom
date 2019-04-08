import { Component, OnInit } from "@angular/core";
import { Product } from "../store/product.model";
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { PRODUCTS } from '../store/market';
import * as Cart from "./../store/actions";


@Component({
  selector: "app-product",
  template: `
      product works!
      <div>
          <h3>{{product.name}}</h3>
          <span>$</span>
          <span>{{product.price}}</span>
          <div>
            Extra 5% Off. Cart value $ {{0.5 * product.price}}
          </div>
          <div>
            <a (click)="addToCart(product)" style="font-color: blue; text-decoration: underline">Add To Cart</a>
          </div>
      </div>
  `,
  styleUrls: ["./product.component.css"]
})
export class ProductComponent implements OnInit {
  
  constructor(private route: ActivatedRoute, private store: Store<any>) {}

  product: Product;

  ngOnInit() {
    this.route.params.subscribe(p => {
      let id = p["id"];
      let result = Array.prototype.filter.call(PRODUCTS, v => v.id == id);
      if (result.length > 0) {
        this.product = result[0];
      }
    });
  }
  addToCart(product) {
    this.store.dispatch(new Cart.AddProduct(product));
  }
}
