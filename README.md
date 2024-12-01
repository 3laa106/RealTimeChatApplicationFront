# Real-Time Chat Application (Frontend)

![Build Status](https://img.shields.io/badge/build-passing-brightgreen)
![License](https://img.shields.io/badge/license-MIT-blue)

A **React-based frontend** for a real-time chat application. This project enables users to engage in public and private chat rooms, send direct messages, receive notifications, and manage their profiles, all with real-time updates.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Installation](#installation)
- [Usage](#usage)
- [Backend Repository](#backend-repository)
- [Contributing](#contributing)
- [License](#license)

## Features

- Public and private chat rooms
- Direct messaging
- User profile management
- Group chat creation
- Dark mode
- Email verification and password reset
- Responsive design for all devices

## Technologies Used

- **React**: UI components
- **Redux Toolkit**: State management
- **Firebase**: Authentication
- **Tailwind CSS & DaisyUI**: Styling and UI components
- **Socket.io-client**: Real-time communication

## Getting Started

### Prerequisites

Make sure you have the following installed:

- **React**: This project is built with React, so you will need a browser that supports it.
- **npm** (Node package manager): Comes with Node.js; it is required for managing project dependencies.
- **Git**: For version control and managing repositories.
- **Firebase Account**: Required for authentication and real-time database services.

## Installation

1. **Clone the frontend repository**:
   ```bash
   git clone https://github.com/mostafa2113/reactjs-chat.io.git
   ```
2. **Navigate to the project directory**:

   ```bash
   cd reactjs-chat.io
   ```

3. **Install dependencies**:
   ```bash
   npm install
   ```
4. **Set up environment variables**: Create a `.env` file in the root directory and configure the following:

```makefile
FIREBASE_API_KEY=your_firebase_api_key
FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
FIREBASE_PROJECT_ID=your_firebase_project_id
FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
FIREBASE_APP_ID=your_firebase_app_id
```

## Usage

1. **Run the frontend:**:
   ```bash
   npm run dev
   ```
2. **The application will start on http://localhost:5173**

## Backend Repository

To fully run the application, you need to set up the backend. You can find the backend repository and instructions [here](https://github.com/3laa106/RealTimeChatApplication).

## Contributing

1. **Fork the repo**:

2. **Create a new branch for your feature**:

   ```bash
   git checkout -b feature/YourFeatureName
   ```

3. **Make your changes and commit them**:
   ```bash
   git add .
   git commit -m "Add your message here"
   ```
4. **Push to your forked repository**:
   ```bash
   git push origin feature/YourFeatureName
   ```
5. **Create a pull request**

## License

This project is licensed under the **MIT** License. See the [LICENSE](https://opensource.org/license/mit) file for details.
