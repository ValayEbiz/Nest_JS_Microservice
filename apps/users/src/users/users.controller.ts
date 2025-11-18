import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

@Controller('users')
export class UsersController {

    @MessagePattern('get-user')
    getUser(id: number) {
        return { message: "User fetched successfully.", user: { id: Number(id), name: 'Leo Caprio', email: 'leocaprio@gmail.com' } }
    }

}
