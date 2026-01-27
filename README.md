# Staffing Website Template

A modern, responsive staffing and workforce solutions website template built with React and Tailwind CSS.

## Features

- 🎨 Modern, clean design inspired by professional staffing websites
- 📱 Fully responsive (mobile-first approach)
- ⚡ Built with Vite for fast development
- 🎭 Tailwind CSS for utility-first styling
- 🧩 Modular component architecture
- ♿ Accessible and semantic HTML
- 🎯 Placeholder content ready for customization

## Project Structure

```
src/
├── components/
│   ├── layout/
│   │   ├── Header.jsx          # Navigation header
│   │   └── Footer.jsx          # Footer with links
│   ├── sections/
│   │   ├── Hero.jsx            # Hero section
│   │   ├── Services.jsx        # Services overview
│   │   ├── WhyChooseUs.jsx     # Benefits/advantages
│   │   ├── Stats.jsx           # Metrics/statistics
│   │   ├── Projects.jsx        # Case studies/projects
│   │   ├── Testimonials.jsx    # Client testimonials
│   │   └── Blog.jsx            # Latest articles
│   └── ui/
│       ├── Button.jsx          # Reusable button
│       └── Card.jsx            # Reusable card
├── data/
│   └── content.js              # Placeholder content
├── App.jsx                     # Main app component
├── main.jsx                    # Entry point
└── index.css                   # Global styles
```

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm preview
```

## Customization

All placeholder content is centralized in `src/data/content.js`. Update this file to customize:

- Company name and contact information
- Service offerings
- Team members
- Testimonials
- Statistics
- Blog posts

## Code Quality

### Linting

```bash
npm run lint
```

### Formatting

```bash
npm run format
```

## Technologies

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **React Icons** - Icon library
- **ESLint** - Code linting
- **Prettier** - Code formatting

## License

This is a template project - use it freely for your projects.
