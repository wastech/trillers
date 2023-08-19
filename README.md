

## Flight Service API

The Flight Service API is a robust and secure solution designed to provide users with access to comprehensive flight information and search capabilities. Built using the NestJS framework, this API offers a reliable way to retrieve flight details, search for flights based on various parameters, and deliver accurate results in a structured format.

## Features
- Retrieve Flight Information: Obtain detailed information about a specific flight by providing its unique flight code. The API responds with essential flight details, including departure and arrival airports, flight times, and additional relevant data.
- Search for Flights: Perform flexible flight searches using parameters such as departure and arrival airports, date of travel, and optional flight code. The API efficiently returns a list of matching flights, allowing users to find the most suitable options.

## Security and Validation
The Flight Service API prioritizes security and user data protection. It implements best practices for authentication and authorization to ensure that only authorized users can access sensitive flight information. Input validation mechanisms are in place to prevent common security vulnerabilities, enhancing the overall reliability of the service.

## Interactive Documentation
The API is fully documented using Swagger, providing a user-friendly and interactive interface for exploring endpoints, understanding input parameters, and reviewing example responses. The Swagger documentation ensures that developers can quickly integrate the API into their applications with ease.

## Flight Service API Documentation

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## License

Nest is [MIT licensed](LICENSE).
