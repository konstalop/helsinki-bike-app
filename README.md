# Helsinki City Bike App

This is a full stack web application to display data of Helsinki City Bike journeys and stations. Made as a pre-assignment for [Solita Dev Academy](https://www.solita.fi/en/academy/) during August 2022.

:heavy_exclamation_mark:The app currently uses only 1 dataset of journeys containing a little over 785 000 entries.:heavy_exclamation_mark:


## Requirements
- Node (Built with version 16.13.2)
- Git
- Python3 for data migration
    - See full details of data migration in the data_migration folder README.
## How to install

Get started by creating the following .env file in the root of the project

```
PORT=5000 
MONGODB_URI= YOUR MONGODB URI HERE
DB_NAME= YOUR DB NAME HERE, DEFAULT IS "bikeapp"
```

Full instructions coming soon
## Features of the app

- Landing page
    - Shows general data of Helsinki City Bikes
- Stations:
    - Has a list view of all stations
    - You can click a station on the list to view more details of it.
- Journeys
    - Has a list view of all journeys currently in the database.

## Live demo 

Link coming here when project is deployed.



## TODO:

This is just for development. Helps me to keep track of things to do.

E2E testing, write READMEs for client and backend, show avg stuff on stations, deploy