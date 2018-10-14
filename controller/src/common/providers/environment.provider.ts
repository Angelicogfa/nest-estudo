export class DevelopmentService {

}

export class ProductionService {

}

export const configServiceProvider = {
    provide: 'ConfigService',
    useClass: process.env.NODE_ENV === 'development' ?
        DevelopmentService :
        ProductionService
};

