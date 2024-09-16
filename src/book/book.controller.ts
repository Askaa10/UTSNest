import { Body, Controller, Get, Param, Post, Put, Delete, Query } from '@nestjs/common';
import { BookService } from './book.service';
import { Any } from 'typeorm';
import { createBookDto, findBookDto, updateBookDto } from './book.DTO';
import { Pagination } from 'src/utils/decorator/pagination.decorator';

@Controller('book')
export class BookController {
    constructor(private bookService : BookService){}
       

        
        @Get('list')
        async findAllBook(@Pagination() query : findBookDto) {
            return this.bookService.findAllBook(query);}

            @Get('detail/:id')
            async detail(@Param('id') id : number){ {
                return this.bookService.detail(+id);
            }
        }
            
        @Post('create')
        async createBook(@Body() payload : createBookDto,){
            return this.bookService.create(payload);
        }

        @Delete("delete/:id")
            async deleteBook(@Param("id") id:number){
                return this.bookService.delete(+id);
            }

        @Delete("delete")
        async deleteMultiple(@Query("id") id:string){
            const idArray = id.split(",");
            return this.bookService.deleteMultiple(idArray);
        }
        
        @Put("update/:id")
        async update(@Body() payload : updateBookDto, @Param('id') id : number,){
            return this.bookService.update(+id, payload);
        }

}

