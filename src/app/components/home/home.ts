import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements OnInit {
  textToType = "Hi, I'm Ali Hassan.";
  displayText = '';
  typingSpeed = 100; 

  async ngOnInit() {
    for (let i = 0; i < this.textToType.length; i++) {
      this.displayText += this.textToType[i];
      await new Promise(res => setTimeout(res, this.typingSpeed));
    }
  }
}
