# SkillPath

> An AI-powered learning roadmap and progress tracker. Set a goal, get a personalized weekly plan, and track your progress every day.

![Status](https://img.shields.io/badge/status-in%20development-orange)
![Next.js](https://img.shields.io/badge/Next.js-App%20Router-black)
![TypeScript](https://img.shields.io/badge/TypeScript-strict-blue)
![License](https://img.shields.io/badge/license-MIT-green)

**Live demo:** _coming soon_

---

## The Problem

Self-taught learners often know *what* they want to learn but not *how to plan it*. Tutorials are endless, schedules are vague, and motivation fades without visible progress.

**SkillPath** turns a simple goal such as _"Learn React in 3 months, 2 hours a day"_ into a structured weekly roadmap with daily tasks, then keeps the learner on track with streaks and progress charts.

## Features

Planned features, built step by step:

- [ ] Authentication with role-based access (user / admin)
- [ ] Goal management (create, read, update, delete)
- [ ] AI-generated weekly roadmap and daily task list
- [ ] Daily task tracking with streaks
- [ ] Progress dashboard with charts
- [ ] Admin panel (user statistics, popular goals)
- [ ] Public shareable profile
- [ ] Dark mode
- [ ] Responsive and accessible UI

## Tech Stack

| Area | Technology |
|---|---|
| Framework | Next.js (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Database | MongoDB Atlas with Mongoose |
| Authentication | Auth.js |
| Forms and validation | React Hook Form and Zod |
| AI | LLM API (called from the server only) |
| Testing | Vitest and React Testing Library |
| Deployment | Vercel |

## Getting Started

### Prerequisites

- Node.js 20 or later
- npm
- A MongoDB Atlas connection string (needed from the database stage onward)

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/ratulrh04/skillpath.git
cd skillpath

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Environment Variables

Create a `.env.local` file in the project root (it is git-ignored):

```env
MONGODB_URI=your_mongodb_connection_string
AUTH_SECRET=your_auth_secret
AI_API_KEY=your_ai_api_key
```

> Secret keys are never exposed to the browser. All database and AI calls run on the server.

## Project Structure

```
src/
├── app/            Pages, layouts and API routes (App Router)
├── components/     Reusable UI components
├── lib/            Helpers (database connection, utilities)
├── models/         Mongoose models
├── types/          Shared TypeScript types
└── data/           Mock data used during early development
```

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the development server |
| `npm run build` | Create a production build |
| `npm run start` | Run the production build |
| `npm run lint` | Run ESLint |

## Roadmap

1. Project setup, layout and routing
2. UI with mock data (dashboard, goal list)
3. MongoDB connection and data models
4. Goal CRUD (Route Handlers and Server Actions)
5. Authentication, roles and middleware
6. AI roadmap generation
7. Charts, streaks and admin page
8. Error and loading states, validation, accessibility
9. Automated tests
10. Deployment and documentation

## Author

**Ratul Raha**
Computer Science student at Northern University Business and Technology Khulna, learning to become a full-stack developer.

- GitHub Link : [https://github.com/ratulrh04]
- AI-powered learning roadmap and progress tracker project link : [https://github.com/ratulrh04/skillpath]

## License

This project is licensed under the MIT License.
