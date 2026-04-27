<img width="99" height="101" alt="Logo" src="https://github.com/user-attachments/assets/89744021-efba-4cfc-bd96-e828fd5e80e9" />

# Flutly Store – CMS

**Sanity Content Management System** backend for the [Flutly Store](https://github.com/GabrielPeresBernes/flutly-store) mobile application.

This studio provides a headless CMS for managing dynamic content including products, home page content, and other e-commerce data consumed by the Flutter mobile app.

## 📑 Table of Contents

- [Overview](#-overview)
- [Tech Stack](#-tech-stack)
- [Content Types](#-content-types)
- [Getting Started](#-getting-started)
- [Development](#-development)
- [Deployment](#-deployment)
- [Integration](#-integration)
- [Author](#-author)

## ✨ Overview

Flutly Store CMS is built on **Sanity**, a modern headless CMS that provides:

- **Real-time content editing** with instant preview
- **Structured content** through TypeScript-first schema
- **API-first approach** for seamless mobile app integration
- **Content versioning & publishing workflows**
- **Visual content explorer** via the Vision plugin

## 🛠 Tech Stack

- **Headless CMS:** Sanity v5
- **Runtime:** Node.js
- **UI Framework:** React 19
- **Language:** TypeScript
- **Real-time:** Sanity's real-time API
- **Documentation:** Vision plugin for GROQ queries

## 📝 Content Types

The studio manages the following content types:

### 🏠 Home
Central page content for the app's home screen, including featured products, banners, and promotional sections.

### 📦 Product
Complete product catalog with:
- Title, description, and pricing
- Images and media
- Inventory management
- Category and tags organization

## 🚀 Getting Started

### Prerequisites

- Node.js `v18` or higher
- npm or yarn
- Git

### Installation

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd studio-flutly-store
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure environment** (if needed):
   Update `sanity.config.ts` with your Sanity project credentials.

## 💻 Development

### Start the development server

```bash
npm run dev
```

The studio will open at `http://localhost:3333` by default.

### Available Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm start` | Start production server |
| `npm run build` | Build for production |
| `npm run deploy` | Deploy studio to Sanity cloud |
| `npm run deploy-graphql` | Deploy GraphQL API |

## 📦 Project Structure

```
studio-flutly-store/
├── schemaTypes/
│   ├── home.tsx          # Home page content type
│   ├── product.ts        # Product catalog type
│   └── index.ts
├── plugins/
│   └── structure.ts      # Custom studio structure
├── sanity.config.ts      # Sanity configuration
├── sanity.cli.ts         # CLI configuration
└── package.json
```

## 🚢 Deployment

### Deploy to Sanity Cloud

```bash
npm run deploy
```

### Deploy GraphQL API

```bash
npm run deploy-graphql
```

After deployment, the content is available via:
- **GROQ API:** `https://veushuon.api.sanity.io/v1/graphql/production/default`
- **REST API:** `https://veushuon.api.sanity.io/v1/documents/production`

## 🔗 Integration

This CMS is integrated with the **Flutly Store** Flutter mobile application.

The mobile app consumes content via Sanity's APIs:
- Product catalog fetching
- Home page dynamic content
- Real-time content updates

For integration details, see the [Flutly Store repository](https://github.com/GabrielPeresBernes/flutly-store).

## 👨‍💻 Author

Gabriel Peres Bernes 

Full-Stack Software Engineer

LinkedIn: [https://www.linkedin.com/in/bernesdev/](https://www.linkedin.com/in/bernesdev/)

Email: bernes.dev@gmail.com
