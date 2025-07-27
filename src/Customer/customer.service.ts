import { Injectable } from "@nestjs/common";
import { CustomerDTO } from "./customer.dto";

@Injectable()
export class CustomerService{

profileFunc():string{
    return "Customer Profile Page"
}

createCustomer(data:CustomerDTO):CustomerDTO{
    return {name:data.name, password:data.password, phone:data.phone};
}





}