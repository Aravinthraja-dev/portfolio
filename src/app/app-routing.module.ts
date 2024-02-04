import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EducationComponent } from './education/education.component';
import { CertificatesComponent } from './certificates/certificates.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ProjectsComponent } from './projects/projects.component';
import { SkillsComponent } from './education/skills/skills.component';

const routes: Routes = [
  { path: '',component: HomeComponent},
  { path: 'education', component: EducationComponent},
  { path: 'certificate', component: CertificatesComponent},
  { path: 'contacts', component: ContactsComponent},
  { path: 'projects', component: ProjectsComponent},
  { path: 'skills', component: SkillsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
