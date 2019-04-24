import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';


//import{ reflect-metadata };
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000); // conectarse  a la api por el puerto localhost:3000
}
bootstrap();
