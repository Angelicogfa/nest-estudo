import { Module } from '@nestjs/common';
import { AuthService } from './services/auth.service';
import { HttpStrategy } from './strategys/http-strategy';
import { UsersModule } from 'users/users.module';

@Module({
  imports: [UsersModule],
  providers: [AuthService, HttpStrategy]
})
export class AuthModule {}
