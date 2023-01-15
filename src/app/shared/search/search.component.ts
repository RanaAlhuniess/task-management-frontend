import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  @Input("label") label: string = "Search";
  @Input("placeholder") placeHolder: string = "Search";
  @Output("onSearch") onSearch: EventEmitter<string> = new EventEmitter<string>();
  searchText: string = '';
  searchEmitted: string = ''
  public search() {
    if(this.searchEmitted !== this.searchText) {
      this.searchEmitted = this.searchText
      this.onSearch.emit(this.searchText);
    }
  }

  keyDownFunction($event: KeyboardEvent) {
    if ($event.code === "Enter") {
      this.search();
    }
  }
}
