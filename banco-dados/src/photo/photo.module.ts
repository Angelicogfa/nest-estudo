import { Module } from '@nestjs/common';
import { CommonModule } from 'common/common.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PhotoEntity } from 'photo/entity/photo.entity';
import { PhotoService } from 'photo/services/photo.service';

@Module({
    imports: [CommonModule, TypeOrmModule.forFeature([PhotoEntity])],
    providers: [PhotoService]
})
export class PhotoModule {

}
