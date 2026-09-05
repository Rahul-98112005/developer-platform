# developer-platform

Internal Developer Platform built with Node.js and TypeScript.

## Scripts

- `npm run dev` - run the platform server directly from TypeScript
- `npm run build` - compile TypeScript into `dist/`
- `npm run start` - run the compiled server
- `npm test` - run focused tests

## API

- `GET /health` - health status
- `GET /services` - list registered services
- `POST /services` - register a service (`name`, `owner`, `repositoryUrl`)
- `GET /services/:name` - get a registered service by name
