# E-Commerce REST API

## Introduction
This project implements a REST API for an e-commerce system using Node.js with Express framework and MongoDB as the database.

## Setup
- Clone the repository: `git clone https://github.com/shree2203/node_task`
- Install dependencies: `npm install`
- Start the server: `npm start`
- The server should be running at `http://localhost:3000`.


## Testing
- Run tests: `npm test`

## Interacting with the API
- Use tools like Postman to interact with the API endpoints.
- The API endpoints are documented in the OpenAPI specification file.

### Endpoints

- `POST /products`: Create a new product
- `GET /products`: Fetch all products
- `GET /products/search?q={searchText}`: Search products by name, description, or variant name


## Architecture
- The project follows a MVC (Model-View-Controller) architecture.
- Models: Define database schemas and interact with MongoDB using Mongoose.
- Routes: Define API endpoints and handle requests/responses.
- Tests: Unit tests and integration tests are implemented using Jest and Supertest.


