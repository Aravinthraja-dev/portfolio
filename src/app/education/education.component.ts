import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent {
  college = "assets\college.jpg";

  constructor(private route: Router) { }

  onClick(){
    this.route.navigate(['/skills']);
  }
}
