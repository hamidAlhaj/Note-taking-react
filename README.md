# Note Taking App

A simple and responsive **Note Taking Application** built with **React, TypeScript, and Vite**.
The application allows users to create, edit, and delete notes, with automatic data persistence using the browser's `localStorage`. It also includes dark/light mode support and a responsive interface.

## ✨ Features

- 📝 Create new notes
- ✏️ Edit existing notes
- 🗑️ Delete notes
- 💾 Automatically save notes using `localStorage`
- 🌙 Dark mode
- ☀️ Light mode
- 📱 Responsive design
- ⚡ Fast development with Vite
- 🔒 Type-safe development with TypeScript

## Technologies

- **React 18**
- **TypeScript**
- **Vite**
- **CSS**
- **localStorage**

## 📂 Project Structure

```text
note-taking-react/
│
├── public/
│
├── src/
│   ├── assets/
│   │
│   ├── components/
│   │   ├── Alert/
│   │   ├── Notes/
│   │   └── Message.tsx
│   │
│   ├── App.tsx
│   ├── App.css
│   ├── index.css
│   ├── logo.png
│   ├── main.tsx
│   ├── Preview.tsx
│   ├── registerServiceWorker.tsx
│   ├── types.ts
│   ├── training.tsx
│   └── vite-env.d.ts
│
├── index.html
├── package.json
├── package-lock.json
├── eslint.config.js
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
├── vite.config.ts
└── README.md
```

> `node_modules/` is intentionally not included in the repository because it is generated automatically by `npm install`.

## 🚀 Getting Started

### Prerequisites

Make sure you have **Node.js** and **npm** installed on your computer.

### 1. Clone the repository

```bash
git clone <your-repository-url>
cd note-taking-react
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm run dev
```

Vite will start the application on a local development server.

Open the URL shown in the terminal, usually:

```text
http://localhost:5173
```

### 4. Build for production

```bash
npm run build
```

## 💾 Data Persistence

The application uses the browser's **`localStorage` API** to store notes.

This allows notes to remain available after:

- Refreshing the page
- Closing and reopening the browser
- Restarting the development server

The data will be removed if the browser's local storage is manually cleared.

## 🎨 Theme

The application supports two visual modes:

- ☀️ Light Mode
- 🌙 Dark Mode

Users can switch between the two modes directly from the application.

## 📱 Responsive Design

The interface is designed to work across different screen sizes, including:

- Desktop
- Tablet
- Mobile

## 📚 What I Practiced

This project was built to practice and strengthen my understanding of:

- React components
- TypeScript
- React state management
- Props
- Event handling
- Form inputs
- Conditional rendering
- `localStorage`
- CSS styling
- Responsive design
- Dark/light themes
- Vite development workflow

## Future Improvements

Possible future improvements include:

- 🔍 Search and filter notes
- 🏷️ Categories and tags
- 📌 Pin important notes
- 📅 Note timestamps
- 🔐 User authentication
- ☁️ Backend/database synchronization
- 📤 Export notes
- 📱 Progressive Web App improvements

## 📄 License

This project was created for **learning and educational purposes**.
