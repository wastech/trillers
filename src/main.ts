import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Create a Swagger configuration using the DocumentBuilder
  const config = new DocumentBuilder()
    .setTitle('Flight API')
    .setDescription(
      'The Flight Service API is a robust and secure solution designed to provide users with access to comprehensive flight information and search capabilities. Built using the NestJS framework, this API offers a reliable way to retrieve flight details, search for flights based on various parameters, and deliver accurate results in a structured format.',
    )
    .setVersion('1.0')
    .build();

  // Create a Swagger document
  const document = SwaggerModule.createDocument(app, config);

  // Set up Swagger UI at /api-docs
  SwaggerModule.setup('api-docs', app, document);

  // Configure ValidationPipe
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true, // Automatically transform incoming data to DTO instances
      transformOptions: {
        enableImplicitConversion: true, // Enable implicit conversion of types
      },
    }),
  );

  await app.listen(process.env.PORT);
}
bootstrap();
