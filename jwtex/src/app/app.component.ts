import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'jwtex';

  constructor(
    public authService: AuthService,
    private router: Router) {}

  public logout(): void {
    this.authService.logout();
    this.router.navigate(['/home']);
  }
}
