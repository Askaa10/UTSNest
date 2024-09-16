import { OmitType } from "@nestjs/mapped-types"
import { IsInt, IsNotEmpty, IsOptional, Length, Max, Min, MinLength,  } from "class-validator"
import { Type } from "class-transformer"
import { PrimaryColumn } from "typeorm"
import { Unique } from "typeorm"
import { IsEmail } from "class-validator"

export class FindSiswaDTO { 
    @IsInt()
    @Type(() => Number)
    page = 1;

    @IsInt()
    @Type(() => Number)
    pageSize = 10;

    @IsOptional()
    @IsInt()
    limit: number;

    @IsOptional()
    nama: string;

    @IsOptional()
    alamat: string;


    @IsOptional()
    tempat_lahir: string;

    @IsOptional()
    tanggal_lahir: number;

    @IsOptional()
    nisn: number;

    @IsOptional()
    nik: string;

    @IsOptional()
    keyword: string;
}