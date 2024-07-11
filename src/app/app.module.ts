import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {CalculoNotaComponent} from "./calculo-nota/calculo-nota.component";
import {RouterModule} from "@angular/router";
import {AppRoutingModule} from "./app.routes";
import {BrowserModule} from "@angular/platform-browser";


@NgModule({
  declarations: [
    CalculoNotaComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
