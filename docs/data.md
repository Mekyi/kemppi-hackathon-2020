# Mock data

Documentation for mockdata from JSONs

## Car details

Example:

```json
{
  "carId": 12521,
  "carModel": "Tesla Model S",
  "plugged": true
}
```

Details:

* carID
  * ID of the car.
* carModel
  * Model of the car.
* plugged
  * If the car is currently attached to the satellite.

## Log entries

Example:

```json
{
  "logId": 42512,
  "satelliteId": 124,
  "entryTimestamp": "2020-02-12T14:00:00.000Z",
  "socIn": 19,
  "socOut": 100,
  "carId": 12521,
  "timePastFullCharge": 392,
  "kWh": 0.72
}
```

Details:

* logId
  * ID of the log entry.
* satelliteId
  * ID of the satellite that the log entry is coming from.
* entryTimestamp
  * Time of the log entry.
* socIn
  * The car's state of charge when attached to the satellite.
* socOut
  * The car's state of charge when disconnected from the satellite.
* carId
  * ID of the car that is in contact with the satellite.
* timePastFullCharge
  * Time that has passed after the car is fully charged (in seconds).
* kWh
  * Amount of energy delivered to current customer.

## Power supplies

Example:

```json
{
  "id": 5334,
  "description": "Kempinkadun virtalähde",
  "coordinates": {
    "lat": 25.587888,
    "lon": 60.967193
  },
  "power": 80,
  "chargeHours": 1200,
  "freeHours": 4256,
  "totalHours": 5356,
  "totalChargePower": 93
}
```

Details:

* id
  * ID of the power supply
* desription
  * Info about the power supply.
* coordinates
  * Latitude and longitude for the power supply location.
* power
  * Power supplies power (kW).
* chargeHours
  * Total usage of the power supply.
* freeHours
  * Total time the power supply has not been in use.
* totalHours
  * Total time the power supply has been operating.

## Satellites

Example:

```json
{
  "id": 245,
  "description": "LAMK M19 latauspiste",
  "coordinates": {
    "lat": 25.663161,
    "lon": 61.005471
  },
  "status": "free",
  "pluggedCarId": null
}
```

Details:

* id
  * ID of the satellite.
* description
  * Info about the satellite.
* coordinates
  * Latitude and longitude for the power supply location.
* status
  * Status of the satellite:
    * free
    * in-use-plugged
    * in-use-charging
    * in-use-charged
    * malfunction
    * out-of-service
    * maintenance
* pluggedCarId
  * ID of the car that is currently attached to the charging station.

## Stations

Example:

```json
{
  "satelliteId": 124,
  "powerSupplyId": 5334
}
```

Details:

* satelliteId
  * ID of the satellite in the station
* powerSupplyId
  * ID of the power supply in the station
