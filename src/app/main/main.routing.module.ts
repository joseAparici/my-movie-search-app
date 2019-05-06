import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {MAIN_MODULE_CONSTANTS} from '@app/main/main.module.config';
import {MainLayoutComponent} from '@app/main/views/main-layout/main-layout.component';

const routes: Routes = [
  {
    path: MAIN_MODULE_CONSTANTS.ROUTING.VIEW.EMPTY,
    component: MainLayoutComponent,
    children: [
      {
        path: MAIN_MODULE_CONSTANTS.ROUTING.VIEW.EMPTY,
        loadChildren: 'app/movie-list/movie-list.module#MovieListModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class MainRoutingModule {}
