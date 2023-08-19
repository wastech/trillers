import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class FlightService {
  async fetchFlightInformation(flightCode: string) {
    const options = {
      method: 'GET',
      url: process.env.FLIGHT_API_URL,
      params: {
        query: flightCode,
        fetchBy: 'flight',
        page: '1',
        limit: '100',
      },
      headers: {
        'X-RapidAPI-Key': process.env.RAPIDAPI_KEY,
        'X-RapidAPI-Host': process.env.RAPIDAPI_HOST,
      },
    };

    try {
      const response = await axios.request(options);

      return response.data;
    } catch (error) {
      throw error;
    }
  }

  async searchFlights(
    departureAirport: string,
    arrivalAirport: string,
    date: string,
    flightCode: string, // Include the flightCode parameter
    limit: number,
  ) {
    const apiKey = process.env.RAPIDAPI_KEY;
    const apiUrl = process.env.FLIGHT_SEARCH_API_URL;

    const headers = {
      'X-RapidAPI-Key': apiKey,
      'X-RapidAPI-Host': process.env.RAPIDAPI_HOST,
    };

    const options = {
      method: 'GET',
      url: apiUrl,
      params: {
        departureIATA: departureAirport,
        arrivalIATA: arrivalAirport,
        date,
        query: flightCode, // Add the flightCode to the query parameters
        limit: String(limit),
      },
      headers,
    };

    try {
      const response = await axios.request(options);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
}
