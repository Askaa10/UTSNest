import { Controller, Get, Post, Put, Delete, Patch } from '@nestjs/common';
import { AppService } from './app.service';
import { create } from 'domain';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  @Put ()
  update(): string{
    return "update data";
  }
  @Put ("Ter")
  update2(): string{
    return "update data baru";
  }


  @Post ()
  create(): string{
    return "ok";
  }
  @Post ("tes")
  create2(): string{
    return "ok tes";
  }

  @Get()
  getHello(): string {
    return "Belajar Routing Nest-Js";
  }
  @Get("list")
  getHello2(): string {
    return "Belajar Routing Nest-Js2";
  }
}


