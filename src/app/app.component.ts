import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NgOptimizedImage, provideImgixLoader } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgOptimizedImage, CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [
    provideImgixLoader(
      'https://res.cloudinary.com/ddjox2gat/image/upload/v1662015716/',
    ),
  ],
})
export class AppComponent {
  title = '';
  titleArray = [
    { name: 'test1', value: 2 },
    { name: 'test2', value: 3 },
  ].filter((title) => title.value > 4);
}
