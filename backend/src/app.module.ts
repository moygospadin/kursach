import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { MongooseModule } from "@nestjs/mongoose";

import { MONGODB_URL } from "./config";

import { join } from "path";
import { ServeStaticModule } from "@nestjs/serve-static";
import { DressModule } from "./dress/base.module";
import { SnowsuitModule } from "./snowsuit/base.module";
import { CardiganModule } from "./cardigan/base.module";
import { BlouseModule } from "./blouse/base.module";
import { ShirtModule } from "./shirt/base.module";
import { SweaterModule } from "./sweater/base.module";

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, "..", "files"),
      exclude: ["/api*"],
    }),
    MongooseModule.forRoot(MONGODB_URL),
    DressModule,
    SnowsuitModule,
    CardiganModule,
    BlouseModule,
    ShirtModule,
    SweaterModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
