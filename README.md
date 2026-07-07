# The React Quiz

An interactive quiz app that tests your React knowledge across 15 questions, with a countdown timer, live score tracking, and highscore persistence.

## Screenshots

| Start Screen                                    | Question                                     |
| ----------------------------------------------- | -------------------------------------------- |
| ![Start Screen](./screenshots/start-screen.png) | ![Question](./screenshots/quiz-question.png) |

| Answered                                     | Finish Screen                                     |
| -------------------------------------------- | ------------------------------------------------- |
| ![Answered](./screenshots/quiz-answered.png) | ![Finish Screen](./screenshots/finish-screen.png) |

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
