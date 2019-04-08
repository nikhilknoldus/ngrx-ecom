import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from "@ngrx/store";
import { reducer } from '../app/store/reducer';
import { AppRoutingModule, childRoutes } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    childRoutes
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({cart: reducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
