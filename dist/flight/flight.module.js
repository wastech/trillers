"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FlightModule = void 0;
const common_1 = require("@nestjs/common");
const flight_service_1 = require("./flight.service");
const flight_controller_1 = require("./flight.controller");
let FlightModule = class FlightModule {
};
FlightModule = __decorate([
    (0, common_1.Module)({
        controllers: [flight_controller_1.FlightController],
        providers: [flight_service_1.FlightService],
    })
], FlightModule);
exports.FlightModule = FlightModule;
//# sourceMappingURL=flight.module.js.map