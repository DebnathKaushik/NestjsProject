import { Injectable } from "@nestjs/common";
import { SellerDTO } from "./seller.dto";

@Injectable()
export class SellerService {
  getProfile(): string {
    return "Seller Profile Page";
  }

  createSeller(data: SellerDTO): SellerDTO {
    return {
      name: data.name,
      email: data.email,
      nid: data.nid,
    };
  }
}
