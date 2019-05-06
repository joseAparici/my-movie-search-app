import {Component, Inject, OnInit} from '@angular/core';
import {APP_MODULE_CONFIG, AppModuleConfig} from '@app/app.module.config';

@Component({
  selector: 'mms-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit {

  title: string;
  constructor(@Inject(APP_MODULE_CONFIG) private appModuleConfig: AppModuleConfig) { }

  ngOnInit() {
    this.title = this.appModuleConfig.TITLE;
  }

}
