# App Template

Basic web-api template. If you need to add, for example, sockets, convention is to add `source/sockets.ts` along with `source/sockets/`. Follow existing `api`-logic.

## Local dev deploy

### Pre-requisites

- Unix-like OS (Ubuntu works properly; MacOS not tested)
- [Node Version Manager](https://github.com/nvm-sh/nvm)
- [Docker](https://docs.docker.com/engine/install/)

### Deploy

1. Update Node.js version
    - put the required node version into `.nvmrc` file
    - `nvm use`
1. Initiate .env file
    - `cp .env.example .env`
    - put proper values (`PROJECT_NAME` is the only value to update at the moment)
1. Update packages versions
    - `make update-npm-packages`
    - `npm install`
        >If something goes wrong, read the log & manually rollback the package(s) version. Sometimes it happens for reasons beyond me (`npm-check-updates` package just updates the `package.json`)
1. Update Docker-images versions
    - `docker-compose.dev.yml`:
        - services/image: image
1. Run docker-compose
    - `make compose-up`
        >`-down` for removing containers with their volumes; `-stop` & `-start` for pausing & starting the containers, respectively
1. Update config values
    - `config/default.ts`
1. Run the API in dev-mode
    - `npm run api:dev`

### Optional

- `npx husky init`, if you want to use git-hooks. Links: [Git Hooks](https://git-scm.com/book/en/v2/Customizing-Git-Git-Hooks), [Husky](https://typicode.github.io/husky/)

## Database

- `npm run migrate:make` for creating new migration-file
- `npm run migrate` for migrating existing files

- `make psql` for direct PG access inside of container