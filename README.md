# Tim Bryan Front-end Coding Challenge

This project is the base for our front-end challenge. It has been designed to be forked, pulled locally, commit attempt, push and then evaluated by the team.

For details on what you need to complete as part of the challenge, read the [CHALLENGE.md](/CHALLENGE.md) document.

The project has everything set up and configured to complete the task completely, including the bonus tasks if you decide to take them on. However, you are welcome to add or replace libraries or configurations as you require to complete the task in your way with your skills, experience or knowledge.

The project contains the following tech for completing the task:

- [React@18](https://reactjs.org/) - our JS framework of choice
- [Jest](https://jestjs.io/) - unit, functional and component testing
- [Standard](https://standardjs.com/) - for coding standards and linting
- [TypeScript](https://www.typescriptlang.org/)

## Prerequisites

You will need the following to complete the task:

- An account with a public GIT hosting service that we can access ([GitHub](https://github.com/)/[GitLab](https://about.gitlab.com/)/[BitBucket](https://bitbucket.org/product) et al)
- [GIT](https://git-scm.com/) installed locally
- [Node](https://nodejs.org/en/) >= 16
- [NPM](https://www.npmjs.com/package/npm) >= 7

## Getting started

Should be as simple as:

- run `git clone [repo link]`
- run `npm install`
- run `npm run dev`
- open the project in your code editor of choice
- start coding!

## Scripts available

- `build` - check TS types for errors and attempt to build the project for production
- `dev` - run Vite in development mode
- `lint` - run Standard on the codebase to look for linting and code standard issues
- `fix` - same as `lint` but will attempt to auto-fix most issues and will list any un-auto-fixable issues
- `test` - run Jest on any test files it can find
- `tdd` - same as `test` but using watch mode to keep tests alive while you make changes to your code
