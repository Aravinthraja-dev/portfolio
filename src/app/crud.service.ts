import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  
  constructor(private db: AngularFireDatabase, private auth: AngularFireAuth) { }
  
  addUser(contactForm:any){
    return this.db.list('/visitors').push(contactForm);
    
  }

  
}
