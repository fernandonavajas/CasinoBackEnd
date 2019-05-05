import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from './logger.middleware';


//import{ reflect-metadata };
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(Logger);
  app.enableCors();
  
  await app.listen(3000); // conectarse  a la api por el puerto localhost:3000
}
bootstrap();
