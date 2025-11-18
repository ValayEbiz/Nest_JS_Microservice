import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

@Controller('products')
export class ProductsController {

    @MessagePattern('get_product')
    getProductById(id: number) {
        return { message: 'Product fetch sucessfully', product: { id: Number(id), name: 'Mac M5', type: 'Electronic Device' } }
    }

}
