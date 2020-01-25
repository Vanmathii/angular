import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'hms-application';
  username: String;
  constructor(private router: Router) { }
  loginpage() {
    this.router.navigate(['/login'], { queryParams: { name: this.username } });
  }
}
