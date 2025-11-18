import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OrdersController } from './orders/orders.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { INTERNAL_SERVICES } from '../constants';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: INTERNAL_SERVICES.RedisProductService,
        transport: Transport.REDIS,
        options: {
          host: 'localhost',
          port: 6379
        }
      }
    ])
  ],
  controllers: [AppController, OrdersController],
  providers: [AppService],
})
export class AppModule { }
