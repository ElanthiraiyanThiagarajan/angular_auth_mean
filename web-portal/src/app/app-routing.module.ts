import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { EventsComponent } from './events/events.component';
import { SpecialEventsComponent } from './special-events/special-events.component';
import { AuthGuard } from './auth.guard';
import { LandingComponent } from './landing/landing.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  }, 
  {
    path:'register',
    component: RegisterComponent
  },
  {
    path: 'landing',
    component: LandingComponent,
    canActivate: [AuthGuard],
    children: [{
        path: 'events',
        component: EventsComponent,
    }, {
        path: 'special-events',
        component: SpecialEventsComponent,
    }]
},
{ path: '**', redirectTo: '/login', pathMatch: 'full' },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
