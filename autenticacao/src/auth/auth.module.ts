import { Module } from '@nestjs/common';
import { AuthService } from './services/auth.service';
import { HttpStrategy } from './strategys/http-strategy';
import { UsersModule } from 'users/users.module';
import { PassportModule } from '@nestjs/passport';
import { AuthController } from './auth.controller';

export const passportModulo = PassportModule.register({ defaultStrategy: 'bearer' });

@Module({
  imports: [
    passportModulo,
    UsersModule],
  providers: [AuthService, HttpStrategy],
  exports: [passportModulo],
  controllers: [AuthController]
})
export class AuthModule { }
