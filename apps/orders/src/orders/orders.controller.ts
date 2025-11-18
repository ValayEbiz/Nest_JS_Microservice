import { Controller, Inject } from '@nestjs/common';
import { ClientProxy, MessagePattern } from '@nestjs/microservices';
import { INTERNAL_SERVICES } from '../../constants';

@Controller('orders')
export class OrdersController {
    constructor(@Inject(INTERNAL_SERVICES.RedisProductService) private productRedisService: ClientProxy) { }

    @MessagePattern('create_orders')
    createOrders(order: any) {
        this.productRedisService.emit('order.create', order)
        return ({ message: "Orders created successfully!", createdOrder: { id: Number((Math.random() * 10).toFixed(0)), ...order } })
    }
}
