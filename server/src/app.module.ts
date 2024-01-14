import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BooksModule } from './books/books.module';
import { MongooseModule } from '@nestjs/mongoose';
import { CountriesBigModule } from './countries-big/countries-big.module';
import { MongooseConfigService } from './database/mongoose-config.service';
import { ConfigModule } from '@nestjs/config';
import databaseConfig from './config/database.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [databaseConfig],
      envFilePath: ['.env'],
    }),
    MongooseModule.forRootAsync({
      useClass: MongooseConfigService,
    }),
    BooksModule,
    CountriesBigModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
