import { Injectable } from '@angular/core';
import {ApiService} from "./api.service";
import {Observable} from "rxjs";
import {Task} from "../models/task.model";
import {HttpParams} from "@angular/common/http";
import {map} from "rxjs/operators";
import {Category} from "../models/category.model";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  constructor(private apiService: ApiService) {

  }

  getAll(): Observable<Category[]> {
    return this.apiService.get(
        '/categories')
        .pipe(map(data => {
              return data;
            }
        ));
  }
}
