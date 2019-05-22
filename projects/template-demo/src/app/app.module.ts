import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TemplateLibModule } from '../../../template-lib/src/lib/template-lib.module'
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TemplateLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
