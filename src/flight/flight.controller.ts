import { Controller, Query, ValidationPipe, Get, Param } from '@nestjs/common';
import { FlightService } from './flight.service';
import { FlightSearchDto } from './dto/flight.dto';
import { ApiOperation, ApiResponse, ApiQuery, ApiParam } from '@nestjs/swagger';

@Controller('v1/flights')
export class FlightController {
  constructor(private readonly flightService: FlightService) {}

  // This endpoint handles a GET request for searching flights based on various parameters.
  // It accepts query parameters: departureAirport, arrivalAirport, date, flightCode, and limit.
  // - departureAirport: The code of the departure airport.
  // - arrivalAirport: The code of the arrival airport.
  // - date: The date of the desired flight.
  // - flightCode: An optional parameter to filter flights by a specific flight code.
  // - limit: The maximum number of results to return (default is 25 if not specified).

  @ApiOperation({
    summary: 'Search for flights',
    description: 'Searches for flights based on provided parameters.',
  })
  @ApiQuery({
    name: 'departureAirport',
    description: 'Code of the departure airport',
    example: 'LAX',
  })
  @ApiQuery({
    name: 'arrivalAirport',
    description: 'Code of the arrival airport',
    example: 'JFK',
  })
  @ApiQuery({
    name: 'date',
    description: 'Date of the desired flight',
    example: '2023-08-19',
  })
  @ApiQuery({
    name: 'flightCode',
    description: 'Optional flight code for filtering',
    example: 'FD3210',
  })
  @ApiQuery({
    name: 'limit',
    description: 'Maximum number of results (default is 25)',
    example: 10,
  })
  @ApiResponse({
    status: 200,
    description: 'Flights retrieved successfully',
  })
  @Get('search')
  async searchFlights(
    @Query('departureAirport') departureAirport: string,
    @Query('arrivalAirport') arrivalAirport: string,
    @Query('date') date: string,
    @Query('flightCode') flightCode: string, // Add flightCode parameter
    @Query('limit') limit: number = 25,
  ) {
    const flightData = await this.flightService.searchFlights(
      departureAirport,
      arrivalAirport,
      date,
      flightCode, // Pass the flightCode parameter to the service method
      limit,
    );

    return flightData;
  }

  // This endpoint handles a GET request for retrieving flight information based on a specific flight code.
  // It accepts a parameter: flightCode, which is the code of the flight.

  @ApiOperation({
    summary: 'Retrieve flight information by flight code',
    description: 'Fetches flight information using a specific flight code.',
  })
  @ApiParam({
    name: 'flightCode',
    description: 'The code of the flight',
    example: 'FD3210',
  })
  @ApiResponse({
    status: 200,
    description: 'Flight information retrieved successfully',
  })
  @ApiResponse({
    status: 404,
    description: 'Flight information not found',
  })
  @Get(':flightCode')
  async getFlightInformation(@Param('flightCode') flightCode: string) {
    try {
      // Return the obtained flightInfo as the response.
      const flightInfo = await this.flightService.fetchFlightInformation(
        flightCode,
      );

      // Return the obtained flightInfo as the response.
      return flightInfo;
    } catch (error) {
      // If an error occurs during the process, rethrow the error.
      throw error;
    }
  }
}
