 <h2 align="center">  Lumina Design Agency - Homepage <h2>
<div align="center">
  
  <br><a href="https://lumina-six-nu.vercel.app/" target="_blank">
    <img src="https://img.shields.io/badge/🌐_Visit_Website-2ECC71?style=for-the-badge&logoColor=white" alt="Visit Website Button" />
  </a>

</div>
</br>

A modern, responsive Design Agency Homepage built with Next.js 15, TypeScript, and Tailwind CSS.

## 🚀 Tech Stack

- **Framework**: [Next.js 15 (App Router)](https://nextjs.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Theming**: Custom Theme Provider (React 19 & Next.js 16 compatible)
- **Language**: [TypeScript](https://www.typescriptlang.org/)

## ✨ Features

- **Hero Section**: High-impact intro with animated elements and clear CTA.
- **Services Section**: Showcase of core agency offerings with hover effects.
- **Portfolio Section**: Responsive grid layout for projects with image optimization and hover details.
- **Contact Section**: Professional contact form with validation and success state simulation.
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop screens.
- **Dark Mode**: Toggle between light and dark themes with system preference detection.
- **SEO Optimized**: Metadata implementation for better search engine visibility.

## 🛠️ Getting Started

### Prerequisites

- Node.js 18.17 or later

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📝 Implementation Strategy

This project follows the core principles of the assignment:
- **No Templates**: Built from scratch using a clean Next.js 15 initialization.
- **Simple & Clean**: Focused on high-quality code and minimal, effective styling.
- **Structure over Complexity**: Clear folder organization separating layout, sections, and UI components.
- **Clarity**: Using TypeScript for better type safety and readable code patterns.

## 📁 Project Structure

```
src/
├── app/              # Next.js App Router pages and layout
├── components/
│   ├── layout/       # Layout-related components (Providers)
│   ├── sections/     # Main homepage sections (Hero, Services, etc.)
│   └── ui/           # Reusable UI components (Navbar, Footer, etc.)
├── lib/              # Utility functions and shared logic
└── ...
```

## 📝 Assumptions & Decisions

- **Tailwind v4**: Used the latest version of Tailwind for improved performance and modern CSS features.
- **Framer Motion**: Integrated for smooth, professional animations that enhance the user experience without being distracting.
- **Unsplash Images**: Used high-quality placeholder images from Unsplash to demonstrate the portfolio layout.
- **Form Simulation**: The contact form simulates an API request to show loading and success states.

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
