import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

 

  it('/flight/search (GET)', async () => {
    const response = await request(app.getHttpServer())
      .get('/flight/search')
      .query({
        departureAirport: 'JFK',
        arrivalAirport: 'LHR',
        date: '2023-08-20',
        limit: 25,
      })
      .expect(200);

    // You can add further assertions based on the expected response data
    expect(response.body).toBeDefined();
  });

  it('/flight/FD3210 (GET)', async () => {
    // Make the actual API request
    const response = await request(app.getHttpServer())
      .get('/flight/FD3210')
      .expect(200); // Assuming the endpoint returns a 200 status code

    // Update your assertions based on the actual response structure
    expect(response.body).toBeDefined();
    // Add more assertions as needed
  });

  afterAll(async () => {
    await app.close();
  });
});
