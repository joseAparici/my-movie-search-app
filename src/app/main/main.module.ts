import {NgModule} from '@angular/core';
import {SharedModule} from '@app/shared/shared.module';
import {MainRoutingModule} from '@app/main/main.routing.module';
import {HeaderModule} from '@app/header/header.module';
import {MainLayoutComponent} from '@app/main/views/main-layout/main-layout.component';

@NgModule({
  declarations: [MainLayoutComponent],
  imports: [
    SharedModule,
    MainRoutingModule,
    HeaderModule
  ],
  providers: [
  ],
})
export class MainModule {}
