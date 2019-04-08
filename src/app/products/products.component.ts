import { Component, OnInit } from "@angular/core";
import { PRODUCTS } from "../store/market";

@Component({
  selector: "app-products",
  template: `
      <ul>
        <li *ngFor="let product of products"> {{product.id}} | {{product.name}} | {{product.price}} = 
        <a [routerLink]="['/product', product.id]">View</a>
        </li>
      </ul>
  `,
  styleUrls: ["./products.component.css"]
})
export class ProductsComponent implements OnInit {
  products = PRODUCTS;
  constructor() {}

  ngOnInit() {}
}
