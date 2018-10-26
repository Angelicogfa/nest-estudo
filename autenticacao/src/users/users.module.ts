import { Module, forwardRef } from '@nestjs/common';
import { UsersService } from './services/users.service';
import { UsersController } from './controllers/users.controller';
import { CommonModule } from './../common/common.module';

@Module({
  providers: [UsersService],
  imports: [forwardRef(()=> CommonModule)],
  exports: [UsersService],
  controllers: [UsersController],
})
export class UsersModule {}
