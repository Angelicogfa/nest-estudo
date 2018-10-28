import { Module } from '@nestjs/common';
import { PhotoModule } from 'photo/photo.module';
import { PhotoService } from 'photo/services/photo.service';

@Module({
  imports: [PhotoModule],
  providers: [PhotoService],
})
export class AppModule {}
