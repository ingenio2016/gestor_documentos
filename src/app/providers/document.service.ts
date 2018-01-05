import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DocumentService {
  // FireBase Collections
  documentsCollection: AngularFirestoreCollection<any>;
  documentsObs: Observable<any>;
  private documents: any[] = [];

  constructor( private db: AngularFirestore ) {
    this.documentsCollection = this.db
      .collection<any>('documents');
    this.documentsObs = this.documentsCollection.valueChanges();
  }
  loadMessages() {
    return this.documentsObs
      .map((docs: any[]) => {
        this.documents = [];
        for (const doc of docs){
          this.documents.unshift(doc);
        }
        return this.documents;
      });
  }

  searchDocument(type: string, term:string) {
    this.loadMessages();
    let documentsArray:any[] = [];
    term = term.toLowerCase();
    if(type == '1'){
      for(let document of this.documents){
        let name = document.name.toLowerCase();
        if(name.indexOf( term ) >= 0){
          documentsArray.push(document);
        }
      }
    }
    if(type == '2'){
      for(let document of this.documents){
        let description = document.description.toLowerCase();
        if(description.indexOf( term ) >= 0){
          documentsArray.push(document);
        }
      }
    }
    if(type == '3'){
      for(let document of this.documents){
        let author = document.author.toLowerCase();
        if(author.indexOf( term ) >= 0){
          documentsArray.push(document);
        }
      }
    }
    if(type == '4'){
      for(let document of this.documents){
        let content = document.content.toLowerCase();
        if(content.indexOf( term ) >= 0){
          documentsArray.push(document);
        }
      }
    }
    if(documentsArray.length == 0){
      documentsArray = this.documents;
    }
    return documentsArray;
  }
}
