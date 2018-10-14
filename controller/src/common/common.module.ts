import { Module, CacheInterceptor } from '@nestjs/common';
import { LoggerMiddleware } from './middlewares/logger.middleware';
import { AuthGuard } from './guards/auth.guard';
import { RolesGuard } from './guards/roles.guard';
import { LoggingInterceptor } from './interceptors/logging.interceptor';
import { TransformeInterceptor } from './interceptors/transforme.interceptor';
import { ExcludeNullInterceptor } from './interceptors/exclude-null.interceptor';
import { ErrorInterceptor } from './interceptors/error.interceptor';
import { ConexaoMongoProvider } from './connections/connection.mongo';

const providers =
[
    LoggerMiddleware,
    AuthGuard,
    RolesGuard,
    LoggingInterceptor,
    TransformeInterceptor,
    ExcludeNullInterceptor,
    ErrorInterceptor
    
];

const exports_services = 
[
    LoggerMiddleware,
    AuthGuard,
    RolesGuard,
    LoggingInterceptor,
    TransformeInterceptor,
    ExcludeNullInterceptor,
    ErrorInterceptor
    
];

@Module({
    providers: [...providers, ConexaoMongoProvider],
    exports: [...exports_services],
})
export class CommonModule { }
