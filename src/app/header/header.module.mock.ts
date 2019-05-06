import {NgModule} from '@angular/core';
import {HeaderComponentMock} from '@app/header/components/header/header.component.mock';

@NgModule({
  declarations: [HeaderComponentMock],
  exports: [HeaderComponentMock]
})
export class HeaderModuleMock {
}
