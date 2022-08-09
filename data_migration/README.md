# Data migration for Helsinki City Bikes

This directory contains the python script for migrating data from .csv files to MongoDB.

## Requirements

- Python 3+
- Folder called "data" located in the root of HELSINKI-BIKE-APP
    - Data folder contains all of the .csv files
- MongoDB cluster
    - Have an .env file containing your MongoDB connection URI.
    - The script currently looks for it at the following path  `"../server/.env"`


## Needed packages

You need to install pymongo and dotenv in order to run this script.

```
pip install pymongo
pip install dotenv
```


## Data migration

- Script migrates .csv files from "data" folder
```
csv_journey_files = ['../data/2021-05.csv'] <-- journey .csv files
csv_station_files = ['../data/stations.csv'] <-- station .csv files
```

- You can edit the conditions in the script to meet your wanted conditions.
- Current script doesnt import journeys lasting less than 10 seconds or covering distance less than 10 meters.

## Running the script
:heavy_exclamation_mark: Command to run python scripts might vary depending on your OS :heavy_exclamation_mark:

Run the migration script with the following command:
```
python migrate.py
```
