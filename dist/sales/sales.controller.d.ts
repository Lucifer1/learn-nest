import { SalesService } from './sales.service';
import { Sale } from './schemas/sale.schema';
export declare class SalesController {
    private readonly salesService;
    constructor(salesService: SalesService);
    findAll(): Promise<Sale[]>;
    create(sale: Sale): Promise<Sale>;
}
