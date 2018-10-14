import { Inject, Injectable } from "@nestjs/common";
import { IMongoConnection } from "common/connections/connection.mongo";

@Injectable()
export class CatsRepository {

    constructor(@Inject('ConexaoMongo') connection: IMongoConnection) {

    }

}