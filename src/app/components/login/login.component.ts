import { Component } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router'
import {
  FormsModule,
  FormGroup,
  FormControl
} from '@angular/forms';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  login: ILogin = { userName: '', password: '' };
  constructor(private router: Router, private route: ActivatedRoute) {

  }

  onSubmit(form) {
    console.log('20', form)
    if(form.valid)
    this.router.navigate(['../appointments'], { relativeTo: this.route })
  }

}

export interface ILogin {
  userName: string,
  password: string
}


export default LoginComponent