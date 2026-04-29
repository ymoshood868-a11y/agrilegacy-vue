# AgriLegacy - Vue 3 Version

This is the Vue 3 (Composition API) version of the AgriLegacy farm management website.

## Features

- ✅ Vue 3 with Composition API
- ✅ TypeScript support
- ✅ Vue Router for navigation
- ✅ Pinia for state management
- ✅ Fully responsive design
- ✅ Dark/Light theme toggle
- ✅ Custom cursor animation
- ✅ Mobile-friendly navigation
- ✅ All original pages converted to Vue components

## Project Setup

```bash
npm install
```

### Compile and Hot-Reload for Development

```bash
npm run dev
```

### Type-Check, Compile and Minify for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
agrilegacy-vue/
├── src/
│   ├── assets/          # CSS and static assets
│   ├── components/      # Reusable Vue components
│   │   ├── NavBar.vue
│   │   ├── FooterSection.vue
│   │   └── CustomCursor.vue
│   ├── views/           # Page components
│   │   ├── HomeView.vue
│   │   ├── LivestockView.vue
│   │   ├── AquacultureView.vue
│   │   ├── CropView.vue
│   │   ├── ServicesView.vue
│   │   ├── SustainabilityView.vue
│   │   ├── ReviewsView.vue
│   │   ├── InsightsView.vue
│   │   └── ContactView.vue
│   ├── stores/          # Pinia stores
│   │   └── theme.ts
│   ├── router/          # Vue Router configuration
│   │   └── index.ts
│   ├── App.vue          # Root component
│   └── main.ts          # Application entry point
└── index.html           # HTML template
```

## Pages

- **Home** (`/`) - Hero carousel, solutions overview, statistics, timeline
- **Livestock** (`/livestock`) - Livestock management solutions
- **Aquaculture** (`/aquaculture`) - Fish farming solutions
- **Crops** (`/crop`) - Smart crop planning
- **Services** (`/services`) - All available services
- **Sustainability** (`/sustainability`) - Environmental initiatives
- **Reviews** (`/reviews`) - Customer testimonials
- **Insights** (`/insights`) - Blog and articles
- **Contact** (`/contact`) - Contact form and information

## Technologies Used

- Vue 3
- TypeScript
- Vue Router
- Pinia
- Vite
- Font Awesome
- Google Fonts (Playfair Display & Poppins)

## Deployment

Build the project for production:

```bash
npm run build
```

The built files will be in the `dist/` directory, ready to deploy to any static hosting service.

## Original Project

This is a Vue 3 conversion of the original HTML/CSS/JS AgriLegacy website.
