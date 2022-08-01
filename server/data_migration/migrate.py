import csv
from pymongo import MongoClient

#Script used for data migration from .csv files to MongoDB

journey_headers = [
    "departureTime",
    "returnTime",
    "departureStation",
    "returnStation",
    "distanceMeters",
    "durationSeconds"
]

station_headers = [
    "id",
    "nameFi",
    "nameSe",
    "addressFi",
    "addressSe",
    "cityFi",
    "citySe",
    "operator",
    "capacity",
    "coordX",
    "coordY"
]


csv_file = open('../data/2021-05.csv', 'r')
reader = csv.DictReader(csv_file)

for each in reader:
    print(each)

