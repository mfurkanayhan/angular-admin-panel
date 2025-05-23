import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatCardModule],
  template: `
    <div class="users-wrapper" [class.filled]="users.length > 0">
      <mat-card class="main-user-card">
        <mat-card-title class="title">Users</mat-card-title>
        <mat-card-content class="content">
          <button mat-raised-button (click)="getUsers()">Get Users</button>
          <p class="empty-text" *ngIf="users.length === 0">No users yet. Click the button above.</p>
        </mat-card-content>
      </mat-card>

      <div *ngIf="users.length > 0" class="user-card-list">
        <mat-card *ngFor="let user of users" class="user-sub-card">
          <mat-card-title>{{ user.name }}</mat-card-title>
          <mat-card-content>
            <p><strong>Username:</strong> {{ user.username }}</p>
            <p><strong>Email:</strong> {{ user.email }}</p>
            <p><strong>City:</strong> {{ user.address?.city }}</p>
          </mat-card-content>
        </mat-card>
      </div>
    </div>
  `,
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  users: any[] = [];

  constructor(private http: HttpClient) {}
  
  getUsers() {
    this.http.get<any[]>('https://jsonplaceholder.typicode.com/users')
      .subscribe((res) => {
        this.users = res;
        console.log('Users:', this.users);
    });
  }
}
