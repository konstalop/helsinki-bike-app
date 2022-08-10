# Server side of Helsinki City Bikes
Server side is made using NodeJS, MongoDB, express.js and mongoose.

## MongoDB schemas
These schemas can be found in the `./models` folder.
### Journeys

| Field              | Type   | Required |   
|--------------------|--------|----------|
| departureTime      | String | true     |
| returnTime         | String | true     |
| departureStationId | Number | true     |
| returnStation      | String | true     |   
| returnStationId    | Number | true     |   
| distance           | Number | true     |   
| duration           | Number | true     | 

### Stations

| Field     | Type   | Required |
|-----------|--------|----------|
| id        | Number | true     |
| nameFI    | String | true     |
| nameSe    | String | true     |
| addressFi | String | true     |
| addressSe | String | true     |
| cityFi    | String | true     | 
| citySe    | String | true     |
| operator  | String | true     | 
| capacity  | Number | true     | 
| coordX    | Number | true     |
| coordY    | Number | true     |

