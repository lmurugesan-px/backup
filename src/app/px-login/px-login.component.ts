import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-px-login',
  templateUrl: './px-login.component.html',
  styleUrls: ['./px-login.component.sass'],
})
export class PxLoginComponent {
  login: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private http: HttpClient) {
    this.login = this.fb.group({
      uname: this.fb.control('px-admin', [Validators.required]),
      password: this.fb.control('px-password', [Validators.required]),
    });
  }

  onSubmit() {
    this.http.post('http://localhost:3000/login',this.login.value).subscribe((res: any)=>{
      sessionStorage.setItem('token', res.token);
      this.router.navigate(['dashboard']);
    })
  }
}
