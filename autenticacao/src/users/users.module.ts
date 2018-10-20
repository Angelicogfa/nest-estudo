import { Module, forwardRef } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [ PassportModule.register({ defaultStrategy: 'bearer' })],
  providers: [UsersService],
  controllers: [UsersController]
})
export class UsersModule { }
