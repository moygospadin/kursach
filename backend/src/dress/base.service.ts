import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { CreateBaseDto } from "./dto/create-base.dto";
import { UpdateBaseDto } from "./dto/update-base..dto";
import { Dress, BaseDocument } from "./schemas/base.schema";

@Injectable()
export class BaseService {
  constructor(
    @InjectModel(Dress.name)
    private readonly baseModel: Model<BaseDocument>
  ) {}

  async create(createMenuDto: CreateBaseDto): Promise<BaseDocument> {
    const base = new this.baseModel(createMenuDto);

    return base.save();
  }

  async findAll(): Promise<BaseDocument[]> {
    return this.baseModel.find();
  }

  findOne(id: string) {
    return this.baseModel.findById(id);
  }

  async update(
    id: string,
    updateBaseDto: UpdateBaseDto
  ): Promise<BaseDocument> {
    return this.baseModel.findByIdAndUpdate(id, updateBaseDto);
  }

  async remove(id: string) {
    return this.baseModel.findByIdAndRemove(id);
  }
}
