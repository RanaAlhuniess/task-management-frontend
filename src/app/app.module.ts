import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CoreModule} from "./core/core.module";
import {HeaderComponent} from "./shared/layout/header.component";
import {FooterComponent} from "./shared/layout/footer.component";
import {SharedModule} from "./shared/shared.module";
import {AuthModule} from "./auth/auth.module";
import {HomeModule} from "./home/home.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NgxPaginationModule} from "ngx-pagination";

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    SharedModule,
    AuthModule,
    HomeModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
