import { Module } from "@nestjs/common";

import { MongooseModule } from "@nestjs/mongoose";
import { BaseController } from "./base.controller";
import { BaseService } from "./base.service";
import { Snowsuit, BaseSchema } from "./schemas/base.schema";

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Snowsuit.name,
        schema: BaseSchema,
      },
    ]),
  ],
  controllers: [BaseController],
  providers: [BaseService],
})
export class SnowsuitModule {}
