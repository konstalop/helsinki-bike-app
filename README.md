# Helsinki City Bike App

This is a full stack web application to display data of Helsinki City Bike journeys and stations. Made as a pre-assignment for [Solita Dev Academy](https://www.solita.fi/en/academy/) during August 2022.

## Table of contents

1. [Requirements](#requirements)
2. [Installation](#installation)
3. [Testing](#testing)
4. [Functionalities](#functionalities)
    1. [Data](#data)
    2. [Application](#application)
5. [Technologies Used](#technologies-used)
    1. [Client side](#client-side)
    2. [Server side](#server-side)
    3. [Data](#data-1)
6. [Live Demo](#live-demo)


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
Testing is done with jest & supertest for backend.

#### Install jest & supertest
```
npm install --save-dev jest supertest
```

#### Run test suites
```
npx jest
```


## Functionalities

### Data
- Imported to MongoDB from .csv files using python.
- Correct types for data entries.
- Journeys lasting less than 10 seconds or covering less than 10 meters are not imported to MongoDB.

### Application

- Landing page
    - Switch between stations and journey view
    - Shows general data of Helsinki City Bikes
- Stations
    - Listing all stations
    - Pagination
    - Searching
    - Single station view
        - General information about the station
        - Location on map
        - Average time and distance for ending/starting journeys
        - Number of ending/starting journeys
- Journeys
    - Listing all journeys
    - Pagination
    - Searching by return and departure station. 
        - View paginated list of search results

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


## Live Demo 

Link coming here when project is deployed.



## TODO:

This is just for development. Helps me to keep track of things to do.

E2E testing, deploy