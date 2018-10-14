import { NestFactory, Reflector, APP_FILTER } from '@nestjs/core';
import { AppModule } from './app.module';
import { AuthGuard } from './common/guards/auth.guard';
import { RolesGuard } from './common/guards/roles.guard';
import { ArgumentOutOfRangeError } from 'rxjs';
import { TransformeInterceptor } from './common/interceptors/transforme.interceptor';
import { ExcludeNullInterceptor } from './common/interceptors/exclude-null.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalGuards(new AuthGuard(), new RolesGuard(new Reflector()));
  app.useGlobalInterceptors(new TransformeInterceptor(), new ExcludeNullInterceptor());
  await app.listen(3000);
}
bootstrap();
