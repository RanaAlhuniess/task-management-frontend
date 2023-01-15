import { NgModule } from '@angular/core';

import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import {SharedModule} from "../shared/shared.module";
import {TaskModule} from "../task/task.module";

@NgModule({
    imports: [
        SharedModule,
        HomeRoutingModule,
        TaskModule
    ],
  declarations: [
    HomeComponent
  ],
  providers: [
  ]
})
export class HomeModule {}
