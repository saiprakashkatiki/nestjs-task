import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { Logger } from '@nestjs/common';
import { PinoLogger } from 'nestjs-pino';

async function bootstrap() {

  const app = await NestFactory.create(AppModule,
    //{ logger: new Logger(new PinoLogger({ pinoHttp: {} })) }
  );

  const APP_NAME = process.env.npm_package_name;

  const options = new DocumentBuilder()
    .setTitle(APP_NAME)
    .setDescription(`The ${APP_NAME} API description`)
    .setVersion('1.0.0')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('swagger', app, document);

  const port = 3000;
  await app.listen(port);
  Logger.log('Application listening on port ${port}', port);
}
bootstrap();
