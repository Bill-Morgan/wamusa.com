import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component'
import { HomepageComponent } from '../homepage/homepage.component';
import { LitchfieldComponent } from '../litchfield/litchfield.component';
import { ObitsPageComponent } from '../obits-page/obits-page.component';

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