import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="dashboard-wrapper">
      <div class="dashboard-card">
        <h2>Dashboard</h2>
        <p>Welcome!</p>
        <div class="stat-box">
          <p>👥 Toplam Kullanıcı</p>
          <p>1.248</p>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {}
