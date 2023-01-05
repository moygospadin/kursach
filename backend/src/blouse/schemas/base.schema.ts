import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type BaseDocument = Blouse & Document;

@Schema({
  timestamps: { createdAt: "created", updatedAt: "updated" },
})
export class Blouse {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  document: string;
  @Prop()
  documentPath: string;
}

export const BaseSchema = SchemaFactory.createForClass(Blouse);
