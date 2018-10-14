import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { CatsModule } from './cats/cats.module';
import { LoggerMiddleware } from './common/middlewares/logger.middleware';
import { CommonModule } from './common/common.module';
import { InterceptorsConsumer } from '@nestjs/core/interceptors/interceptors-consumer';

@Module({
  imports: [CatsModule, CommonModule]
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware)
      .forRoutes('cat');
  }
}
