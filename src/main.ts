import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as helmet from 'helmet';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: { origin: true } });
  app.use(helmet());
  await app.listen(3001);
  console.log('Listening to port 3001');
}
bootstrap();
