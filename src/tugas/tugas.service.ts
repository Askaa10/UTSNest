import { Injectable } from '@nestjs/common';

@Injectable()
export class TugasService {

    getTugas1(query:any){ 
        return{
            message : "Succes",
            'Filter':{
                "page" : 1,
                "page_size" : 10
        }   
    }
}

getTugas2(id){ 
    return {
        "status" : "success",
        "data" : id,
        "msg" : `user dengan id ${id} berhasil di temukan`
    }
}

    getTugas3(payload:any){
        return  {
            method : "post",
            status : "succes",
            msg : "Berhasil disimpan",
            payload : {
                "nama konsumen" : "budi",
                "alamat konsumen" : "kebon sari",
                "email" : "dksao@gmail.com",
                "nomor" : "123213"
            }
        }
    }

    getTugas4(id){
        return {
            "status" : "success",
            "msg" : `user dengan id ${id} berhasil di hapus`
        }
    }
}