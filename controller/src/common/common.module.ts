import { Module } from '@nestjs/common';
import { LoggerMiddleware } from './middlewares/logger.middleware';
import { AuthGuard } from './guards/auth.guard';
import { RolesGuard } from './guards/roles.guard';

@Module({
    imports:[LoggerMiddleware, AuthGuard, RolesGuard],
    exports: [LoggerMiddleware, AuthGuard, RolesGuard]
})
export class CommonModule {}
