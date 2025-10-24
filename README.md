
# User Management Dashboard

A modern, responsive dashboard built with React and Vite for managing users. Includes dark mode, role-based access UI, and a clean, scalable codebase ready for real-world use or expansion.

## Approach
This dashboard was designed with scalability, maintainability, and user experience as the main priorities. The application is structured with reusable React functional components, separating logic (hooks, context) and presentation (UI components) for clarity and future extension. The dark mode toggle uses React state/context to apply theming smoothly across the app. Linting and best practices (ESLint, clear folder structure) ensure consistent, high-quality code and make collaboration straightforward.

## Features

- User list view and management actions
- Responsive design for desktop and mobile
- Dark mode toggle for better UX
- Built with React (Hooks), Vite, and modular file structure
- ESLint for code quality and consistency

## Demo

Check out the live demo:  
[user-management-dashboard-two-olive.vercel.app](https://user-management-dashboard-two-olive.vercel.app)


## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm or yarn

### Installation

```bash
git clone https://github.com/kanishkmishra-afk/User-management-dashboard.git
cd User-management-dashboard
npm install
# or yarn install
```

### Running Locally

```bash
npm run dev
# or
yarn dev
```

The app should now be running at [http://localhost:5173](http://localhost:5173).

## Project Structure

- `src/components` – Reusable UI components (Tables, Dialogs, Nav, ThemeToggle, etc.)
- `src/pages` – Main pages/routes (Dashboard, User Forms, etc.)
- `src/context` – Theme context/provider for dark mode

## Technologies Used

- React (with functional components and hooks)
- Vite (fast dev/build tool)
- JavaScript (98%+)
- ESLint
- HTML, Tailwind CSS for layout and styling

## Notable Features

- **Dark Theme Toggle**  
  Switch between light and dark themes instantly across the entire dashboard.

- **Rapid Development with Vite**  
  Enjoy instant hot reloading and fast builds.

- **Extendable**  
  Modular structure—easy to add new features like filter/search.

## Future Improvements

- Connect to a backend API for persistent storage
- Add authentication (JWT/session)
- User role management and access levels
- More filters, sorting, and bulk actions
