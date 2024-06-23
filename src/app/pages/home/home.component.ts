import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import AOS from "aos";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})

export class HomeComponent {

  ngOnInit():void {
    AOS.init();
  }

}
