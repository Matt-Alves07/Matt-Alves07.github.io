# 🚀 Matheus Alves | Senior Software Engineer Portfolio

Welcome to the repository of my definitive professional presentation card! 
This project is a modern, responsive, and highly interactive **React Web Application** functioning as my master portfolio, built entirely from scratch with an emphasis on premium UI/UX, scalable architecture, and comprehensive CI/CD deployment pipelines.

You can visit the live application here: [**Matt-Alves07.github.io**](https://Matt-Alves07.github.io)

---

## ✨ Features & Architecture

- **Premium Glassmorphism Aesthetics:** The entire interface leans heavily on modern design principles, utilizing layered blur (`backdrop-filter`), organic "Vintage Green" glowing accents, and high-fidelity custom CSS.
- **Fluid Layout Animations:** Instead of static lists and basic modals, the application leverages **Framer Motion** (`layoutId` properties) to create map-mental/drill-down inline zoom expansions spanning seamlessly across page transitions.
- **Component Scalability:** Every section of the site (Experience Timeline, Tech Stack Hub, Open-Source Projects Gallery) is strictly componentized using modern React best practices.
- **Automated Validation (TDD):** The UI behavior—such as conditional rendering based on page contexts—is safeguarded by automated rendering tests powered by **Vitest** and **React Testing Library**.
- **Native Cloud CI/CD:** Continuous delivery natively integrated with official GitHub Actions `page-deploy` plugins. Every push strictly requires successfully passing UI assertion tests before building the static Vite output and releasing it to the live domain.

---

## 🛠️ Technological Stack

### 🔹 Core Development
- **React (+ Vite):** A blazing-fast development server resulting in a heavily optimized static production build.
- **Framer Motion:** Used to orchestrate complex stagger animations and interactive component morphing.
- **React Router DOM:** Client-side architecture managing fast, reload-less routing between Hubs.
- **Vanilla CSS3:** Absolute granular control over complex gradients, media queries, and layout structures without being constrained by utility frameworks.
- **Devicon CDN:** High-quality scalable vector SVG asset injection.

### 🔹 Quality & DevOps
- **Testing:** `Vitest` paired natively with `@testing-library/react` and `@testing-library/jest-dom` for robust environment simulation that outspeeds standard legacy Jest workflows.
- **Pipeline Automation:** Automated GitHub Action workflows testing code in CI mode (`npm test -- --run`) before pushing `/dist` artifacts using GitHub Pages API tokens.

---

## 💻 Running Locally

To set up this environment on your machine:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Matt-Alves07/Matt-Alves07.github.io.git
   ```
2. **Navigate into the directory:**
   ```bash
   cd Matt-Alves07.github.io
   ```
3. **Install standard dependencies:**
   ```bash
   npm install
   ```
4. **Fire up the testing suite:**
   Ensure everything matches expectations and no layout behaviors are broken:
   ```bash
   npm test
   ```
5. **Start the Vite Dev Server:**
   ```bash
   npm run dev
   ```
   > By default, the app will run gracefully on `http://localhost:5173`.

---

## 🤝 Contact & Open Source

This repository serves both as my resume and an open-source technical display. 
Feel free to open an issue or fork the repository if you intend to experiment with the animations or structure.

- 🔗 **LinkedIn:** [Matheus Alves](https://www.linkedin.com/in/matheusalves07/)
- 💻 **GitHub:** [@Matt-Alves07](https://github.com/Matt-Alves07)
