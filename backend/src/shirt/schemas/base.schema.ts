import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type BaseDocument = Shirt & Document;

@Schema({
  timestamps: { createdAt: "created", updatedAt: "updated" },
})
export class Shirt {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  document: string;
  @Prop()
  documentPath: string;
}

export const BaseSchema = SchemaFactory.createForClass(Shirt);
