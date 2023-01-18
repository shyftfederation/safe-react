# Shyft Safe

# <div align="center">‼️ This repository is deprecated ‼️</div>

<div align="center"> Please use <a href="https://github.com/safe-global/web-core">safe-global/web-core</a> instead </div>


A platform to store digital assets on Shyft. Forked from Gnosis Safe (with thanks) [gnosis-safe.io](https://gnosis-safe.io/)

## Transactions

Please see the [transaction](docs/transactions.md) notes for more information about transaction details.

## Deployed environments

- Shyft Mainnet: https://safe.shyft.network/

## Related repos

- [safe-react-e2e-tests](https://github.com/safe-global/safe-react-e2e-tests)
- [safe-react-gateway-sdk](https://github.com/safe-global/safe-react-gateway-sdk)
- [safe-react-components](https://github.com/safe-global/safe-react-components)
- [safe-react](https://github.com/safe-global/safe-react) upstream


## Getting Started

These instructions will help you get a copy of the project up and running on your local machine for development and testing purposes. See [Deployment](#deployment) for notes on how to deploy the project on a live system.

### Prerequisites

We use [yarn](https://yarnpkg.com) in our infrastructure, so we decided to go with yarn in the README.
Please install yarn globally if you haven't already.

### Environment variables

The app grabs environment variables from the `.env` file. Copy our template to your own local file:

```
cp .env.example .env
```

Once done, you'll need to restart the app if it's already running.

### Installing and running

Install dependencies for the project:

```
yarn install
```

To launch the dev version of the app locally:

```
yarn start
```

Alternatively, to run the production version of the app:

```
yarn build
mv build app
python -m SimpleHTTPServer 3000
```

And open http://localhost:3000/app in the browser.

### Docker

If you prefer to use Docker:

```
docker-compose build && docker-compose up
```

### Building

To get a complete bundle using the current configuration use:

```
yarn build
```

## Running the tests

To run the tests:

```
yarn test
```

### Lint

ESLint will be run automatically before you commit. To run it manually:

```
yarn lint:fix
```

## Built With

- [React](https://reactjs.org/) - A JS library for building user interfaces
- [Material UI 4.X](https://material-ui.com/) - React components that implement Google's Material Design
- [redux, immutable, reselect, final-form](https://redux.js.org/) - React ecosystem libraries

![app diagram](https://user-images.githubusercontent.com/381895/129330828-c067425b-d20b-4f67-82c7-c0598deb453a.png)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
