Develop a RESTful API for a simple Library Management System using Express.js and MongoDB. The API should support user authentication and authorization, allowing only authorized users to manage books and user data.

MongoDB Models
- User: Stores user information (username, password, role).
- Book: Stores book information (title, author, genre, availability).

Session Management and Cookies:
- Use express-session to manage user sessions.
- Use MongoDB as the session store

Authentication:
- Implement user registration and login functionality.
- Use bcrypt to hash passwords before storing them in the database.
- Use session for authentication and protecting routes.

Authorization:
- Implement role-based access control (e.g., admin, user).
- Admins can manage books and view all user data.
- Regular users can only view available books and manage their own profiles.

Routes:
    User Routes:
    - POST /register: Register a new user.
    - POST /login: Log in a user and create a session.
    - POST /logout: Log out the current user and destroy the session.
    - GET /profile: Get the current user's profile (protected route).

    Book Routes:
    - GET /books: Retrieve a list of all books (available to all authenticated users).
    - POST /books: Add a new book (admin only).
    - PUT /books/:id: Update a book's details (admin only).
    - DELETE /books/:id: Delete a book (admin only).

Create middleware functions for:
- Logging request details.
- Checking user authentication status.
- Checking user authorization based on roles.
