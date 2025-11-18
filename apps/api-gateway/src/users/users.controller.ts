import { Controller, Get, Inject, Param } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { INTERNAL_SERVICES } from '../constants';

@Controller('users')
export class UsersController {

    constructor(
        @Inject(INTERNAL_SERVICES.USERS) private userServiceClient: ClientProxy
    ) { }

    @Get("/:id")
    getUser(@Param("id") id: number) {
        return this.userServiceClient.send("get-user", id);
    }

}
