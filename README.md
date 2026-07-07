# The React Quiz

An interactive quiz app that tests your React knowledge across 15 questions, with a countdown timer, live score tracking, and highscore persistence.

## Screenshots


### Start Screen

<img width="786" height="548" alt="Screenshot From 2026-07-07 07-50-53" src="https://github.com/user-attachments/assets/431cb4af-a3b0-44c6-8dbf-b90299bdc239" />

### Question

<img width="775" height="654" alt="Screenshot From 2026-07-07 07-51-07" src="https://github.com/user-attachments/assets/831438d3-e70a-4343-8152-ae262805c7d6" />

### Answered  

<img width="775" height="654" alt="Screenshot From 2026-07-07 07-51-22" src="https://github.com/user-attachments/assets/3aa29378-8f6b-4393-a12f-7b5976629ba3" />

### Finish Screen                                     

<img width="751" height="564" alt="Screenshot From 2026-07-07 07-52-33" src="https://github.com/user-attachments/assets/0ccca38f-52ab-4108-a05a-2a1cb83c20d5" />


## Features

- 15 React-focused questions loaded from a local JSON API
- 30-second countdown timer per question
- Live progress bar and points tracker
- Color-coded answer feedback (correct / incorrect)
- Highscore persisted across quiz restarts within the session
- Graceful loading and error states

## Tech Stack

| Layer            | Technology                                             |
| ---------------- | ------------------------------------------------------ |
| UI Library       | [React 19](https://react.dev/)                         |
| State Management | `useReducer` (built-in React hook)                     |
| Data Fetching    | `fetch` API against a local REST endpoint              |
| Mock API         | [json-server](https://github.com/typicode/json-server) |
| Bootstrapping    | [Create React App](https://create-react-app.dev/)      |
| Testing          | React Testing Library + Jest                           |

## Project Structure

```
src/
└── Components/
    ├── App.js          # Root component; reducer + state logic
    ├── Header.js       # App title / logo
    ├── StartScreen.js  # Welcome screen
    ├── Question.js     # Renders the current question
    ├── Options.js      # Answer option buttons
    ├── Progress.js     # Progress bar + score display
    ├── Timer.js        # Countdown timer
    ├── NextButton.js   # Advance to next question
    ├── FinishScreen.js # Results + highscore display
    ├── Footer.js       # Bottom bar wrapper
    ├── Loader.js       # Loading state
    └── Error.js        # Error state
data/
└── questions.json      # Quiz questions served by json-server
```

## Getting Started

### Prerequisites

- Node.js ≥ 18

### Installation

```bash
git clone <repo-url>
cd react-quiz
npm install
```

### Running the App

The app requires both the JSON server (mock API) and the React dev server to be running simultaneously. Open two terminals:

**Terminal 1 — start the mock API:**

```bash
npm run server
# Starts json-server on http://localhost:9000
```

**Terminal 2 — start the React app:**

```bash
npm start
# Opens http://localhost:3000
```

### Other Scripts

| Script          | Description                                |
| --------------- | ------------------------------------------ |
| `npm test`      | Run tests in interactive watch mode        |
| `npm run build` | Build optimised production bundle          |
| `npm run eject` | Eject from Create React App (irreversible) |

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
