# CollabStudy Hub

A full-stack web application designed to help users collaborate and study together. It features real-time communication, secure user authentication, and cloud-based file storage, making it easy to sync study materials and sessions.

## Features
- **Real-Time Collaboration**: Chat or sync study sessions using WebSockets.
- **User Authentication**: Secure login/signup with JWT and password hashing.
- **File Uploads**: Upload study materials to AWS S3 with pre-signed URLs.
- **Responsive UI**: Built with Chakra UI for a modern, accessible design.
- **MongoDB Storage**: Persistent data storage for users and resources.
- **Personalized Group Recommendation**: Let users enter subjects or topics to get personalized group recommendations.

## Tech Stack
### Backend
- **Node.js & Express**: Server-side framework.
- **MongoDB (Mongoose)**: Database for storing user data and resources.
- **AWS S3**: Cloud storage for files.
- **Socket.io**: Real-time communication.
- **Dependencies**: See [Backend/package.json](Backend/package.json).

### Frontend
- **React**: Frontend library with Vite for fast builds.
- **Chakra UI**: Styling and component library.
- **React Router**: Client-side routing.
- **Socket.io-client**: Real-time updates.
- **Dependencies**: See [Frontend/package.json](Frontend/package.json).
