import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
  UseInterceptors,
  UploadedFile,
} from "@nestjs/common";
import { BaseService } from "./base.service";
import { CreateBaseDto } from "./dto/create-base.dto";
import { UpdateBaseDto } from "./dto/update-base..dto";
import { FileInterceptor } from "@nestjs/platform-express";
import { BASE_URL } from "src/config";
import { editFileName } from "src/utils";

import { diskStorage } from "multer";

import { writeFile } from "fs";
import { resolve } from "path";

const htmlDocx = require("html-docx-js");

@Controller("sweater")
export class BaseController {
  constructor(private readonly BaseService: BaseService) {}

  @Post()
  create(@Body() createMenuDto: CreateBaseDto) {
    return this.BaseService.create(createMenuDto);
  }

  @Get()
  findAll() {
    return this.BaseService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.BaseService.findOne(id);
  }

  @Put(":id")
  update(@Param("id") id: string, @Body() updateBaseDto: UpdateBaseDto) {
    return this.BaseService.update(id, updateBaseDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.BaseService.remove(id);
  }

  @Get("generate/:id")
  async generateDocument(@Param("id") id: string) {
    const document = await this.BaseService.findOne(id);

    const converted = htmlDocx.asBlob(document.document);
    const fileName = `${+new Date()}.docx`;

    const documentPath = resolve(__dirname, `../../files/${fileName}`);

    await new Promise((resolve, reject) => {
      writeFile(documentPath, converted, (err) => {
        if (err) {
          reject(err);
          return;
        }
        resolve(true);
      });
    });

    const doc = await this.BaseService.update(id, {
      documentPath: fileName,
    });

    return { doc };
  }

  @Post("uploadImage")
  @UseInterceptors(
    FileInterceptor("upload", {
      storage: diskStorage({
        destination: "./files",
        filename: editFileName,
      }),
    })
  )
  async uploadedFile(@UploadedFile() file) {
    const response = {
      uploaded: true,
      url: `${BASE_URL}/${file.filename}`,
    };
    return response;
  }
}
