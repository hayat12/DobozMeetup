import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { BootstrapAlertModule } from 'ng2-alert-service/bootstrap-alert.module';
import { FileUploaderModule } from "./file-uploader/file-uploader.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot(),
    BootstrapAlertModule,
    FileUploaderModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
