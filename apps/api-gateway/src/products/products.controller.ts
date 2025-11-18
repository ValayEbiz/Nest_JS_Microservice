import { Controller, Get, Inject, Param } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { INTERNAL_SERVICES } from 'src/constants';

@Controller('products')
export class ProductsController {

    constructor(@Inject(INTERNAL_SERVICES.PRODUCTS) private productServiceClient: ClientProxy) { }

    @Get("/:id")
    getProduct(@Param("id") id: number) {
        return this.productServiceClient.send('get_product', id);
    }

}
