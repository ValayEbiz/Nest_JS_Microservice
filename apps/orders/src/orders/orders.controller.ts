import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

@Controller('orders')
export class OrdersController {

    @MessagePattern('create_orders')
    createOrders(order: any) {
        return ({ message: "Orders created successfully!", createdOrder: { id: Number((Math.random() * 10).toFixed(0)), ...order } })
    }
}
