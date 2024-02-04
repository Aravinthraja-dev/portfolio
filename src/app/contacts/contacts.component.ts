import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CrudService } from '../crud.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent{
    constructor(
      private crudApi:CrudService,
      public toaster : ToastrService,
      private router: Router
      ) { }

    form = new FormGroup({
      username: new FormControl('',[
        Validators.required,
        Validators.maxLength(15),
        Validators.minLength(3)
      ]),
      email: new FormControl('',[
        Validators.required,
        Validators.email
      ]),
      message: new FormControl('',[
        Validators.required,
        Validators.minLength(10)
      ])
    });

    get all(){
      return this.form.controls;
    }

    onSubmit(contactForm: ContactForm){
      this.crudApi.addUser(contactForm);
      this.toaster.success(
        this.form.controls['username'].value + ' Your Message sent Successfully!'
      );
      this.router.navigate(['/']);
    }
  }
class ContactForm{
  username!: string;
  email!: string;
  message!: string;
}