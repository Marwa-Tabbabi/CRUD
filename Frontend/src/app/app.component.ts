import { Component } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'recette_front';

  constructor(private router: Router) {
  }

  shouldShowNavbar(): boolean {
    const currentRoute = this.router.url;
    return !['/login', '/register','/register_sponsor','/register_chef','/register_cuisinier', '/'].includes(currentRoute);
  }

}
