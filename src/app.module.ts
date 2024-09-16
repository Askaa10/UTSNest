import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LatihanModule } from './latihan/latihan.module';
import { TugasModule } from './tugas/tugas.module';
import { ConfigModule } from '@nestjs/config';
import { typeOrmConfig } from './config/typeorm.config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookModule } from './book/siswa.module';
import { UmrohModule } from './umroh/umroh.module';
import { SiswaModule } from './book/siswa.module';
import { SiswaModule } from './siswa/siswa.module';
import { UmrohController } from './umroh/umroh.controller';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      useFactory: async () => {
        const { typeOrmConfig } = await import('./config/typeorm.config');
        return typeOrmConfig;
      }
    }),
    TugasModule,
    LatihanModule,
    BookModule,
    UmrohModule,
    SiswaModule,
  ],
  controllers: [AppController, UmrohController],
  providers: [AppService],
  exports: [],
})
export class AppModule {}
