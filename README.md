# Azure Functions (V4) TypeScript Example

## Overview

Azure Function (V4) in TypeScript, aiming to implement strong type safety and a fast deployment experience.

## Todo

- [ ] Implement environment variable type safety
- [x] Use bundler to handle module resolution (using Rollup)
- [x] Get module imports working

## Configuration

### Installation

1. Follow instructions to [Configure your local environment](https://learn.microsoft.com/en-us/azure/azure-functions/create-first-function-cli-typescript?tabs=azure-cli%2Cbrowser&pivots=nodejs-model-v4#configure-your-local-environment)
2. `npm install`

### Local environment variables

1. Rename `local.settings.example.json` to `local.settings.json`
2. Add a value to `EXAMPLE_1` (or remove it if not required)

### Running locally

1. `npm start`
2. `ngrok http 7071`

### Deploying

- [Visual Studio Code](https://learn.microsoft.com/en-us/azure/azure-functions/create-first-function-vs-code-typescript?pivots=nodejs-model-v4#deploy-the-project-to-azure)
- [Command Line](https://learn.microsoft.com/en-us/azure/azure-functions/create-first-function-cli-typescript?tabs=azure-cli%2Cbrowser&pivots=nodejs-model-v4#deploy-the-function-project-to-azure)
