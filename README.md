# Subnexa 🧰

**Subnexa** is a comprehensive suite of online tools for developers, marketers, and productivity enthusiasts — all accessible in one place, fast, free, and privacy-friendly.

> 🔗 Live Site: [https://subnexa.vercel.app](https://subnexa.vercel.app)

---

## 🚀 Features

- ⚙️ Text Utilities (e.g., word counter, case converter, whitespace remover)
- 🔐 Encoders/Decoders (e.g., Base64, URL, HTML)
- 📊 Formatters (e.g., JSON, XML)
- 🔍 SEO & Web Tools (e.g., IP Lookup, User-Agent Info)
- 🎯 Privacy-focused (No tracking, no login required)
- 🧱 Modular, scalable codebase
- 📱 Responsive UI, fast and lightweight
- 🧠 Built with best coding practices

---

## 📂 Folder Structure

```

src/
├── app/                  # Next.js App Router structure
│   ├── (main)/           # Main pages and UI routes
│   ├── (auth)/           # Authentication-related pages (if any)
│   ├── about/            # About page
│   ├── contact/          # Contact page
│   ├── privacy/          # Privacy policy
│   ├── report-issue/     # Bug report form
│   ├── terms/            # Terms and conditions
│   ├── sitemap/          # Sitemap integration
│   ├── error.tsx         # Custom error page
│   ├── not-found.tsx     # 404 page
│   ├── layout.tsx        # Root layout with metadata
│   └── page.tsx          # Landing page
├── components/           # Reusable UI components
├── constants/            # App constants
├── features/             # Tool-specific logic and pages
├── hooks/                # Custom React hooks
├── lib/                  # Utility functions
├── styles/               # Global and shared styles
├── types/                # TypeScript types

```

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 15 (App Router)](https://nextjs.org)
- **Styling**: [Tailwind CSS](https://tailwindcss.com) + [shadcn/ui](https://ui.shadcn.com)
- **Form**: [react-hook-form](https://react-hook-form.com)
- **SEO**: [next-seo](https://github.com/garmeeh/next-seo), `next-sitemap`, custom metadata
- **Icons**: [Lucide React](https://lucide.dev)
- **Linting & Formatting**: ESLint, Prettier, Husky, lint-staged
- **CI/CD**: GitHub Actions
- **Deployment**: [Vercel](https://vercel.com)

---

## 🧪 Local Development

### Prerequisites

- Node.js 18+
- npm

### Clone the Repository

```bash
git clone https://github.com/IamJayPrakash/subnexa.git
cd subnexa
npm install
```

### Run in Development

```bash
npm run dev
```

### Build for Production

```bash
npm run build
npm run start
```

---

## ✅ Scripts

| Script      | Description                               |
| ----------- | ----------------------------------------- |
| `dev`       | Start development server (with Turbopack) |
| `build`     | Build for production                      |
| `start`     | Start the production server               |
| `lint`      | Run ESLint checks                         |
| `format`    | Run Prettier across files                 |
| `prepare`   | Install Husky hooks                       |
| `typecheck` | TypeScript type checking                  |
| `sitemap`   | Generate sitemap                          |

---

## 🔒 SEO Metadata (sample)

```ts
// src/app/metadata.ts
export const metadata = {
  title: 'Subnexa — All-in-One Online Tool Suite for Developers & Marketers',
  description: 'Subnexa is your go-to toolbox offering text utilities, converters, encoders, and more — all in one place.',
  ...
};
```

---

## 📦 GitHub Workflow Setup

```bash
.github/
├── ISSUE_TEMPLATE/
│   ├── bug_report.md
│   └── feature_request.md
├── workflows/
│   ├── ci.yml
│   └── lint.yml
├── PULL_REQUEST_TEMPLATE.md
├── SECURITY.md
└── SUPPORT.md
```

---

## 👥 Contributing

We welcome contributions!

1. Fork the repository
2. Create a new branch (`git checkout -b feature/your-feature`)
3. Commit your changes
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a Pull Request
![Alt](https://repobeats.axiom.co/api/embed/9e145c912d16ecfbb90d478fd72ecb49f38383c0.svg "Repobeats analytics image")
Please follow the [CODE_OF_CONDUCT.md](./CODE_OF_CONDUCT.md) and [CONTRIBUTING.md](./CONTRIBUTING.md) guidelines.

---

## 📄 License

This project is licensed under the [MIT License](./LICENSE).

---

## 🙋‍♂️ Author

Developed by [Jay Prakash](https://heyjayprakash.netlify.app)

---

## 📷 Social Preview

![Subnexa Open Graph Image](https://subnexa.vercel.app/og-image.png)

```

```
