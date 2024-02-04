import { Component } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  public isResponsive = false;

  download(){
    const link = document.createElement("a");
    link.setAttribute('target','blank');
    link.setAttribute('href','https://drive.google.com/file/d/1AmGt0VsSLx9kZn1TcBwoKK95ijwAmmr1/view?usp=drive_link');
    link.setAttribute('download','AravinthRaja Resume.pdf');
    document.body.appendChild(link);
    link.click();
    link.remove();
  }
}
