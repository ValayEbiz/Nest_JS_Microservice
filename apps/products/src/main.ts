import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const productTCPMicroservice = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule,
    {
      transport: Transport.TCP,
      options: {
        port: 4002
      }
    }
  );
  const productRedisMicroservice = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule,
    {
      transport: Transport.REDIS,
      options: {
        host: "localhost",
        port: 6379
      }
    }
  )

  Promise.all([productTCPMicroservice.listen(), productRedisMicroservice.listen()])
  console.log("Products Service on 4002 and redis service running on 6379")
}
bootstrap();
