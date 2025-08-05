import { Component } from '@angular/core';
import { Amplify } from 'aws-amplify';
import { AmplifyAuthenticatorModule } from '@aws-amplify/ui-angular';

@Component({
  selector: 'app-signup',
  imports: [AmplifyAuthenticatorModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {

  formFields = {
  signUp : {
    given_name : { order:1, placeholder: 'First Name',label: 'First Name',name: 'given_name' },
    family_name : {order:2, placeholder: 'Last Name' ,label: 'Last Name',name: 'family_name' },
    email : { order:3 ,placeholder: 'Email' ,label: 'Email' },
    password : { order:4 ,placeholder: 'Password' },
    confirm_password : {order:5, placeholder: 'Confirm Password' }
  }
};

  constructor() {
    Amplify.configure({
      Auth: {
        Cognito: {
          userPoolId: '<>>',
          userPoolClientId: '<>'
        }
      }
    });


  }



}
