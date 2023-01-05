import { Module } from "@nestjs/common";

import { MongooseModule } from "@nestjs/mongoose";
import { BaseController } from "./base.controller";
import { BaseService } from "./base.service";
import { Blouse, BaseSchema } from "./schemas/base.schema";

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Blouse.name,
        schema: BaseSchema,
      },
    ]),
  ],
  controllers: [BaseController],
  providers: [BaseService],
})
export class BlouseModule {}
