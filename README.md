# Hamza Bargaz - Personal Portfolio

A modern, responsive personal portfolio website built with Next.js 15, featuring a blog, dark/light theme support, and interactive components.

## ✨ Features

- **Modern Design**: Clean, responsive design with smooth animations
- **Dark/Light Theme**: Toggle between dark and light themes
- **Blog Section**: MDX-powered blog with syntax highlighting
- **Interactive Components**: Animated cards, theme switcher, and smooth transitions
- **SEO Optimized**: Structured data, meta tags, and social media cards
- **Performance**: Optimized images, fonts, and loading states
- **Mobile Responsive**: Fully responsive design for all devices

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Content**: MDX for blog posts
- **Animations**: Framer Motion
- **Theme**: next-themes for dark/light mode
- **Icons**: Lucide React
- **Deployment**: Vercel

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- pnpm (recommended) or npm

### Installation

1. Clone the repository:

```bash
git clone https://github.com/hamzabargaz/portfolio.git
cd portfolio
```

2. Install dependencies:

```bash
pnpm install
# or
npm install
```

3. Run the development server:

```bash
pnpm dev
# or
npm run dev
```

4. Open [http://localhost:3020](http://localhost:3020) in your browser.

## 📁 Project Structure

```
portfolio/
├── content/                 # Blog posts and author data
│   ├── author.json         # Author information
│   └── posts/             # MDX blog posts
├── src/
│   ├── app/               # Next.js app router pages
│   ├── components/        # Reusable UI components
│   ├── lib/              # Utility functions and data fetching
│   ├── hooks/            # Custom React hooks
│   ├── assets/           # Icons, images, and styles
│   └── typings/          # TypeScript type definitions
├── public/               # Static assets
└── tailwind.config.js    # Tailwind CSS configuration
```

## 🎨 Customization

### Adding Blog Posts

Create new MDX files in `content/posts/` with the following frontmatter:

```mdx
---
title: "Your Post Title"
date: "2024-01-01"
description: "Post description"
tags: ["nextjs", "react"]
---

Your content here...
```

### Updating Author Information

Edit `content/author.json` to update your personal information, social links, and SEO metadata.

### Styling

The project uses Tailwind CSS for styling. Custom styles can be added in `src/assets/styles/globals.css`.

## 📝 Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint

## 🌐 Deployment

The easiest way to deploy is using [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Import your repository to Vercel
3. Deploy with zero configuration

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Connect

- **Website**: [bargaz.me](https://bargaz.me)
- **LinkedIn**: [hamzabargaz](https://www.linkedin.com/in/hamzabargaz/)
- **GitHub**: [hamzabargaz](https://github.com/hamzabargaz/)
- **Twitter**: [hamzabargaz](https://x.com/hamzabargaz)
- **Instagram**: [hamza.bargaz](https://instagram.com/hamza.bargaz)

---

Built with ❤️ by Hamza Bargaz
