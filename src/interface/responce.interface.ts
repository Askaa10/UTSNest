import { error } from "console";

export interface ResponseSuccess {
    status: string;
    msg: string;
    data: any;
}
export interface ResponseError {
    status: string;
    msg: string;
}
export interface ResponsePagination extends ResponseSuccess{
    pagination : {
        total : number 
        page : number
        pageSize : number
        totalPage : number
    }
}

