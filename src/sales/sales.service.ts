import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Sale } from './schemas/sale.schema';

@Injectable()
export class SalesService {
  constructor(@InjectModel(Sale.name) private saleModel: Model<Sale>) {}

  async findAll(): Promise<Sale[]> {
    return this.saleModel.find().exec();
  }

  async create(sale: Sale): Promise<Sale> {
    const createdSale = new this.saleModel(sale);
    return createdSale.save();
  }
}
