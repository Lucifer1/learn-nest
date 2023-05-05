import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Sale extends Document {
  @Prop()
  item: string;

  @Prop()
  price: number;

  @Prop()
  quantity: number;
}

export const SaleSchema = SchemaFactory.createForClass(Sale);
