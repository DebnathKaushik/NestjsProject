import {Controller,Post,Get,Body,UploadedFile,UseInterceptors,UsePipes,ValidationPipe,} from "@nestjs/common";
import { SellerService } from "./seller.service";
import { SellerDTO } from "./seller.dto";
import { FileInterceptor } from "@nestjs/platform-express";
import { diskStorage, MulterError } from "multer";

@Controller("seller")
export class SellerController {
  constructor(private readonly sellerService: SellerService) {}

  @Get("profile")
  getProfile(): string {
    return this.sellerService.getProfile();
  }

  @Post("create")
  @UsePipes(new ValidationPipe())
  createSeller(@Body() data: SellerDTO): SellerDTO {
    return this.sellerService.createSeller(data);
  }

  @Post("uploadfile")
  @UseInterceptors(
    FileInterceptor("file", {
      fileFilter: (req, file, cb) => {
        if (file.originalname.match(/^.*\.(jpg|jpeg|png|pdf)$/)) {
          cb(null, true);
        } else {
          cb(new MulterError("LIMIT_UNEXPECTED_FILE", "file"), false);
        }
      },
      limits: { fileSize: 5000000 }, // 5 MB
      storage: diskStorage({
        destination: "./uploads",
        filename: (req, file, cb) => {
          cb(null, Date.now() + "-" + file.originalname);
        },
      }),
    })
  )
  uploadNID(@UploadedFile() file: Express.Multer.File) {
    console.log(file);
    return { message: "NID uploaded successfully", file };
  }
}
