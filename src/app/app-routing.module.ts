import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmailComponent } from './components/email/email.component';
import { HomepageComponent } from './components/homepage/homepage.component';

const routes: Routes = [
  // on "/sendmail path load the EmailComponent"
  {
    path:"sendemail",
    component: EmailComponent,
    pathMatch:"full"
  },
  {
    path:"",
    component:HomepageComponent,
    pathMatch:"full"
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
