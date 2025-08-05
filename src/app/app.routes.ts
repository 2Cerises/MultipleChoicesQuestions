import { Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { MultiquestionsComponent } from './multiquestions/multiquestions.component';

export const routes: Routes = [
    { path: '', component: MultiquestionsComponent },
    { path: 'signup', component: SignupComponent },
];
