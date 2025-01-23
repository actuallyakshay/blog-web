# Frontend for Blog Application

This is a [Angular](https://angular.io) project designed to provide a responsive user interface for a blog platform. The application integrates Google login for user authentication and interacts with a NestJS backend for managing posts.

## Getting Started

First, install dependencies:

```bash
yarn
```

Then, run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the app by modifying `src/app/`. The application supports live reloading, so changes will be reflected automatically in the browser.

## Features

- **Login with Google**: Secure user authentication using `react-oauth/google`.
- **Dashboard**: View all posts created by the logged-in user.
- **Create Post**: Allows users to add new posts.
- **Post Details**: View details of any post. Accessible to all users.

## API Routes

The app integrates with the following backend endpoints:

- **POST /login**: Authenticate users via Google/Facebook and retrieve a JWT.
- **GET /posts**: Fetch the list of posts.
- **POST /posts/create**: Create a new post.
- **GET /posts/\*\***:id\*\*: Fetch details of a specific post.

The production-ready files will be in the `dist/` directory.

## Feedback

For feedback or support, please contact [[akshay.rajput1197@gamil.com](mailto:akshay.rajput1197@gamil.comØ)].

## License

This project is licensed under the MIT License.
