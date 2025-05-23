import { Component, ViewChild } from '@angular/core';
import { Router, RouterOutlet, RouterLink, NavigationEnd } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule, MatSidenav } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { AuthService } from '../services/auth.service';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-layout',
  standalone: true,
  
  imports: [
    RouterLink,
    RouterOutlet,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatButtonModule
  ],
  template: `
    <mat-toolbar>
      <div class="left">
        <button mat-icon-button (click)="toggleSidenav()">
          <mat-icon>menu</mat-icon>
        </button>
        <span>Admin Panel</span>
      </div>

      <div class="right">
        <button mat-raised-button (click)="logout()">Logout</button>
      </div>
    </mat-toolbar>

    <mat-sidenav-container class="container">
      <!-- Sidebar -->
      <mat-sidenav #sidenav mode="side" [opened]="isOpen">
        <mat-nav-list>
          <a mat-list-item routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
          <a mat-list-item routerLink="/users" routerLinkActive="active">Users</a>
        </mat-nav-list>
      </mat-sidenav>

      <!-- Content -->
      <mat-sidenav-content>
        <div class="content">
          <router-outlet></router-outlet>
        </div>
      </mat-sidenav-content>
    </mat-sidenav-container>
`
  ,
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  @ViewChild('sidenav') sidenav!: MatSidenav;

  isOpen = true;
  isHandset: boolean = false;
  
  constructor(
    private router: Router,
    private authService: AuthService,
    private breakpointObserver: BreakpointObserver  
  ) {
    this.breakpointObserver.observe(Breakpoints.Handset)
      .subscribe(result => {
        this.isHandset = result.matches;
        this.isOpen = !this.isHandset;
      });

    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      if (this.isHandset && this.sidenav?.opened) {
        this.sidenav.close();
        this.isOpen = false;
      }
    });
  }

  toggleSidenav() {
    this.isOpen = !this.isOpen;
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/']);
  }
}