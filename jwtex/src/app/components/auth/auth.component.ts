import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router) { }

  ngOnInit(): void {
  }

  public login(formData: NgForm): void {
    this.authService.login(formData.value.email, formData.value.password);
    formData.reset();
    this.router.navigate(['/home']);
  }

  public signup(formData: NgForm): void {
    this.authService.signup(formData.value.email, formData.value.password);
    formData.reset();
    this.router.navigate(['/home']);
  }

}
