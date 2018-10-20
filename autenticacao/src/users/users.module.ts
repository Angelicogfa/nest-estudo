import { Module, forwardRef } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { AuthModule } from 'auth/auth.module';

@Module({
  providers: [UsersService],
  controllers: [UsersController]
})
export class UsersModule { }
