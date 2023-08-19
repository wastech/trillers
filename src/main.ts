import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Create a Swagger configuration using the DocumentBuilder
  const config = new DocumentBuilder()
    .setTitle('Flight API')
    .setDescription('API documentation for the flight service')
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
