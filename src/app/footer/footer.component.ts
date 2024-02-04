import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  github(){
    const link = document.createElement('a');
    link.setAttribute('target','blank');
    link.setAttribute('href','https://github.com/Aravinthraja-dev');
    document.body.appendChild(link);
    link.click();
    link.remove();
  }
  linkedin(){
    const link = document.createElement('a');
    link.setAttribute('target','blank');
    link.setAttribute('href','https://www.linkedin.com/in/aravinth-raja-19jan1995/');
    document.body.appendChild(link);
    link.click();
    link.remove();
  }
  instagram(){
    const link = document.createElement('a');
    link.setAttribute('target','blank');
    link.setAttribute('href','https://www.instagram.com/aravinth.raja.19/');
    document.body.appendChild(link);
    link.click();
    link.remove();
  }
}
