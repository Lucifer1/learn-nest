import { Controller, Get, Post, Body } from '@nestjs/common';
import { SalesService } from './sales.service';
import { Sale } from './schemas/sale.schema';

@Controller('sales')
export class SalesController {
  constructor(private readonly salesService: SalesService) {}

  @Get()
  findAll(): Promise<Sale[]> {
    return this.salesService.findAll();
  }

  @Post()
  create(@Body() sale: Sale): Promise<Sale> {
    return this.salesService.create(sale);
  }
}
