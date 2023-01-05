import { Module } from "@nestjs/common";

import { MongooseModule } from "@nestjs/mongoose";
import { BaseController } from "./base.controller";
import { BaseService } from "./base.service";
import { Cardigan, CardiganSchema } from "./schemas/base.schema";

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Cardigan.name,
        schema: CardiganSchema,
      },
    ]),
  ],
  controllers: [BaseController],
  providers: [BaseService],
})
export class CardiganModule {}
