import {RouterModule, Routes} from '@angular/router';
import {CalculoNotaComponent} from "./calculo-nota/calculo-nota.component";
import {NgModule} from "@angular/core";

export const routes: Routes = [
  {path: '', component: CalculoNotaComponent}


];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

