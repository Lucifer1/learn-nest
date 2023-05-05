import { Model } from 'mongoose';
import { Sale } from './schemas/sale.schema';
export declare class SalesService {
    private saleModel;
    constructor(saleModel: Model<Sale>);
    findAll(): Promise<Sale[]>;
    create(sale: Sale): Promise<Sale>;
}
