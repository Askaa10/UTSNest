import { Injectable } from "@nestjs/common";
import { query } from "express";

@Injectable()
export class LatihanService {
    findAll(query:any) {
        return {
            msg : "Latihan service",
            params : query
        };
    }

    findDetail(id : string, name : string) {
        return {
            method : "get",
            id : id,
            name : name
        }
    }

    register(payload : any) {
        return {
            method : "post",
            payload : payload
        }
    }
}
