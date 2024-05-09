# Description

This app is a simple demonstration of of listing items from api in a web page.

Used technologies:
- Vite
- React
- React query
- React router
- Material UI

# How to run

```shell
# Setup deps, get all the things!
npm install

# Vite dev server.
npm run dev

# Typescript build.
npm run check
# with watch.
npm run watch

# Eslint.
npm run lint
```

# Conventions

## Project structure

```shell
src
├── App.tsx
├── constants
│   ├── queryKeys.ts
│   ├── routes.ts
│   └── urls.ts
├── features
│   ├── photo
│   │   ├── Photo.tsx
│   │   └── hooks
│   └── photo-listing
│       ├── PhotoList.tsx
│       ├── hooks
│       └── types.ts
├── main.tsx
├── pages
│   ├── PhotoPage.tsx
│   └── PhotosPage.tsx
└── vite-env.d.ts
```

- `features` - Structure components and hooks by well defined features
- `pages` - Each page should have a component here, keep these components simple and lean
- `hooks` - Define a custom hook for dependencies such as data that is retrieved from rest endpoint

