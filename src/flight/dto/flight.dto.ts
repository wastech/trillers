// src/flight/flight-search.dto.ts
import { IsNotEmpty, IsString, IsDateString } from 'class-validator';

export class FlightSearchDto {
  @IsNotEmpty()
  @IsString()
  flightCode: string;

  @IsNotEmpty()
  @IsDateString()
  date: string;

  // You can include more properties if needed (e.g., departureAirport, arrivalAirport)
}
