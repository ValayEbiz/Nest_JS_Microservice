import { Body, Controller, Inject, Post } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { INTERNAL_SERVICES } from 'src/constants';

@Controller('orders')
export class OrdersController {

    constructor(
        @Inject(INTERNAL_SERVICES.ORDERS)
        private ordersServiceClinet: ClientProxy
    ) { }

    @Post()
    createOrder(@Body() order: any) {
        return this.ordersServiceClinet.send('create_orders', order)
    }

}
