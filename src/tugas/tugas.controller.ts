import { Controller, Get, Put, Post, Param, Body, Delete } from '@nestjs/common';
import { get } from 'http';
import { TugasService } from './tugas.service';
import { query } from 'express';

@Controller('tugas')
export class TugasController {
    constructor(
        private readonly tugasService : TugasService
    ) {}

    //soal no 1
    @Get("List")
    getTugas1(){
        return this.tugasService.getTugas1(query)
    }

    @Get("detail/:id")
    getTugas2(@Param('id')id : string,) {
        return this.tugasService.getTugas2(id)
    }

    @Post("simpan")
    getTugas3(@Body() payload:any){
        return this.tugasService.getTugas3(payload)
    }

    @Delete("delete/:id")
    getTugas4(@Param('id')id : string){
        return this.tugasService.getTugas4(id)
    }
}




