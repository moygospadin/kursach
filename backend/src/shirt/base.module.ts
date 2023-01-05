import { Module } from "@nestjs/common";

import { MongooseModule } from "@nestjs/mongoose";
import { BaseController } from "./base.controller";
import { BaseService } from "./base.service";
import { Shirt, BaseSchema } from "./schemas/base.schema";

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Shirt.name,
        schema: BaseSchema,
      },
    ]),
  ],
  controllers: [BaseController],
  providers: [BaseService],
})
export class ShirtModule {}
