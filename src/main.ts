import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle('F1-TrackMaster Api')
    .setDescription('The f1 Api for project F1-TrackMaster')
    .setVersion('1.0')
    .build()
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document, { swaggerOptions: { docExpansion: 'none' } });

  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
}
bootstrap();
