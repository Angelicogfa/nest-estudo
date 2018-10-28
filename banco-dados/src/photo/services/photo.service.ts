import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { PhotoEntity } from 'photo/entity/photo.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Photo } from 'photo/model/photo.model';

@Injectable()
export class PhotoService {

    constructor(@InjectRepository(PhotoEntity) private readonly photoRepository: Repository<PhotoEntity>) { }

    async findAll(): Promise<Photo[]>{
        return <Photo[]> await this.photoRepository.find();
    }
}
