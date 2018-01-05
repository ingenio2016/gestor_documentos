import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  constructor( private _router:Router ) { }

  ngOnInit() {
  }

  searchDocument(type:string, text:string){
    this._router.navigate( ['documents/search', type, 'query', text] );
  }

}