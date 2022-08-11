# Helsinki City Bike App

This is a full stack web application to display data of Helsinki City Bike journeys and stations. Made as a pre-assignment for [Solita Dev Academy](https://www.solita.fi/en/academy/) during August 2022.

## Table of contents

1. [Live Demo](#live-demo)
2. [Requirements](#requirements)
3. [Installation](#installation)
4. [Testing](#testing)
5. [Functionalities](#functionalities)
    1. [Data](#data)
    2. [Application](#application)
6. [Technologies Used](#technologies-used)
    1. [Client side](#client-side)
    2. [Server side](#server-side)
    3. [Data](#data-1)
    4. [Testing](#testing-1)
    5. [Deployment](#deployment)


## Live Demo 

https://hsl-city-bikes.herokuapp.com/


## Requirements
- [Node](https://nodejs.org/en/) (Built with version 16.13.2)
- [Git](https://git-scm.com/)
- [Python](https://www.python.org/) for data migration
## Installation

#### 1. Start by cloning this repository

```
git clone https://github.com/konstalop/helsinki-bike-app
```
#### 2. If needed, migrate data from .csv files to MongoDB
[Instructions here](https://github.com/konstalop/helsinki-bike-app/tree/main/data_migration)

#### 3. Create .env file in the root of the server folder

```
PORT=5000
MONGODB_URI=YOUR MONGODB URI HERE
DB_NAME=bikeapp
```

#### 4. Install dependencies for client & server
Run this command in the root of the client folder and the server folder.
```
npm install
```
#### 5. Run the app
You can launch the app by running the following command in the root of the server.
```
npm run dev
```

## Testing

The app has two main tests: E2E and API endpoint tests.

### Testing API endpoints
Done with jest & supertest

#### Install jest & supertest in ./server folder
```
npm install --save-dev jest supertest
```

#### Run test suites
```
npx jest
```

### Running E2E tests
These tests are created with cypress.

#### Install cypress in ./client folder
```
npm install --save-dev cypress
```

#### Running tests
In terminal with `npm run cy:run`

Or use cypress browser with `npx cypress open`


## Features

### Data
- Imported from .csv files to MongoDB.
- Correct types for data entries.
- Journeys lasting less than 10 seconds not imported.
- Journeys covering less than 10 meters not imported.

### Application

- Journeys list view
    - Listing all journeys
    - Pagination
    - Searching / filtering by return and departure station
        - Browse a paginated list of journeys filtered by return / departure station

- Stations list view
    - Listing all stations
    - Pagination
    - Searching by name

- Single station view
     - General information about the station
     - Location on map
     - Number of ending/starting journeys
     - Average time for ending/starting journeys
     - Average distance for ending/starting journeys

- Additional
    - Home page
        - Allows user to choose between stations or journeys
        - Displays general information about Helsinki City Bikes
    - Running whole application in cloud
    - E2E tests
    - API endpoint tests

## Technologies used
#### Client side
- React
- CSS
- JavaScript
- Google Maps API
- Axios
#### Server side
 - NodeJS
 - Express
 - Mongoose
#### Data
- Python
- MongoDB
- .csv files

#### Testing
- Jest
- Supertest
- .REST client
- Cypress

#### Deployment
- Heroku


