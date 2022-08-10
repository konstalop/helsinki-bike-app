# Helsinki City Bike App

This is a full stack web application to display data of Helsinki City Bike journeys and stations. Made as a pre-assignment for [Solita Dev Academy](https://www.solita.fi/en/academy/) during August 2022.

:heavy_exclamation_mark:The app currently uses only 1 dataset of journeys containing a little over 785 000 entries.:heavy_exclamation_mark:


## Requirements
- Node (Built with version 16.13.2)
- Git
- Python3 for data migration
    - See full details of data migration in the data_migration folder README.
## Install and migrate data in 5 steps

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


## Functionalities

### Data
- Imported to MongoDB from .csv files using python.
- Correct types for data entries.
- Journeys lasting less than 10 seconds or covering less than 10 meters are not imported to MongoDB.
- 

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
    - Has a list view of all journeys currently in the database.

- Additional features
    - UI to add new journeys

## Live demo 

Link coming here when project is deployed.



## TODO:

This is just for development. Helps me to keep track of things to do.

E2E testing, write READMEs for client and backend, deploy