import { Injectable } from '@nestjs/common';
import { FindSiswaDTO } from './siswa.DTO';
import { Like } from 'typeorm';
import { siswa } from './siswa.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ResponsePagination, ResponseSuccess } from 'src/interface';
import BaseResponse from 'src/utils/response.utils';
@Injectable()
export class SiswaService {
    constructor(
        @InjectRepository(siswa) private readonly siswaRepository: Repository<siswa>,
      ) {}
    async findAllSiswa(query: FindSiswaDTO) {


        const { page, pageSize , limit, nama ,alamat, tempat_lahir,tanggal_lahir, nisn, nik, keyword } = query;
        const filter : {
            [key : string]: any;
          } = {};
      
          const search : {
            [key : string]: any;
          }[] = [];


          if(query.keyword){
            search.push({
              nama : Like (`%${query.keyword}%`)
            },
            {
              tempat_lahir : Like (`%${query.keyword}%`)
            },
            {
              nisn : Like (`%${query.keyword}%`)
            },
            {
              nik : Like (`%${query.keyword}%`)
            }
          )
          }if(nama){
            filter.tittle = Like (`%${nama}%`) 
            }
            if(tempat_lahir){
              filter.author = Like (`%${tempat_lahir}%`) 
            }
            if(tanggal_lahir){
              filter.deskripsi = Like (`%${tanggal_lahir}%`) 
            }
            if(nisn){
                filter.deskripsi = Like (`%${nisn}%`) 
            }
            if(nik){
                filter.deskripsi = Like (`%${nik}%`) 
            }
            if(alamat){
                filter.alamat = Like (`%${alamat}%`)
            }
            

            console.log(query);
            console.log("filter", filter);
            console.log("search", search);


            const result = await this.siswaRepository.find({
                where: keyword ? search : filter,
                skip: limit,
                take: Number(pageSize)
            });
          
              const total = await this.siswaRepository.count({
                where : filter
              });
          
              return {
                result,
                total
              }
    }


    async findAll(){
        return this.siswaRepository.find();
    }
}
