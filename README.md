# TMDB Next.js App

This is a Next.js application that utilizes the TMDB (The Movie Database) API to fetch and display movie information. The application is styled using Tailwind CSS for a modern and responsive design.

## Features

- **Movie Listing**: The main landing page displays a list of movies fetched from the TMDB API.
- **Movie Details**: A dynamic route allows users to view detailed information about a specific movie by clicking on a movie card.
- **Responsive Design**: The application is fully responsive and looks great on all devices.
- **Custom Header and Footer**: The app includes a header for navigation and a footer for additional information.

## Getting Started

To get started with this project, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/dajkagabi/tmdb-nextjs-app.git
   cd tmdb-nextjs-app
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up environment variables**:
   Create a `.env.local` file in the root of the project and add your TMDB API key:
   ```
   NEXT_PUBLIC_TMDB_API_KEY=your_api_key_here
   ```

4. **Run the development server**:
   ```bash
   npm run dev
   ```

5. **Open your browser**:
   Navigate to `http://localhost:3000` to view the application.

## Technologies Used

- **Next.js**: A React framework for server-side rendering and static site generation.
- **Tailwind CSS**: A utility-first CSS framework for styling.
- **TypeScript**: A superset of JavaScript that adds static types.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.
