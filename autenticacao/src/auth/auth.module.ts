import { Module } from '@nestjs/common';
import { AuthController } from './controllers/auth.controller';
import { CommonModule } from '../common/common.module';


@Module({
  imports: [CommonModule],
  controllers: [AuthController]
})
export class AuthModule { }
