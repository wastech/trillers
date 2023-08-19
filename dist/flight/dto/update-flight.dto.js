"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateFlightDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_flight_dto_1 = require("./create-flight.dto");
class UpdateFlightDto extends (0, mapped_types_1.PartialType)(create_flight_dto_1.CreateFlightDto) {
}
exports.UpdateFlightDto = UpdateFlightDto;
//# sourceMappingURL=update-flight.dto.js.map