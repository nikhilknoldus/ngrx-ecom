import { Component } from "@angular/core";
import { Store, select } from "@ngrx/store";
import { Observable } from 'rxjs';

@Component({
  selector: "app-root",
  template: `
  <div>
    <div>
      <h4>Online Store</h4>
      <h6><a [routerLink]="['/cart']">Cart: {{(cart | async).length}}</a></h6>
      <hr />
    </div>
  </div>
  <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  title = 'app';
  constructor(private store: Store<any>) {}

  cart: Observable<Array<any>>

  ngOnInit() {
    // Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    // Add 'implements OnInit' to the class.
    
    // here we are not using the subcribe but using the async pipe
    //So, the "async pipe" does the subscription for us and appends the 
    //value to our template. So much work in only a few lines of code. Perfect!
    this.cart = this.store.select('cart')

    // this.cart = this.store.select('cart')
    //     .subscribe(state => this.cart = state)
  }
}
