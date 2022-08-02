import csv
import os
from pymongo import MongoClient
from dotenv import load_dotenv

#Script used for data migration from .csv files to MongoDB

load_dotenv("../server/.env")

client = MongoClient(os.getenv("MONGODB_URI"))
db = client.bikeapp
db_journeys = db.journeys
db_stations = db.stations

csv_journey_files = ['../data/2021-05.csv', '../data/2021-06.csv', '../data/2021-07.csv']
csv_station_files = ['../data/stations.csv']

journeys = []
stations = []

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

print('Working on journeys')

for file in range(len(csv_journey_files)):
    csv_journeys = open(csv_journey_files[file], 'r', encoding='utf-8-sig')
    reader_journey = csv.DictReader(csv_journeys)
    print("Reading file: " + csv_journey_files[file])
    for each in reader_journey:

        distance = each["Covered distance (m)"]
        duration = each["Duration (sec.)"]

        if distance and duration and float(distance) >= 10 and int(duration) >= 10:
            journeys.append({
            "departureTime":each["Departure"],
            "returnTime":each["Return"],
            "departureStation": each["Departure station id"],
            "returnStation": each["Return station id"],
            "distance": distance,
            "duration": duration
            })

print("Inserting journeys to MongoDB (This may take a while)...")
db_journeys.insert_many(journeys)






