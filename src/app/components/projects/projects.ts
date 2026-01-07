import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './projects.html',
  styleUrls: ['./projects.css']
})
export class ProjectsComponent {
  projects = [
    {
      title: 'Facial Emotion Movie Recommendation System',
      description: 'AI-powered app that detects emotion through webcam and recommends movies accordingly.',
      techStack: ['Python', 'FastAPI', 'Angular', '.NET', 'SQL'],
      github: 'https://github.com/Alitaqvi505/Facial-emotion-MovieRecommendation'
    },
    {
      title: 'Stock Market Prediction System',
      description: 'Predicts stock trends using machine learning integrated with Angular and .NET API.',
      techStack: ['Python', 'Machine Learning', 'Angular', '.NET'],
      github: 'https://github.com/Alitaqvi505/Stock-Market-Prediction'
    },
    {
      title: 'Fraud Detection Banking App',
      description: 'Full-stack banking dashboard detecting fraudulent transactions with AI insights.',
      techStack: ['Python', 'Angular', '.NET', 'SQL'],
      github: 'https://github.com/Alitaqvi505/Fraud-Detection-Banking-App'
    },
    {
      title: 'SME Loan Risk Prediction',
      description: 'AI system predicting SME loan defaults using FastAPI and .NET backend integration.',
      techStack: ['Python', 'FastAPI', 'Angular', '.NET'],
      github: 'https://github.com/Alitaqvi505/SME-Loan-Risk-Prediction'
    }
  ];
}
