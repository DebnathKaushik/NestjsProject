import { ISEmail } from "../UserDefined_Validator/email.validator";
import { Gender } from "../UserDefined_Validator/gender.validator";
import { CustomerName } from "../UserDefined_Validator/name.validator";
import { IsPassword } from "../UserDefined_Validator/password.validator";
import { IsString,Matches } from "class-validator";



export class CustomerDTO{

    @CustomerName()   //Custom validator
    name:string;

    @ISEmail()       // Custom validator
    email:string

    @IsPassword()    //Custom validator
    password:string;

    @Matches(/^01\d{9}$/,{message: 'phone number must have 01 first and 11 digits'}) 
    @IsString()
    phone:string;

    @Gender()       //Custom validator
    gender:string;


} 