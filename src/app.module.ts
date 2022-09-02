import { Module } from '@nestjs/common';
import { MongooseModule } from "@nestjs/mongoose";
import { MessageModule } from './message/message.module';

@Module({
  imports: [
    MessageModule,
    MongooseModule.forRoot('mongodb+srv://admin:ofeubBVIyL75Z3qk@cluster0.0pwuxxt.mongodb.net/messageBottleDB'),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
