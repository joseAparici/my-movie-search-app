import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppComponent} from '@app/app.component';
import {CoreModule} from '@app/core/core.module';
import {SharedModule} from '@app/shared/shared.module';
import {AppRoutingModule} from '@app/app-routing.module';
import {APP_MODULE_CONFIG, APP_MODULE_CONSTANTS} from '@app/app.module.config';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    CoreModule,
    SharedModule,
    AppRoutingModule
  ],
  providers: [
    {provide: APP_MODULE_CONFIG, useValue: APP_MODULE_CONSTANTS}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
