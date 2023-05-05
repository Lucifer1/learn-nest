import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SalesService } from './sales.service';
import { SalesController } from './sales.controller';
import { Sale, SaleSchema } from './schemas/sale.schema';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://Lightman:66z37707@mycluster.hzvuf14.mongodb.net/LittleGaiGai?retryWrites=true&w=majority',
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        connectionFactory: (connection) => {
          connection.db.options.poolSize = 10; // 设置连接池的大小
          return connection;
        },
      },
    ),
    MongooseModule.forFeature([{ name: Sale.name, schema: SaleSchema }]),
  ],
  controllers: [SalesController],
  providers: [SalesService],
})
export class SalesModule {}
