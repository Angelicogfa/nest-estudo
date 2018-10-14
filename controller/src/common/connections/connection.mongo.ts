// A conexão que será exportada como dependencia para um provider
export interface IMongoConnection {
    url: string,
    ssl: true
}

export const Conexao: IMongoConnection = {
    url: 'mongodb://localhost:27017',
    ssl: true
}

// O provider que persiste a conexao
export const ConexaoMongoProvider = {
    provide: 'ConexaoMongo',
    useValue: Conexao,
}