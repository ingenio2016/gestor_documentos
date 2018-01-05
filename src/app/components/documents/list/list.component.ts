import { Component, OnInit } from '@angular/core';
import { DocumentService } from "../../../providers/document.service"
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  private documents: any[] = [];
  constructor( private _ds: DocumentService) {
  }

  ngOnInit() {
    this._ds.loadMessages().subscribe( (data) => {
      this.documents = data;
    })
  }
}
