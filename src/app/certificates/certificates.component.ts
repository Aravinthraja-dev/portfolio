import { Component } from '@angular/core';

@Component({
  selector: 'app-certificates',
  templateUrl: './certificates.component.html',
  styleUrls: ['./certificates.component.css']
})
export class CertificatesComponent {
viewWeb() {
  const link = document.createElement("a");
    link.setAttribute('target','blank');
    link.setAttribute('href','https://drive.google.com/file/d/1iD509uPBU-1BqjXNY64jcSsKEm7SX_yp/view?usp=sharing');
    link.setAttribute('download','web.jpg');
    document.body.appendChild(link);
    link.click();
    link.remove();
}
viewJava() {
  const link = document.createElement("a");
    link.setAttribute('target','blank');
    link.setAttribute('href','https://drive.google.com/file/d/1F4UbRIhrNAEWU4S7i8M_Z7m07wjKCjY5/view?usp=drive_link');
    link.setAttribute('download','java.jpg');
    document.body.appendChild(link);
    link.click();
    link.remove();
}
  imageWeb = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtZIMuX18hABPwicvJ37N9D1SwyuDLYMzccQ&usqp=CAU";
  imageJava = "https://contentstatic.techgig.com/photo/93000110/What-makes-Java-still-popular-among-developers.jpg";
  
}
