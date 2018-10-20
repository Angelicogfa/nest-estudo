import { Module } from '@nestjs/common';
import { UsersService } from './services/users.service';
import { passportModulo } from 'auth/auth.module';

@Module({
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}
