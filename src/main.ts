import 'reflect-metadata';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { EurekaRegistryService } from './eureka/eureka.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // CORS is handled by the API gateway; enabling it here would cause
  // duplicate Access-Control-Allow-Origin headers in the browser.

  const port = Number(process.env.PORT) || 3001;
  await app.listen(port);

  const eureka = app.get(EurekaRegistryService);
  eureka.register(port);

  console.log(`transplant-service running on http://localhost:${port}`);
}
bootstrap();
