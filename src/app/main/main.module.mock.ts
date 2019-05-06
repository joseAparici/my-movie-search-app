import {NgModule} from '@angular/core';
import {MainLayoutComponentMock} from '@app/main/views/main-layout/main-layout.component.mock';
import {MainRoutingModule} from '@app/main/main.routing.module';

@NgModule({
  imports: [MainRoutingModule],
  declarations: [MainLayoutComponentMock],
  exports: [MainLayoutComponentMock]
})
export class MainModuleMock {
}
