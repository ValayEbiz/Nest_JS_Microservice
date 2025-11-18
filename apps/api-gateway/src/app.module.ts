import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { INTERNAL_SERVICES } from './constants';
import { OrdersController } from './orders/orders.controller';
import { ProductsController } from './products/products.controller';
import { UsersController } from './users/users.controller';

@Module({
  imports: [
    ClientsModule.register(
      [
        {
          name: INTERNAL_SERVICES.ORDERS, transport: Transport.TCP, options: {
            port: 4001
          }
        },
        {
          name: INTERNAL_SERVICES.PRODUCTS, transport: Transport.TCP, options: {
            port: 4002
          }
        },
        {
          name: INTERNAL_SERVICES.USERS, transport: Transport.TCP, options: {
            port: 4003
          }
        }
      ]
    )
  ],
  controllers: [AppController, OrdersController, ProductsController, UsersController],
  providers: [AppService],
})
export class AppModule { }
