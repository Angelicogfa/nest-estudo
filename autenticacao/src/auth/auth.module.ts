import { Module, DynamicModule } from '@nestjs/common';
import { AuthService } from './auth.service';
import { HttpStrategy } from './strategys/http.strategy';
import { UsersModule } from '../users/users.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './auth.controller';
import { UsersService } from 'users/users.service';

const generateModulos = () => {

  const type: string = process.env.PASSPORT_TYPE ? process.env.PASSPORT_TYPE : 'bearer';
  let modulos: DynamicModule[];

  if (type === 'jwt') {
    modulos = [
      PassportModule.register({ defaultStrategy: 'jwt' }),
      JwtModule.register({
        secretOrPrivateKey: 'secretKey',
        signOptions: {
          expiresIn: 3600
        }
      })
    ];
  }
  else {
    modulos = [PassportModule.register({ defaultStrategy: 'bearer' })]
  }
  return modulos;
}

export const passportModule: DynamicModule[] = generateModulos();


@Module({
  imports: [...passportModule, UsersModule],
  providers: [AuthService, HttpStrategy, UsersService],
  controllers: [AuthController],
  exports: passportModule
})
export class AuthModule {
}


