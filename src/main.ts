import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import { envs } from './config/env';

async function bootstrap() {

  const logger = new Logger('Supervisor-Gateway')

  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api');

  await app.listen(envs.port);
  logger.log(`Gateway running in port ${envs.port}`)
}
bootstrap();
