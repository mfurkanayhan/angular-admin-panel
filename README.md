# 🌤️ Admin Panel with Angular Standalone + Material UI

This project is a responsive Admin Panel built with Angular Standalone architecture and Angular Material. It includes:
- A modern login screen with a blurred background.
- A responsive layout with a collapsible sidebar.
- Dynamic Dashboard and Users pages.
- Mobile-first design principles.

---

## ✨ Features

- ✅ Modern glassmorphism UI
- ✅ Responsive layout with automatic sidebar toggle on mobile
- ✅ Standalone Angular components
- ✅ Lazy loaded routes
- ✅ Material components used modularly
- ✅ Live user data fetched via HTTP

---

## 🖥️ Web View

### 🔐 Login Page
![web-login](src/assets/screenshots/web-login.png)

### 📊 Dashboard Page
![web-dashboard](src/assets/screenshots/web-dashboard.png)

### 👥 Users Page (Before Fetching)
![web-users-before](src/assets/screenshots/web-users-before.png)

### 👥 Users Page (After Fetching)
![web-users-after](src/assets/screenshots/web-users-after.png)

---

## 📱 Mobile View

### 🔐 Login Page (Mobile)
![mobile-login](src/assets/screenshots/mobile-login.png)

### 📊 Dashboard Page (Mobile)
![mobile-dashboard](src/assets/screenshots/mobile-dashboard.png)

### 👥 Users Page (Before Fetching - Mobile)
![mobile-users-before](src/assets/screenshots/mobile-users-before.png)

### 👥 Users Page (After Fetching - Mobile)
![mobile-users-after](src/assets/screenshots/mobile-users-after.png)

---

## 🔧 Technologies Used

- Angular 17 Standalone Architecture
- Angular Material UI
- TypeScript
- RxJS
- Responsive Design via CSS Flexbox
- BreakpointObserver for adaptive layout

---

## 📝 Notes

- Users are fetched from: `https://jsonplaceholder.typicode.com/users`
- `HttpClient` is imported and used in a fully standalone manner.
- Sidebar automatically closes on navigation when on mobile screen sizes.
- "Uses Angular Material components (toolbar, sidenav, buttons, cards etc.), but with fully customized CSS for modern glassmorphism design."

---

## 🚀 Getting Started

```bash
git clone https://github.com/mfurkanayhan/angular-admin-panel.git
cd admin-panel
npm install
ng serve
