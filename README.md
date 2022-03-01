# Shyft Safe

A platform to store digital assets on Shyft. Forked from Gnosis Safe (with thanks) [gnosis-safe.io](https://gnosis-safe.io/)

For technical information please refer to the [Gnosis Developer Portal](https://docs.gnosis.io/safe/).

For support requests, please open up a [bug issue](https://github.com/shyftfederation/safe-react/issues/new).

## Transactions

Please see the [transaction](docs/transactions.md) notes for more information about transaction details.

## Deployed environments

- (eventually) Shyft Mainnet: https://safe.shyft.network/
- Shyft Testnet: https://safe.testnet.shyft.network/

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

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
