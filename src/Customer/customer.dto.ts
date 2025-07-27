import { CustomerName } from "./UserDefined_Validator/name.validator";
import { IsPassword } from "./UserDefined_Validator/password.validator";
import { IsString,Matches } from "class-validator";



export class CustomerDTO{

    @CustomerName()   //Custom validator
    name:string;

    @IsPassword()    //Custom validator
    password:string;

    @Matches(/^01\d{9}$/,{message: 'Phone number must start with 01 and contain only 11 digits'}) 
    @IsString()
    phone:string;


} 