# React Counter App - Props and State Lab

A cyberpunk-themed counter application built with React that demonstrates the fundamental concepts of props, state, and lifting state in React applications.

<img width="430" alt="image" src="https://github.com/user-attachments/assets/8ee8b2e7-97cb-40b7-aeda-4030ff832214" />

## Overview

This project was created as part of the ACS 3330 course to explore and implement key React concepts:
- Props passing between components
- State management
- Lifting state up to parent components
- Immutable state updates
- Component reusability

## Features

### Basic Requirements ✅
- Counter component with label and value display
- Increment (+) and decrement (-) buttons
- Components receive data and callbacks via props
- State management in parent component
- Proper state lifting implementation

### Stretch Challenges ✅
- **Total Count Display**: Shows sum of all counter values at the top
- **Reset Button**: Resets all counters to zero
- **Counter Range Limits**: Values limited between 0-10
- **Dynamic Counter Management**:
  - Add new counters with the "Add Counter" button
  - Remove specific counters with individual "Remove" buttons

### UI Design
- Neon cyberpunk theme with animated components
- Responsive design
- Distinct visual styling for different actions
- Grid background with CRT scan line effect

## Project Structure

```
props-and-state/
├── src/
│   ├── App.jsx           # Main component with state logic
│   ├── Counter.jsx       # Presentational component
│   ├── App.css           # Styling
│   └── main.jsx          # Entry point
├── public/
│   └── vite.svg          # Favicon
├── package.json          # Dependencies
└── README.md             # Documentation
```

## Implementation Details

### State Management
The application demonstrates the concept of "lifting state up" by:
- Maintaining counter values in the parent `App` component
- Passing values down to child components as props
- Updating state through callback functions passed as props
- Using immutable state update patterns (spread operator)

### Component Communication
- Child components receive data through props
- Child components trigger state changes by invoking callback functions
- Parent component manages shared state

## Technologies Used

- React 19
- Vite build tool
- CSS animations

## Running the Project

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```
3. Start the development server:
   ```
   npm run dev
   ```
4. Open http://localhost:5173 in your browser

## Learning Objectives Achieved

- [x] Understood the difference between Props and State
- [x] Implemented proper state management
- [x] Used Props to pass data to components
- [x] Applied state lifting to manage shared state
- [x] Practiced immutability in React
- [x] Created reusable components
- [x] Implemented conditional rendering
