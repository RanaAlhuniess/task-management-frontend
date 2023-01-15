import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';


@Component({
  selector: 'app-home-page',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {
  constructor(
  ) {}

  // listConfig: ArticleListConfig = {
  //   filters: {}
  // };

  ngOnInit() {
    console.log('hi from home component')
  }

  trackByFn(index, item) {
    return index;
  }

}
