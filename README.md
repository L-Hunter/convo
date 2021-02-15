Welcome!

This app is built using NextJS, Prisma, NodeJS, and SQLite.
It requires Node version 14.13.1 or greater.

## Installation

```
# Installs Node modules
npm install
# Create tables
npx prisma migrate dev --preview-feature
# Seed with some starter data
npx prisma db seed --preview-feature
```

## Optional Steps:

To view Prisma Studio, run:
`npx prisma studio`

Open [http://localhost:5555](http://localhost:5555) with your browser to see Prisma Studio.

## Running the App:

To start the app, run:
`npm run dev`

Open [http://localhost:3000](http://localhost:3000) with your browser

## Unit Tests:

To run the unit tests:
`npm test`
