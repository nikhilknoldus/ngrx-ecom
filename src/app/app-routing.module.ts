import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ProductsComponent } from "./products/products.component";
import { ProductComponent } from "./product/product.component";
import { CartComponent } from "./cart/cart.component";

const routes: Routes = [
  { path: "", redirectTo: "/products", pathMatch: "full" },
  { path: "products", component: ProductsComponent },
  { path: "product/:id", component: ProductComponent },
  { path: "cart", component: CartComponent },
  { path: "**", redirectTo: "", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
export const childRoutes = [ProductsComponent, ProductComponent, CartComponent];
