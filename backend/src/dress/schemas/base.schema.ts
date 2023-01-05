import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type BaseDocument = Dress & Document;

@Schema({
  timestamps: { createdAt: "created", updatedAt: "updated" },
})
export class Dress {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  document: string;
  @Prop()
  documentPath: string;
}

export const BaseSchema = SchemaFactory.createForClass(Dress);
