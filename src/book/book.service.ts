import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Any, Between, Like, Repository } from 'typeorm';
import { title } from 'process';
import { ResponsePagination, ResponseSuccess } from 'src/interface';
import BaseResponse from 'src/utils/response.utils';
import { createBookDto, findBookDto, updateBookDto } from './book.DTO';
import { Query } from 'typeorm/driver/Query';
import { skip } from 'node:test';
import { from } from 'rxjs';
import { book } from './book.entity';

@Injectable()
export class BookService extends BaseResponse {
  constructor(
    @InjectRepository(book) private readonly bookRepository: Repository<book>,
  ) {
    super();
  }

  //disini kita akan membuat api untuk mengakses semua data di tabel book
  async findAllBook(query : findBookDto): Promise<ResponsePagination>  {
    const { page, PageSize , limit, tittle , author, from_year, to_year, deskripsi, keyword } = query;

    const filter : {
      [key : string]: any;
    } = {};

    const search : {
      [key : string]: any;
    }[] = [];

    if(keyword){
      search.push({
        tittle : Like (`%${keyword}%`)
      },
      {
        author : Like (`%${keyword}%`)
      },
      {
        deskripsi : Like (`%${keyword}%`)
      },
      {
        year : Like (`%${keyword}%`)
      }
    )
    }else{
      if(tittle){
        filter.tittle = Like (`%${tittle}%`) 
        }
        if(author){
          filter.author = Like (`%${author}%`) 
        }
        if(deskripsi){
          filter.deskripsi = Like (`%${deskripsi}%`) 
        }
        if(from_year && to_year){
          filter.year = Between (from_year , to_year) 
        }
        if(from_year && !to_year){
          filter.year = Between (from_year , from_year) 
        }
    }

    if(tittle){
    filter.tittle = Like (`%${tittle}%`) 
    }
    if(author){
      filter.author = Like (`%${author}%`) 
    }
    if(deskripsi){
      filter.deskripsi = Like (`%${deskripsi}%`) 
    }
    if(from_year && to_year){
      filter.year = Between (from_year , to_year) 
    }
    if(from_year && !to_year){
      filter.year = Between (from_year , from_year) 
    }
    
    
    console.log(query);
    console.log("filter", filter);
    console.log("search", search);

    // const page = query.page;
    // const page_size = query.page_size;
    const result = await this.bookRepository.find({
      where: keyword ? search : filter,
      skip : limit,
      take : Number(PageSize)
    }
    );

    const total = await this.bookRepository.count({
      where : filter
    });

    return this._pagination("success", result, total, page, PageSize);
  }

  //menambahkan buku
  async create(payload: createBookDto): Promise<ResponseSuccess> {
    try {
      const save = await this.bookRepository.save(payload);
      return this._success('Data buku berhasil', save);
      
    } catch (error) {
      throw new HttpException('Ada yang salah', HttpStatus.BAD_REQUEST);
    } finally {
      console.log('proses selesai');
    }
  }

  async detail(id: number): Promise<ResponseSuccess> {
    const FindDetail = await this.bookRepository.findOne({
      
      where: {
        id: id,
      },
    });

    if (FindDetail === null) {
      throw new NotFoundException('data tidak ditemukan');
    }
    return this._success('Data buku berhasil', FindDetail);
    
    
  }

  //
  async update(
    id: number,
    payload: updateBookDto,
  ): Promise<ResponseSuccess> {
    try {
      const result = await this.bookRepository.update(id, payload,) 
      return this._success('Data buku berhasil', result);

      
    } catch (error) {
      console.log(error);
      throw new HttpException('Ada yang salah', HttpStatus.BAD_REQUEST);
    }
  }

  //
  async delete(id: number): Promise<ResponseSuccess> {
    const deleted = await this.bookRepository.delete(id);
    if (deleted.affected === 0) {
      throw new HttpException('Sudah tidak ada data', HttpStatus.NOT_FOUND);
    }
      return this._success('Data buku berhasil', deleted);

    
  }

async deleteMultiple(array : string[]): Promise<ResponseSuccess> {                              
    const deleted = await this.bookRepository.delete(array);
    if (deleted.affected === 0) {
      throw new HttpException('Data sudah tidak ada', HttpStatus.NOT_FOUND);
    }
    return this._success('Data buku berhasil', deleted);
  }
  }