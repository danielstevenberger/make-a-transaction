import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  order = '\u25BC'
  active = 'date';

  constructor() { }

  sortBy(by: string){
    if(this.active == by){
    if (this.order == '\u25B2'){
      this.order = '\u25BC'
    }
    else{
      this.order = '\u25B2'
    }
  }
    this.active = by;


  }

  ngOnInit(): void {
  }

}
