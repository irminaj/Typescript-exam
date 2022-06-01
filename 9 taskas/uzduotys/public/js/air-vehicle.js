import Vehicle from "./vehicle.js";
class AirVehicle extends Vehicle {
    constructor({ maxAltitude }, vehicleProps) {
        super(vehicleProps);
        this.toString = () => {
            return `${this.getString()}\tmax Height: ${this.maxAltitude}`;
        };
        this.maxAltitude = maxAltitude;
    }
}
export default AirVehicle;
//# sourceMappingURL=air-vehicle.js.map