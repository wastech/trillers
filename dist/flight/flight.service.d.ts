export declare class FlightService {
    fetchFlightInformation(flightCode: string): Promise<any>;
    searchFlights(departureAirport: string, arrivalAirport: string, date: string, flightCode: string, limit: number): Promise<any>;
}
