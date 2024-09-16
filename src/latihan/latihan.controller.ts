import { Body, Controller, Get, Param, Post, Query, Put, Injectable } from '@nestjs/common';
import { query } from 'express';
import { get } from 'http';
import { LatihanService } from './latihan.service';

@Controller('latihan1')
export class LatihanController {

    constructor(
        private readonly latihanService : LatihanService
    ) {}

    
    @Get()
    findAll(@Query()query:any) {
        return this.latihanService.findAll(query)
    }
    
    @Get('detail/:id/:name')
    detail(@Param('id')id : string, @Param('name')name : string) {
        return this.latihanService.findDetail(id, name)
    }

    @Post("simpan")
    register(@Body() payload:any){
        return this.latihanService.register(payload)    
    }


    //tugas #1
    @Put('upate/:id')
    put(@Param('id') id : number, @Body() payload : any){ {
        return{
            method : "PUT",
            id : `${id}`,
            payload : payload
        }
    }    
    }

    
}
