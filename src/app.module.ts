import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { FlightModule } from './flight/flight.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, //  Make the configuration module available globally
    }),
    FlightModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
