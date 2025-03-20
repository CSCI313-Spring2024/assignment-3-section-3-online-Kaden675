
import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component'; 
import { RouterModule } from '@angular/router'; 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterModule,
    HomeComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'assignment-home-app';
}
