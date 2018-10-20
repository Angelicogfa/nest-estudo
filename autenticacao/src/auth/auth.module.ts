import { Module } from '@nestjs/common';
import { AuthController } from './controllers/auth.controller';
import { CommonModule } from '../common/common.module';
import { PassportStrategyModule } from '../common/security/security.module';


@Module({
  imports: [CommonModule, PassportStrategyModule],
  controllers: [AuthController]
})
export class AuthModule { }
