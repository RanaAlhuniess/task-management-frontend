import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import {ShowAuthedDirective} from "./show-authed.directive";
import {ListErrorsComponent} from "./list-errors.component";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import { SearchComponent } from './search/search.component';
import {MatInputModule} from "@angular/material/input";


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        RouterModule,
        MatToolbarModule,
        MatIconModule,
        MatButtonModule,
        MatInputModule,
    ],
  declarations: [
    ShowAuthedDirective,
    ListErrorsComponent,
    SearchComponent,
  ],
    exports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        RouterModule,
        ShowAuthedDirective,
        ListErrorsComponent,
        MatToolbarModule,
        MatIconModule,
        MatButtonModule,
        SearchComponent,
    ]
})
export class SharedModule {}
