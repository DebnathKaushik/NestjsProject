import { Injectable } from "@nestjs/common";
import { CustomerDTO } from "./DTO/customer.dto";

@Injectable()
export class CustomerService{

profileFunc():string{
    return "Customer Profile Page"
}

createCustomer(data:CustomerDTO):CustomerDTO{
    return {name:data.name, email:data.email, password:data.password, phone:data.phone , gender:data.gender};
}





}