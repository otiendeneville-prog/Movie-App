# Movie App

A simple movie browsing app built with React Native and Expo Router, made while learning React Native fundamentals.

## Features

- Browse a list of movies with title and rating
- Tap a movie to view its details on a dedicated screen
- File-based navigation using Expo Router, including dynamic routes (`/movies/[id]`)
- Shared data module used across screens

## Tech stack

- React Native
- Expo / Expo Router
- TypeScript

## What I learned building this

- Setting up and structuring an Expo Router project (`app/` directory routing)
- Passing data between screens using dynamic routes and `useLocalSearchParams`
- Managing shared state/data across multiple files
- Debugging real build and navigation errors (broken imports, hook ordering, misplaced logic)

## Getting started

```bash
npm install
npx expo start
```

Press `a` for Android, `i` for iOS, or `w` for web.

## Roadmap

- [ ] Pull real movie data from the TMDB API
- [ ] Add a search bar
- [ ] Add a favorites/watchlist feature with persistence
- [ ] Improve UI styling and add movie posters
