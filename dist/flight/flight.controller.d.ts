import { FlightService } from './flight.service';
export declare class FlightController {
    private readonly flightService;
    constructor(flightService: FlightService);
    searchFlights(departureAirport: string, arrivalAirport: string, date: string, flightCode: string, limit?: number): Promise<any>;
    getFlightInformation(flightCode: string): Promise<any>;
}
