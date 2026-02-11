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
      title: 'Helios Consulitng Group',
      position:' Especial assignments director',
      description: 'Managed GCC tax compliance, advisory, filings, disputes, and client onboarding, delivering favorable outcomes and fostering relationships.',
      techStack: ['Sept 2025 – Dec 2025'],
      // image: 'img of first comoany.png'
    },
    {
      title: 'Go Finance Company Dubai, UAE Data Validation Project 2025',
      position:' Especial assignments director',
      description: 'Validated 40,000 customer records, coordinated with managers, delivered analytical reports, and produced clean datasets to enable successful campaigns.',
      techStack: ['Aug 2025 – Sept 2025'],
      // image: 'second image mamu.png'
    },
    {
      title: 'TECHNIP FMC Group UAE',
      position:'Finance Lead (Kuwait, Oman,UAE, and Qatar)',
      description: 'Managed tax compliance and annual book closings across UAE, Qatar, and Oman, conducting audits and collaborating with PwC, EY, and BDO for regulatory adherence.',
      techStack: ['Feb 2024 – June 2025'],
      // image: 'technipfmc.png'
    },
    {
      title: 'ERNST AND YOUNG Kuwait',
      position:'Engagement Manager Global Compliance & Reporting (GCR or Tax Services line)',
      description: 'As Engagement Manager at EY, I managed a diverse tax portfolio of 70+ foreign and local clients in Kuwait, leading teams to deliver GCR, ACR, BTAS, Zakat filings, and targeted tax advisory services.',
      techStack: [' 2016 –  2023'],
      // image: 'fine2.png'
    },
     {
      title: 'Moore Stephens → BDO Kuwait',
      position:'Tax Supervisor Global Compliance & Reporting (GCR or Tax Services line)',
      description: 'Led Kuwait tax compliance portfolios at Moore Stephens and BDO Al Nisf & Partners, overseeing multinational clients, financial statements, audits, regulatory reporting, and advisory with cross-functional teams',
      techStack: ['2009 – 2016'],
      // image: 'moore.png'
    },
    {
       title: 'ERNST AND YOUNG Kuwait',
      position:'Auditor/Associate Global Compliance & Reporting Tax and Audit and Assurance',
      description: 'Supported Kuwait tax engagements by delivering GCR, ACR, and BTAS services, collaborating with senior teams on compliance, client relationships, and audit planning through risk assessment and key control testing',
      techStack: ['2003 – 2009'],
      // image: 'fine2.png'
    }
  ];
}
