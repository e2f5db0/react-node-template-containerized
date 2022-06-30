# React-node template

A template for a React web application with node backend. Ready for deploying to Heroku.

## Development

Clone the repository

```bash
git clone <repository>
```

Create `.env` file in the root directory.

Define the necessary environment variables in `.env`.

Example contents of `.env`:

```

PORT=3001

```

### Running the development containers

Make sure you are not connected to a VPN or else the network created by docker-compose is unreachable.

In the root folder:

```bash
# The frontend runs on localhost:3000.
# nginx serves the frontend on localhost:8080.
# The backend runs on localhost:3001.
> docker-compose -f docker-compose.dev.yaml up
```

### Linting

Make sure to lint the code before trying to make PRs and fix all lint issues

```bash
> cd ./backend/
> cd ./frontend/
> npm run eslint
```

### Testing

Run frontend tests (jest)

```bash
> cd ./frontend/
> npm run test
```

Run end-to-end tests (cypress)

```bash
> cd ./backend/
> npm run test:e2e
```

e2e interactive mode

```bash
> cd ./backend/
> npm run cypress:open
```
