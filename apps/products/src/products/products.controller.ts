import { Controller } from '@nestjs/common';
import { EventPattern, MessagePattern } from '@nestjs/microservices';

@Controller('products')
export class ProductsController {

    @MessagePattern('get_product')
    getProductById(id: number) {
        return { message: 'Product fetch sucessfully', product: { id: Number(id), name: 'Mac M5', type: 'Electronic Device' } }
    }

    @EventPattern('order.create')
    async updateStock(order: { id: number, productId: number }) {
        console.log('Chceking stock for the product:', order.productId)

        console.log('Stock Updated!')
    }

}
