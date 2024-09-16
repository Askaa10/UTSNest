import { Controller, Get , Body, Post, Param, Query} from '@nestjs/common';
import { SiswaService } from './siswa.service';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { siswa } from './siswa.entity'; 
import { FindSiswaDTO } from './siswa.Dto';

@Controller('siswa')
export class SiswaController {
    constructor(
        @InjectRepository(siswa) private readonly siswaRepository: Repository<siswa>,
        private siswaService: SiswaService
    ) {}

    @Get()
    async findAll() {
        return this.siswaService.findAll();
    }

    @Get('list')
    async findAllSiswa(@Query() query: FindSiswaDTO) {
        return this.siswaService.findAllSiswa(query);
    }
}
