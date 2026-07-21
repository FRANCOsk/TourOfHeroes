# Tour of Heroes

Angular learning application based on the official Tour of Heroes tutorial. The project demonstrates components, routing, services, forms and client-side state in a compact example.

## Requirements

- Node.js 14–16 (compatible with Angular 12)
- npm 6 or newer

## Local development

```bash
npm ci
npm start
```

Open `http://localhost:4200`.

## Quality checks

```bash
npm test -- --watch=false --browsers=ChromeHeadless
npm run build -- --configuration production
npm audit --omit=dev --audit-level=critical
```

## Project structure

- `src/app` – application components, services and routing
- `src/assets` – static assets
- `src/environments` – environment-specific configuration

## Maintenance

The project currently uses Angular 12. Dependency updates should be applied incrementally and validated with tests and a production build before merging.
