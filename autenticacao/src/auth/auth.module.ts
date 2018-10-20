import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { HttpStrategy } from './http.strategy';
import { UsersModule } from '../users/users.module';
import { UsersService } from '../users/users.service';
import { JwtAutGuard } from './jwt-aut.guard';

@Module({
  imports: [UsersModule],
  providers: [AuthService, HttpStrategy, UsersService, JwtAutGuard]
})
export class AuthModule { }
