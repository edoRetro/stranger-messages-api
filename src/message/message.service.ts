import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { MessageDTO } from './dto/message.dto';
import { Message } from './interface/message.interface';

@Injectable()
export class MessageService {

  constructor(
    @InjectModel("Message") private messageModel: Model<Message>    
    ) {}

  async getMessages(): Promise<Message[]> {
    const messages = await this.messageModel.find();
    return messages;
  }

  async addMessage(newMsg: MessageDTO): Promise<Message> {
    const msgAdded = new this.messageModel(newMsg);
    return await msgAdded.save();
  }
}
