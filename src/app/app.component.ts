import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NameComponent } from './name/name.component';
import { NavComponent } from './nav/nav.component';
import { ProfileComponent } from './profile/profile.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NameComponent, NavComponent, ProfileComponent],
  templateUrl: './app.component.html'
})
export class AppComponent { }
