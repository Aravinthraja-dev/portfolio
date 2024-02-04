import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  loginUrl = "https://colorlib.com/wp/wp-content/uploads/sites/2/free-html5-and-css3-login-forms.jpg";
  ticketUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnqHmpAXESHIny8Y-qrZu4VQlLZTX2AdktRg&usqp=CAU";
  ecommerceUrl = "data:image/jpeg;base64,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";
  posUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS41vh2JeuGePknUd00X1S6eT-rJggGO659EA&usqp=CAU";

  busTicket(){
    const link = document.createElement("a");
    link.setAttribute('target','blank');
    link.setAttribute('href','https://github.com/Aravinthraja-dev/busE-Ticket');
    document.body.appendChild(link);
    link.click();
    link.remove();
  }

  login(){
    const link = document.createElement("a");
    link.setAttribute('target','blank');
    link.setAttribute('href','https://github.com/Aravinthraja-dev/login_signup');
    document.body.appendChild(link);
    link.click();
    link.remove();
  }
}