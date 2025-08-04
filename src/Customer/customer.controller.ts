import {Body,Get,Post,Controller, UsePipes, ValidationPipe,UseInterceptors,UploadedFile} from '@nestjs/common'
import { CustomerService } from './customer.service';
import { CustomerDTO } from './DTO/customer.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage,MulterError } from 'multer';

@Controller('Customer')
export class CustomerController{
constructor (private readonly customer_Service_obj : CustomerService){}

// Customer Profile
@Get('profile')
ProfileFunc ():string{
    return this.customer_Service_obj.profileFunc(); 
}

// Customer Create
@Post('create-customer')
@UsePipes(new ValidationPipe())  // for validation DTO class use this decorator
CreateCustomer(@Body() data:CustomerDTO):CustomerDTO{
    console.log(data)
    return this.customer_Service_obj.createCustomer(data);
}


// For file uploads
@Post('uploads')
@UseInterceptors(FileInterceptor('file',
    {
        fileFilter:(req,file,cb) =>{
            if(file.originalname.match(/^.*\.(jpg|png|webp|jpeg|pdf)$/)){
                cb(null,true);
            }else{
                cb(new MulterError('LIMIT_UNEXPECTED_FILE', 'image'), false);
            }
        },
        limits:{fileSize:5000000},
        storage:diskStorage({destination:'./uploads',
            filename:function(req,file,cb){
                cb(null,Date.now()+file.originalname);
            },
        })
    }))
uploadFile(@UploadedFile() file:Express.Multer.File){
console.log(file);
}




}
