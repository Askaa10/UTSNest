import { OmitType } from "@nestjs/mapped-types"
import { IsInt, IsNotEmpty, IsOptional, Length, Max, Min, MinLength,  } from "class-validator"
import { Type } from "class-transformer"



export class bookDTO{
    @IsOptional()
    id : number

    @IsNotEmpty({message : "title wajib diisi"})
    @Length(5,100,{message : "title minimal 5 karakter"})
    tittle : string
    
    @IsNotEmpty()
    author : string
    
    @IsInt()
    @Min(2020 ,{message : "tahun minimal 2020"})
    @Max(2024, {message : "tahun maksimal 2024"})
    year: number;

    @IsNotEmpty()
    @MinLength(10)
    deskripsi : string

    @IsOptional()
    @IsInt()
    @Type(() => Number)
    from_year : number
    
    @IsOptional()
    @IsInt()
    @Type(() => Number)
    to_year : number
}

export class createBookDto extends OmitType(bookDTO, ['id']){}
export class updateBookDto extends bookDTO{}

export class findBookDto { 
    @IsInt()
    @Type(() => Number)
    page= 1;

    @IsInt()
    @Type(() => Number)
    PageSize= 10;

    @IsOptional()
    @IsInt()
    limit: number

    @IsOptional()
    tittle: string

    @IsOptional()
    author: string

    @IsOptional()
    deskripsi: string

    @IsOptional()
    @IsInt()
    @Type(() => Number) 
    from_year:number

    @IsOptional()
    @IsInt()
    @Type(() => Number)
    to_year:number

    @IsOptional()
    keyword: string


}