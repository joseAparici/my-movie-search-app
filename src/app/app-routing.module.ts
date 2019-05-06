import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {APP_MODULE_CONSTANTS} from '@app/app.module.config';

const routes: Routes = [
  {
    path: APP_MODULE_CONSTANTS.ROUTING.VIEW.EMPTY,
    loadChildren: 'app/main/main.module#MainModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
