# 🎬 CineMatch

CineMatch is a **React + Vite + TypeScript** pet project designed to help users discover and choose movies and TV shows.  
The app fetches data from [TMDB API](https://developer.themoviedb.org/) and allows users to search for titles, view details, and manage their personal watchlist.  
In the future, CineMatch will evolve into an MVP with voting features, authentication, and monetization options.

---

## 🚀 Tech Stack

- [React 18](https://react.dev/) + [Vite](https://vitejs.dev/) + [TypeScript](https://www.typescriptlang.org/)
- State management: React Hooks (`useState`, `useEffect`, `useMemo`)
- Linting & formatting: ESLint + Prettier
- Git hooks & commits: Husky + Commitlint (Conventional Commits)
- API: [TMDB](https://developer.themoviedb.org/reference/intro/getting-started)

---

## ⚙️ Installation & Setup

```bash
# 1. Clone the repository
git clone git@github.com:Shutenchik/cinematch.git
cd cinematch

# 2. Install dependencies
pnpm install

# 3. Run the development server
pnpm dev

```

By default, the project will be available at [http://localhost:5173](http://localhost:5173).

---

## 📂 Project Structure

```
cinematch/
├── src/
│   ├── components/   # Reusable UI components
│   ├── pages/        # App pages (Home, Discover, Watchlist)
│   ├── hooks/        # Custom React hooks
│   ├── api/          # TMDB API integration
│   └── App.tsx       # Root component
├── public/           # Static assets
├── package.json
├── tsconfig.json
└── vite.config.ts
```

---

## 🔮 Roadmap

- [ ] Basic movie search with TMDB API
- [ ] Movie details page (poster, description, rating, trailers)
- [ ] Watchlist (add/remove movies, mark as watched)
- [ ] Authentication (Email + Google OAuth)
- [ ] Voting system for group movie nights
- [ ] Stripe integration for premium features ("Party Pass")
