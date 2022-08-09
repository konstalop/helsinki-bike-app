import csv
import os
from pymongo import MongoClient
from dotenv import load_dotenv

#Script used for data migration from .csv files to MongoDB

env_location = "../server/.env"

load_dotenv(env_location)

#Setup, connect to db get databases etc.

client = MongoClient(os.getenv("MONGODB_URI"))
db = client.bikeapp
db_journeys = db.journeys
db_stations = db.stations

csv_journey_files = ['../data/2021-05.csv']
csv_station_files = ['../data/stations.csv']

journeys = []
stations = []

#Handle importing stations

print('Working on stations')

csv_stations = open(csv_station_files[0], 'r', encoding='utf-8-sig')
reader_stations = csv.DictReader(csv_stations)
print('Reading stations')

for each in reader_stations:
    stations.append({
        "id":each["ID"],
        "nameFi":each["Nimi"],
        "nameSe":each["Namn"],
        "addressFi":each["Osoite"],
        "addressSe":each["Adress"],
        "cityFi":each["Kaupunki"],
        "citySe":each["Stad"],
        "operator":each["Operaattor"],
        "capacity":each["Kapasiteet"],
        "coordX":each["x"],
        "coordY":each["y"]
    })

print("Inserting stations to MongoDB")
db_stations.insert_many(stations)

# Handle importing journeys

print('Working on journeys')

for file in range(len(csv_journey_files)):
    csv_journeys = open(csv_journey_files[file], 'r', encoding='utf-8-sig')
    reader_journey = csv.DictReader(csv_journeys)
    rows = list(reader_journey)
    print("Reading file: " + csv_journey_files[file])
    for each in reversed(rows):

        distance = each["Covered distance (m)"]
        duration = each["Duration (sec.)"]

        if distance and duration and float(distance) >= 10 and int(duration) >= 10:
            journeys.append({
            "departureTime":each["Departure"],
            "returnTime":each["Return"],
            "departureStation": each["Departure station name"],
            "departureStationId": each["Departure station id"],
            "returnStation": each["Return station name"],
            "returnStationId": each["Return station id"],
            "distance": distance,
            "duration": duration
            })

print("Inserting journeys to MongoDB (This may take a while)...")
db_journeys.insert_many(journeys)