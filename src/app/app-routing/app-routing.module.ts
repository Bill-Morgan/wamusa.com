import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component'
import { HomepageComponent } from '../pages/homepage/homepage.component';
import { LitchfieldComponent } from '../pages/litchfield/litchfield.component';
import { ObitsPageComponent } from '../pages/obits-page/obits-page.component';

const routes: Routes = [
  {
    path: '',
    component: HomepageComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'litchfield',
    component: LitchfieldComponent,
  },
  {
    path: 'obits',
    component: ObitsPageComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }