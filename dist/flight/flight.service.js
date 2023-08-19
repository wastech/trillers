"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FlightService = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("axios");
let FlightService = class FlightService {
    async fetchFlightInformation(flightCode) {
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
            const response = await axios_1.default.request(options);
            return response.data;
        }
        catch (error) {
            throw error;
        }
    }
    async searchFlights(departureAirport, arrivalAirport, date, flightCode, limit) {
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
                query: flightCode,
                limit: String(limit),
            },
            headers,
        };
        try {
            const response = await axios_1.default.request(options);
            return response.data;
        }
        catch (error) {
            throw error;
        }
    }
};
FlightService = __decorate([
    (0, common_1.Injectable)()
], FlightService);
exports.FlightService = FlightService;
//# sourceMappingURL=flight.service.js.map