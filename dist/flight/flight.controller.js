"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FlightController = void 0;
const common_1 = require("@nestjs/common");
const flight_service_1 = require("./flight.service");
const swagger_1 = require("@nestjs/swagger");
let FlightController = class FlightController {
    constructor(flightService) {
        this.flightService = flightService;
    }
    async searchFlights(departureAirport, arrivalAirport, date, flightCode, limit = 25) {
        const flightData = await this.flightService.searchFlights(departureAirport, arrivalAirport, date, flightCode, limit);
        return flightData;
    }
    async getFlightInformation(flightCode) {
        try {
            const flightInfo = await this.flightService.fetchFlightInformation(flightCode);
            return flightInfo;
        }
        catch (error) {
            throw error;
        }
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: 'Search for flights',
        description: 'Searches for flights based on provided parameters.',
    }),
    (0, swagger_1.ApiQuery)({
        name: 'departureAirport',
        description: 'Code of the departure airport',
        example: 'LAX',
    }),
    (0, swagger_1.ApiQuery)({
        name: 'arrivalAirport',
        description: 'Code of the arrival airport',
        example: 'JFK',
    }),
    (0, swagger_1.ApiQuery)({
        name: 'date',
        description: 'Date of the desired flight',
        example: '2023-08-19',
    }),
    (0, swagger_1.ApiQuery)({
        name: 'flightCode',
        description: 'Optional flight code for filtering',
        example: 'FD3210',
    }),
    (0, swagger_1.ApiQuery)({
        name: 'limit',
        description: 'Maximum number of results (default is 25)',
        example: 10,
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Flights retrieved successfully',
    }),
    (0, common_1.Get)('search'),
    __param(0, (0, common_1.Query)('departureAirport')),
    __param(1, (0, common_1.Query)('arrivalAirport')),
    __param(2, (0, common_1.Query)('date')),
    __param(3, (0, common_1.Query)('flightCode')),
    __param(4, (0, common_1.Query)('limit')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, String, Number]),
    __metadata("design:returntype", Promise)
], FlightController.prototype, "searchFlights", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: 'Retrieve flight information by flight code',
        description: 'Fetches flight information using a specific flight code.',
    }),
    (0, swagger_1.ApiParam)({
        name: 'flightCode',
        description: 'The code of the flight',
        example: 'FD3210',
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Flight information retrieved successfully',
    }),
    (0, swagger_1.ApiResponse)({
        status: 404,
        description: 'Flight information not found',
    }),
    (0, common_1.Get)(':flightCode'),
    __param(0, (0, common_1.Param)('flightCode')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], FlightController.prototype, "getFlightInformation", null);
FlightController = __decorate([
    (0, common_1.Controller)('flight'),
    __metadata("design:paramtypes", [flight_service_1.FlightService])
], FlightController);
exports.FlightController = FlightController;
//# sourceMappingURL=flight.controller.js.map