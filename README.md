# Yacht Renting Website

A modern, responsive React website for yacht rental services built with TypeScript and styled-components.

## Features

- **Responsive Design**: Optimized for all device sizes
- **Modern Typography**: Uses Inter and GT Walsheim fonts
- **Component-Based Architecture**: Modular and reusable components
- **TypeScript**: Full type safety and better development experience
- **Styled Components**: CSS-in-JS for better styling control

## Project Structure

```
src/
├── components/          # Reusable UI components
│   └── Layout.tsx     # Main layout component
├── pages/             # Page components
│   └── Home.tsx       # Home page component
├── types/             # TypeScript type definitions
│   └── index.ts       # Common types and constants
├── styles/            # Global styles and themes
└── assets/            # Static assets (images, icons, etc.)
```

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

### Development

Start the development server:
```bash
npm start
```

The application will be available at `http://localhost:3000`

### Building for Production

```bash
npm run build
```

## Fonts Used

- **Inter**: Primary font for body text and general content
- **GT Walsheim**: Used for headings and important text elements

## Responsive Breakpoints

- Mobile: 480px and below
- Tablet: 768px and below
- Desktop: 1024px and below
- Large Desktop: 1200px and above

## Available Scripts

- `npm start`: Runs the app in development mode
- `npm run build`: Builds the app for production
- `npm test`: Launches the test runner
- `npm run eject`: Ejects from Create React App (not recommended)

## Technology Stack

- React 19
- TypeScript
- Styled Components
- React Router DOM
- Create React App
