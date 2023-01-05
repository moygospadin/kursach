import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type BaseDocument = Cardigan & Document;

@Schema({
  timestamps: { createdAt: "created", updatedAt: "updated" },
})
export class Cardigan {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  document: string;
  @Prop()
  documentPath: string;
}

export const CardiganSchema = SchemaFactory.createForClass(Cardigan);
