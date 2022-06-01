import LandVehicle from './land-vehicle.js';
import AirVehicle from './air-vehicle.js';
import WaterVehicle from './water-vehicle.js';

const vehicles: (LandVehicle | AirVehicle | WaterVehicle)[] = [
  new LandVehicle({
    tires: ['Tires1', 'Tires2', 'Tires3', 'Tires4']
  }, {
    brand: 'Honda',
    model: 'Civic',
    year: 2010,
  }),
  new LandVehicle({
    tires: ['Tires5', 'Tires6', 'Tires7', 'Tires8']
  }, {
    brand: 'Skoda',
    model: 'Octavia',
    year: 2005,
  }),
  new AirVehicle({
    maxAltitude: 3000,
  }, {
    brand: 'Plane1',
    model: 'Planemodel1',
    year: 2020,
  }),
  new AirVehicle({
    maxAltitude: 8000,
  }, {
    brand: 'Plane2',
    model: 'PlaneModel2',
    year: 2010,
  }),
  new WaterVehicle({
    maxDepth: 60,
  }, {
    brand: 'Deeper',
    model: '123',
    year: 2014,
  }),
  new WaterVehicle({
    maxDepth: 90,
  }, {
    brand: 'Water',
    model: '456',
    year: 202,
  }),
];

vehicles.forEach(v => console.log(v.toString()));